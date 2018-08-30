'use strict';

const queryToMongo = require('query-to-mongo');
const querystring = require('querystring');

const MongoClient = require('mongodb').MongoClient;

const {getResourceType, getTypeDefinition} = require('./swaggerUtils');

var mongodb = null; 

function connectHelper(callback) {
  var config = require('../service/config.json');

  var argv = require('minimist')(process.argv);
  var dbhost = argv.dbhost ? argv.dbhost: config.db_host;
  const mongourl = config.db_prot + "://" + dbhost + ":" + config.db_port + "/" + config.db_name;
  MongoClient.connect(mongourl, { useNewUrlParser: true }, function (err, db) {

      if (err) {
        mongodb = null;
        callback(err,null);
      } else {
        mongodb = db.db("tmf");
        callback(null,mongodb);
      }
    }
  );
};


function getMongoQuery(req) {
  var res;
  if(req instanceof Object) {
    res = queryToMongo(req._parsedUrl.query);
  } else {
    res = queryToMongo(querystring.parse(req));
  }

  //
  // test for date-time in query and allow partial equality matching, e.g. ="2018-08-21"
  //
  try {
    const resourceType = getResourceType(req);
    const resourceDefinition = getTypeDefinition(resourceType);
    const properties = Object.keys(res.criteria);
    properties.forEach(prop => {
      var paramDef = resourceDefinition[prop];
      if(paramDef.type === "string" && paramDef.format === "date-time") {
        const propVal = res.criteria[prop];
        // equality test if not the value is an object
        if(!(propVal instanceof Object)) {
          if(!isNaN(Date.parse(propVal))) {
            res.criteria[prop] = {$regex: '^' + propVal + '.*' };
          }
        }
      }
    });
  }
  catch(err) {
    // ignore for now
  }

  res.options.projection = res.options.fields;
  delete res.options.fields;

  return(res);

};

function quotedString(s) {
  return s;
};

function connectDb(callback) {
  if(mongodb) {
      mongodb.stats(function(err, stats) {
        if(stats != null) {
          callback(null,mongodb);
        } else {
          connectHelper(callback);
        }
      });
  } else {
    connectHelper(callback);
  }
};

function connect() {
  return new Promise(function(resolve,reject) {
      connectDb(function(err,db) {
        if(err!=null || db==null) {
          reject(err);
        } else {
          resolve(db);
        };
      });
    });
};

function sendDoc(res,code,doc) {
  // delete internal mongo _id from all documents
  if(Array.isArray(doc)) {
    // remove _id from all documents
    doc.forEach(x => {
      delete x._id;
    });
  } else {
    delete doc._id;
  }

  if(doc.href) {
    res.setHeader('Location',  doc.href);
  }

  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(doc));
}


module.exports = { connect, connectDb, getMongoQuery, sendDoc };

