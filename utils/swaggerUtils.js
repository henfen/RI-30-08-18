'use strict';

var fs = require('fs'),
    path = require('path'),
    jsyaml = require('js-yaml');

const {TError, TErrorEnum} = require('../utils/errorUtils');

var spec = null;
var swaggerDoc = null;

function getSwaggerDoc() {
  if(swaggerDoc==null) {
    spec = fs.readFileSync(path.join(__dirname,'../api/swagger.yaml'), 'utf8');
    swaggerDoc = jsyaml.safeLoad(spec);
  };
  return swaggerDoc;
}

function getTypeDefinition(type) {
	var def;
	const meta = getSwaggerDoc();
  if(!(meta==undefined || meta.definitions==undefined || 
       meta.definitions[type]==undefined || 
       meta.definitions[type].properties==undefined)) {
 				def = meta.definitions[type].properties;
 	}
 	return def;
}

function getResourceType(req) {
	var type;
	const swaggerDoc = getSwaggerDoc();

	//
	// All of this is just to get a proper type also for delete operations
	// 

	var pathpattern = req.swagger.operationParameters[0].path[1];

	if(swaggerDoc.paths[pathpattern] !== undefined ) {
		// lookup the type of the base post or get operation for the url
	 	//
	 	// "/productCatalogManagement/v2/catalog/{id}": {
    //    "get": {
    //      "responses": {
    //         "200": {
    //            "schema": {
    //                "items": {
    //                    "$ref": "#/definitions/TMF620Catalog"
    //
    // and without the items part if not returning an array

		var p = swaggerDoc.paths[pathpattern];

		// not all APIs have support for GET all resources
		// in these cases, we should be able to pick the correct type using the post path
		// TODO: What if not a post operation for these cases?

		if( p.post !== undefined && p.post.responses["201"] !== undefined) {
			p = p.post.responses["201"];
		} else if( p.get !== undefined && p.get.responses["200"] !== undefined) {
			p = p.get.responses["200"];
		}

		if(p.schema!==undefined) {
			if(p.schema.$ref !== undefined) {
				type = p.schema.$ref; 
			} else if(p.schema.items.$ref !== undefined) {
				type = p.schema.items.$ref;
			}
		} 

		if(type !== undefined) {
			// now type should be something like  "$ref": "#/definitions/TMF620Catalog"
			// select the last part
			type = type.split('/').slice(-1)[0];
		}
	}

	return type;
}

function getPayload(req) {
  return new Promise(function(resolve, reject) {
    const payloadType=getPayloadType(req);
    if(payloadType) {
      if(req.swagger.params[payloadType] != null) {
        return resolve(req.swagger.params[payloadType].value);
      }
    };
    reject(new TError(TErrorEnum.INVALID_BODY,"Payload not found"))
  });
}

function getPayloadType(req) {
  var payloadType=null;
  req.swagger.operationParameters.every(function(param) {
    if(param.schema.in === 'body') {
      payloadType = param.schema.name;
      return false; // break 
    }
    return true; // continue with next
  });
  return payloadType;
};

function getURLScheme() {
  return "http";
}

function getHost() {
  const swaggerDoc = getSwaggerDoc();
  return swaggerDoc.host;
}

function hasProperty (obj, path) {
  var arr = path.split('.');
  while (arr.length && (obj = obj[arr.shift()]));
  return (obj !== undefined);
}

module.exports = { 
                   getSwaggerDoc, 
                   getTypeDefinition,
                   getResourceType, 
				   				 getPayloadType, 
				   				 getPayload, 
				   				 getURLScheme,
				   				 getHost 
				   			 };
