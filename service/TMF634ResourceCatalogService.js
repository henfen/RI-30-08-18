'use strict';

//Minimal Service with filtering (equality match only) and attribute selection
//Error Handing Need to define a global error hqndler
//Paging and Range based Iterator to be added
//Notification to be added add listener and implement hub

const util = require('util');
const uuid = require('uuid');

const mongoUtils = require('../utils/mongoUtils');
const swaggerUtils = require('../utils/swaggerUtils');
const notificationUtils = require('../utils/notificationUtils');

const {sendDoc} = require('../utils/mongoUtils');

const {setBaseProperties, traverse, 
       addHref, processCommonAttributes } = require('../utils/operationsUtils');

const {validateRequest} = require('../utils/ruleUtils');

const {processAssignmentRules} = require('../utils/operations');

const {getResourceType} = require('../utils/swaggerUtils');

const {TError, TErrorEnum, sendError} = require('../utils/errorUtils');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

exports.tMF634createExportJob = function(req, res, next) {
  /**
   * Creates a 'ExportJob'
   *
   * exportJob TMF634ExportJob_Create The Export Job to be created
   * returns TMF634ExportJob
   **/

  console.log('tMF634createExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF634ResourceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634createExportJob',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF634createExportJob',payload))
    .then(payload => traverse(req,resourceType,payload,[]))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {
            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => sendError(res, internalError))
      })
      .catch((error) => sendError(res, internalError));

    })
    .catch( error => {
      console.log("tMF634createExportJob: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF634createImportJob = function(req, res, next) {
  /**
   * Creates a 'ImportJob'
   *
   * importJob TMF634ImportJob_Create The Import Job to be created
   * returns TMF634ImportJob
   **/

  console.log('tMF634createImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF634ResourceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634createImportJob',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF634createImportJob',payload))
    .then(payload => traverse(req,resourceType,payload,[]))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {
            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => sendError(res, internalError))
      })
      .catch((error) => sendError(res, internalError));

    })
    .catch( error => {
      console.log("tMF634createImportJob: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF634createLogicalResourceSpec = function(req, res, next) {
  /**
   * Creates a 'LogicalResourceSpec'
   *
   * logicalResourceSpec TMF634LogicalResourceSpec_Create The Logical Resource Spec to be created
   * returns TMF634LogicalResourceSpec
   **/

  console.log('tMF634createLogicalResourceSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF634ResourceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634createLogicalResourceSpec',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF634createLogicalResourceSpec',payload))
    .then(payload => traverse(req,resourceType,payload,[]))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {
            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => sendError(res, internalError))
      })
      .catch((error) => sendError(res, internalError));

    })
    .catch( error => {
      console.log("tMF634createLogicalResourceSpec: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF634createPhysicalResourceSpec = function(req, res, next) {
  /**
   * Creates a 'PhysicalResourceSpec'
   *
   * physicalResourceSpec TMF634PhysicalResourceSpec_Create The Physical Resource Spec to be created
   * returns TMF634PhysicalResourceSpec
   **/

  console.log('tMF634createPhysicalResourceSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF634ResourceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634createPhysicalResourceSpec',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF634createPhysicalResourceSpec',payload))
    .then(payload => traverse(req,resourceType,payload,[]))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {
            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => sendError(res, internalError))
      })
      .catch((error) => sendError(res, internalError));

    })
    .catch( error => {
      console.log("tMF634createPhysicalResourceSpec: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF634createResourceCandidate = function(req, res, next) {
  /**
   * Creates a 'ResourceCandidate'
   *
   * resourceCandidate TMF634ResourceCandidate_Create The Resource Candidate to be created
   * returns TMF634ResourceCandidate
   **/

  console.log('tMF634createResourceCandidate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF634ResourceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634createResourceCandidate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF634createResourceCandidate',payload))
    .then(payload => traverse(req,resourceType,payload,[]))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {
            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => sendError(res, internalError))
      })
      .catch((error) => sendError(res, internalError));

    })
    .catch( error => {
      console.log("tMF634createResourceCandidate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF634createResourceCatalog = function(req, res, next) {
  /**
   * Creates a 'ResourceCatalog'
   *
   * resourceCatalog TMF634ResourceCatalog_Create The Resource Catalog to be created
   * returns TMF634ResourceCatalog
   **/

  console.log('tMF634createResourceCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF634ResourceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634createResourceCatalog',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF634createResourceCatalog',payload))
    .then(payload => traverse(req,resourceType,payload,[]))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {
            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => sendError(res, internalError))
      })
      .catch((error) => sendError(res, internalError));

    })
    .catch( error => {
      console.log("tMF634createResourceCatalog: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF634createResourceCategory = function(req, res, next) {
  /**
   * Creates a 'ResourceCategory'
   *
   * resourceCategory TMF634ResourceCategory_Create The Resource Category to be created
   * returns TMF634ResourceCategory
   **/

  console.log('tMF634createResourceCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF634ResourceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634createResourceCategory',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF634createResourceCategory',payload))
    .then(payload => traverse(req,resourceType,payload,[]))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {
            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => sendError(res, internalError))
      })
      .catch((error) => sendError(res, internalError));

    })
    .catch( error => {
      console.log("tMF634createResourceCategory: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF634createResourceSpecification = function(req, res, next) {
  /**
   * Creates a 'ResourceSpecification'
   *
   * resourceSpecification TMF634ResourceSpecification_Create The Resource Specification to be created
   * returns TMF634ResourceSpecification
   **/

  console.log('tMF634createResourceSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF634ResourceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634createResourceSpecification',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF634createResourceSpecification',payload))
    .then(payload => traverse(req,resourceType,payload,[]))
    .then(payload => {

      const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

      mongoUtils.connect().then(db => {
        db.collection(resourceType)
          .insertOne(payload)
          .then(() => {
            sendDoc(res, 201, payload);
            notificationUtils.publish(req,payload);
          })
          .catch((error) => sendError(res, internalError))
      })
      .catch((error) => sendError(res, internalError));

    })
    .catch( error => {
      console.log("tMF634createResourceSpecification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF634deleteExportJob = function(req, res, next) {
  /**
   * Deletes a 'ExportJob' by Id
   *
   * id String Identifier of the Export Job
   * no response value expected for this operation
   **/

  console.log('tMF634deleteExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const id = String(req.swagger.params.id.value);

  const query = {
    id: id
  };

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .deleteOne(query)
      .then(doc => {
        if (doc.result.n == 1) {
           sendDoc(res, 204, {});
           notificationUtils.publish(req,doc);
        } else { 
           sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      }).catch(error => sendError(res, internalError))
  })
  .catch(error => sendError(res, internalError));




};

exports.tMF634deleteImportJob = function(req, res, next) {
  /**
   * Deletes a 'ImportJob' by Id
   *
   * id String Identifier of the Import Job
   * no response value expected for this operation
   **/

  console.log('tMF634deleteImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const id = String(req.swagger.params.id.value);

  const query = {
    id: id
  };

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .deleteOne(query)
      .then(doc => {
        if (doc.result.n == 1) {
           sendDoc(res, 204, {});
           notificationUtils.publish(req,doc);
        } else { 
           sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      }).catch(error => sendError(res, internalError))
  })
  .catch(error => sendError(res, internalError));




};

exports.tMF634deleteLogicalResourceSpec = function(req, res, next) {
  /**
   * Deletes a 'LogicalResourceSpec' by Id
   *
   * id String Identifier of the Logical Resource Spec
   * no response value expected for this operation
   **/

  console.log('tMF634deleteLogicalResourceSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const id = String(req.swagger.params.id.value);

  const query = {
    id: id
  };

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .deleteOne(query)
      .then(doc => {
        if (doc.result.n == 1) {
           sendDoc(res, 204, {});
           notificationUtils.publish(req,doc);
        } else { 
           sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      }).catch(error => sendError(res, internalError))
  })
  .catch(error => sendError(res, internalError));




};

exports.tMF634deletePhysicalResourceSpec = function(req, res, next) {
  /**
   * Deletes a 'PhysicalResourceSpec' by Id
   *
   * id String Identifier of the Physical Resource Spec
   * no response value expected for this operation
   **/

  console.log('tMF634deletePhysicalResourceSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const id = String(req.swagger.params.id.value);

  const query = {
    id: id
  };

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .deleteOne(query)
      .then(doc => {
        if (doc.result.n == 1) {
           sendDoc(res, 204, {});
           notificationUtils.publish(req,doc);
        } else { 
           sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      }).catch(error => sendError(res, internalError))
  })
  .catch(error => sendError(res, internalError));




};

exports.tMF634deleteResourceCandidate = function(req, res, next) {
  /**
   * Deletes a 'ResourceCandidate' by Id
   *
   * id String Identifier of the Resource Candidate
   * no response value expected for this operation
   **/

  console.log('tMF634deleteResourceCandidate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const id = String(req.swagger.params.id.value);

  const query = {
    id: id
  };

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .deleteOne(query)
      .then(doc => {
        if (doc.result.n == 1) {
           sendDoc(res, 204, {});
           notificationUtils.publish(req,doc);
        } else { 
           sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      }).catch(error => sendError(res, internalError))
  })
  .catch(error => sendError(res, internalError));




};

exports.tMF634deleteResourceCatalog = function(req, res, next) {
  /**
   * Deletes a 'ResourceCatalog' by Id
   *
   * id String Identifier of the Resource Catalog
   * no response value expected for this operation
   **/

  console.log('tMF634deleteResourceCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const id = String(req.swagger.params.id.value);

  const query = {
    id: id
  };

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .deleteOne(query)
      .then(doc => {
        if (doc.result.n == 1) {
           sendDoc(res, 204, {});
           notificationUtils.publish(req,doc);
        } else { 
           sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      }).catch(error => sendError(res, internalError))
  })
  .catch(error => sendError(res, internalError));




};

exports.tMF634deleteResourceCategory = function(req, res, next) {
  /**
   * Deletes a 'ResourceCategory' by Id
   *
   * id String Identifier of the Resource Category
   * no response value expected for this operation
   **/

  console.log('tMF634deleteResourceCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const id = String(req.swagger.params.id.value);

  const query = {
    id: id
  };

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .deleteOne(query)
      .then(doc => {
        if (doc.result.n == 1) {
           sendDoc(res, 204, {});
           notificationUtils.publish(req,doc);
        } else { 
           sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      }).catch(error => sendError(res, internalError))
  })
  .catch(error => sendError(res, internalError));




};

exports.tMF634deleteResourceSpecification = function(req, res, next) {
  /**
   * Deletes a 'ResourceSpecification' by Id
   *
   * id String Identifier of the Resource Specification
   * no response value expected for this operation
   **/

  console.log('tMF634deleteResourceSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulDestroy */

  const id = String(req.swagger.params.id.value);

  const query = {
    id: id
  };

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .deleteOne(query)
      .then(doc => {
        if (doc.result.n == 1) {
           sendDoc(res, 204, {});
           notificationUtils.publish(req,doc);
        } else { 
           sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      }).catch(error => sendError(res, internalError))
  })
  .catch(error => sendError(res, internalError));




};

exports.tMF634listExportJob = function(req, res, next) {
  /**
   * List or find 'ExportJob' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * query String For filtering: Used to scope the exported data (optional)
   * path String For filtering: URL of the root resource acting as the source for streaming content to the file specified by the export job (optional)
   * contentType String For filtering: The format of the exported data (optional)
   * status String For filtering: Status of the export job (not started, running, succeeded, failed) (optional)
   * url String For filtering: URL of the file containing the data to be exported (optional)
   * completionDate Date For filtering: Data at which the job was completed (optional)
   * creationDate Date For filtering: Date at which the job was created (optional)
   * errorLog String For filtering: Reason for failure (optional)
   * returns List
   **/

  console.log('tMF634listExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulIndex */
 
  const query = mongoUtils.getMongoQuery(req);

  const resourceType = getResourceType(req);

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");
  
  // Find some documents based on criteria plus attribute selection
  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .find(query.criteria, query.options).toArray()
      .then(doc => {
        sendDoc(res, 200, doc);
      })
      .catch(error => {
        console.log("tMF634listExportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634listExportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634listImportJob = function(req, res, next) {
  /**
   * List or find 'ImportJob' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * contentType String For filtering: Indicates the format of the imported data (optional)
   * path String For filtering: URL of the root resource where the content of the file specified by the import job must be applied (optional)
   * status String For filtering: Status of the import job (not started, running, succeeded, failed) (optional)
   * url String For filtering: URL of the file containing the data to be imported (optional)
   * completionDate Date For filtering: Date at which the job was completed (optional)
   * creationDate Date For filtering: Date at which the job was created (optional)
   * errorLog String For filtering: Reason for failure if status is failed (optional)
   * returns List
   **/

  console.log('tMF634listImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulIndex */
 
  const query = mongoUtils.getMongoQuery(req);

  const resourceType = getResourceType(req);

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");
  
  // Find some documents based on criteria plus attribute selection
  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .find(query.criteria, query.options).toArray()
      .then(doc => {
        sendDoc(res, 200, doc);
      })
      .catch(error => {
        console.log("tMF634listImportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634listImportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634listLogicalResourceSpec = function(req, res, next) {
  /**
   * List or find 'LogicalResourceSpec' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name given to this REST resource (optional)
   * @type String For filtering: Class type of this REST resource (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: The (immediate) base class type of this REST resource (optional)
   * version String For filtering: Resource Specification version (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: Date and time of the last update of this REST resource (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status of the resource specification (optional)
   * isBundle Boolean For filtering: A flag indicates that if this resource specification is a bundled specification (true) or single (false). (optional)
   * category String For filtering: Category of the target resource like NetworkConnectivity, PhysicalLinks, Generic, L2Network and so on. (optional)
   * targetResourceSchema.@type String For filtering: Class type of the target resource (optional)
   * targetResourceSchema.@schemaLocation String For filtering: This field provides a link to the schema describing the target resource (optional)
   * feature.version String For filtering: feature version (optional)
   * feature.name String For filtering: Unique name given to the feature. it is Required if the feature is not introduced as a separate REST resource (optional)
   * feature.@type String For filtering: The optional (class) type of the feature (optional)
   * feature.isBundle Boolean For filtering: A flag indicating if the feature is bundle (true) or not (false). (optional)
   * feature.isEnabled Boolean For filtering: A flag indicating if the feature is enabled (true) or not (false). (optional)
   * attachment.name String For filtering: name given to the attachment (optional)
   * attachment.@type String For filtering: Attachment class  type (optional)
   * attachment.uri String For filtering: Uniform Resource Identifier (URI) of the attachment (optional)
   * attachment.mimeType String For filtering: Attachment mime type such as extension file for video, picture and document (optional)
   * relatedParty.role String For filtering: Role of the related party. (optional)
   * relatedParty.name String For filtering: Name of the related party (optional)
   * resourceSpecCharacteristic.name String For filtering: A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications. (optional)
   * resourceSpecCharacteristic.valueType String For filtering: A kind of value that the characteristic can take on, such as numeric, text and so forth (optional)
   * resourceSpecCharacteristic.configurable Boolean For filtering: If true, the Boolean indicates that the ResourceSpecCharacteristic is configurable (optional)
   * resourceSpecCharacteristic.@type String For filtering: (Class) type of the ResourceSpecCharacteristic (optional)
   * resourceSpecCharacteristic.@schemaLocation String For filtering: A link to the schema describing this characteristic specification (optional)
   * resourceSpecCharacteristic.@valueSchemaLocation String For filtering: This (optional) field provides a link to the schema describing the value type (optional)
   * resourceSpecCharacteristic.minCardinality Integer For filtering: The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality. (optional)
   * resourceSpecCharacteristic.maxCardinality Integer For filtering: The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality. (optional)
   * resourceSpecCharacteristic.isUnique Boolean For filtering: An indicator that specifies if a value is unique for the specification. Possible values are; \"unique while value is in effect\" and \"unique whether value is in effect or not\" (optional)
   * resourceSpecCharacteristic.regex String For filtering: A rule or principle represented in regular expression used to derive the value of a characteristic value. (optional)
   * resourceSpecCharacteristic.extensible Boolean For filtering: An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource. (optional)
   * resourceSpecRelationship.type String For filtering: Type of relationship such as migration, substitution, dependency, exclusivity (optional)
   * resourceSpecRelationship.role String For filtering: The association role for this resource specification (optional)
   * resourceSpecRelationship.name String For filtering: The name given to the target resource specification instance (optional)
   * returns List
   **/

  console.log('tMF634listLogicalResourceSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulIndex */
 
  const query = mongoUtils.getMongoQuery(req);

  const resourceType = getResourceType(req);

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");
  
  // Find some documents based on criteria plus attribute selection
  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .find(query.criteria, query.options).toArray()
      .then(doc => {
        sendDoc(res, 200, doc);
      })
      .catch(error => {
        console.log("tMF634listLogicalResourceSpec: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634listLogicalResourceSpec: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634listPhysicalResourceSpec = function(req, res, next) {
  /**
   * List or find 'PhysicalResourceSpec' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name given to this REST resource (optional)
   * @type String For filtering: Class type of this REST resource (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: The (immediate) base class type of this REST resource (optional)
   * version String For filtering: Resource Specification version (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: Date and time of the last update of this REST resource (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status of the resource specification (optional)
   * isBundle Boolean For filtering: A flag indicates that if this resource specification is a bundled specification (true) or single (false). (optional)
   * category String For filtering: Category of the target resource like NetworkConnectivity, PhysicalLinks, Generic, L2Network and so on. (optional)
   * model String For filtering: This is a string that represents a manufacturer-allocated number used to identify the general type and/or category of the hardware item. This, in combination with the Part and the Vendor, identify different types of hardware items. The SerialNumber can then be used to differentiate between different instances of the same type of hardware item. This is an optional attribute. (optional)
   * part String For filtering: This is a string that defines a manufacturer-allocated part number assigned by the organization that manufactures the hardware item. This, in combination with the Model and the Vendor, identify different types of hardware items. The SerialNumber can then be used to differentiate between different instances of the same type of hardware item. This is a REQUIRED attribute. (optional)
   * sku String For filtering: This is a string that defines the manufacturer-allocated Stock Keeping Unit (SKU) number of the hardware item. This is an optional attribute. (optional)
   * vendor String For filtering: This is a string that defines the name of the manufacturer. This, in combination with the Model and the Part, identify different types of hardware items. The SerialNumber can then be used to differentiate between different instances of the same type of hardware item. This is a REQUIRED attribute for a physical resource. (optional)
   * place.name String For filtering: A user-friendly name for the place, such as \"Paris Store\", \"London Store\", \"Main Home\" (optional)
   * place.role String For filtering: Role of the place (for instance: 'home delivery', 'shop retrieval') (optional)
   * targetResourceSchema.@type String For filtering: Class type of the target resource (optional)
   * targetResourceSchema.@schemaLocation String For filtering: This field provides a link to the schema describing the target resource (optional)
   * feature.version String For filtering: feature version (optional)
   * feature.name String For filtering: Unique name given to the feature. it is Required if the feature is not introduced as a separate REST resource (optional)
   * feature.@type String For filtering: The optional (class) type of the feature (optional)
   * feature.isBundle Boolean For filtering: A flag indicating if the feature is bundle (true) or not (false). (optional)
   * feature.isEnabled Boolean For filtering: A flag indicating if the feature is enabled (true) or not (false). (optional)
   * attachment.name String For filtering: name given to the attachment (optional)
   * attachment.@type String For filtering: Attachment class  type (optional)
   * attachment.uri String For filtering: Uniform Resource Identifier (URI) of the attachment (optional)
   * attachment.mimeType String For filtering: Attachment mime type such as extension file for video, picture and document (optional)
   * relatedParty.role String For filtering: Role of the related party. (optional)
   * relatedParty.name String For filtering: Name of the related party (optional)
   * resourceSpecCharacteristic.name String For filtering: A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications. (optional)
   * resourceSpecCharacteristic.valueType String For filtering: A kind of value that the characteristic can take on, such as numeric, text and so forth (optional)
   * resourceSpecCharacteristic.configurable Boolean For filtering: If true, the Boolean indicates that the ResourceSpecCharacteristic is configurable (optional)
   * resourceSpecCharacteristic.@type String For filtering: (Class) type of the ResourceSpecCharacteristic (optional)
   * resourceSpecCharacteristic.@schemaLocation String For filtering: A link to the schema describing this characteristic specification (optional)
   * resourceSpecCharacteristic.@valueSchemaLocation String For filtering: This (optional) field provides a link to the schema describing the value type (optional)
   * resourceSpecCharacteristic.minCardinality Integer For filtering: The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality. (optional)
   * resourceSpecCharacteristic.maxCardinality Integer For filtering: The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality. (optional)
   * resourceSpecCharacteristic.isUnique Boolean For filtering: An indicator that specifies if a value is unique for the specification. Possible values are; \"unique while value is in effect\" and \"unique whether value is in effect or not\" (optional)
   * resourceSpecCharacteristic.regex String For filtering: A rule or principle represented in regular expression used to derive the value of a characteristic value. (optional)
   * resourceSpecCharacteristic.extensible Boolean For filtering: An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource. (optional)
   * resourceSpecRelationship.type String For filtering: Type of relationship such as migration, substitution, dependency, exclusivity (optional)
   * resourceSpecRelationship.role String For filtering: The association role for this resource specification (optional)
   * resourceSpecRelationship.name String For filtering: The name given to the target resource specification instance (optional)
   * returns List
   **/

  console.log('tMF634listPhysicalResourceSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulIndex */
 
  const query = mongoUtils.getMongoQuery(req);

  const resourceType = getResourceType(req);

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");
  
  // Find some documents based on criteria plus attribute selection
  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .find(query.criteria, query.options).toArray()
      .then(doc => {
        sendDoc(res, 200, doc);
      })
      .catch(error => {
        console.log("tMF634listPhysicalResourceSpec: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634listPhysicalResourceSpec: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634listResourceCandidate = function(req, res, next) {
  /**
   * List or find 'ResourceCandidate' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name given to this REST resource (optional)
   * @type String For filtering: Class type of this REST resource (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: The (immediate) base class type of this REST resource (optional)
   * version String For filtering: the version of resource candidate (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: Date and time of the last update of this REST resource (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status of the resource candidate. (optional)
   * category.version String For filtering: Category version (optional)
   * category.name String For filtering: Name of the category (optional)
   * category.@type String For filtering: the class type of the category (optional)
   * resourceSpecification.version String For filtering: ResourceSpecification version (optional)
   * resourceSpecification.name String For filtering: Name given to the ResourceSpecification (optional)
   * resourceSpecification.@type String For filtering: The (class) type of the ResourceSpecification (optional)
   * returns List
   **/

  console.log('tMF634listResourceCandidate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulIndex */
 
  const query = mongoUtils.getMongoQuery(req);

  const resourceType = getResourceType(req);

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");
  
  // Find some documents based on criteria plus attribute selection
  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .find(query.criteria, query.options).toArray()
      .then(doc => {
        sendDoc(res, 200, doc);
      })
      .catch(error => {
        console.log("tMF634listResourceCandidate: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634listResourceCandidate: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634listResourceCatalog = function(req, res, next) {
  /**
   * List or find 'ResourceCatalog' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name of the catalog (optional)
   * @type String For filtering: Indicates the (class) type of catalog. For resource catalogs, this will be 'ResourceCatalog'. (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: Indicates<b> </b>the base (class) type of this REST resource (optional)
   * version String For filtering: Catalog version (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: Date and time of the last update (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
   * relatedParty.role String For filtering: Role of the related party. (optional)
   * relatedParty.name String For filtering: Name of the related party (optional)
   * category.version String For filtering: Category version (optional)
   * category.name String For filtering: Name of the category (optional)
   * category.@type String For filtering: the class type of the category (optional)
   * returns List
   **/

  console.log('tMF634listResourceCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulIndex */
 
  const query = mongoUtils.getMongoQuery(req);

  const resourceType = getResourceType(req);

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");
  
  // Find some documents based on criteria plus attribute selection
  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .find(query.criteria, query.options).toArray()
      .then(doc => {
        sendDoc(res, 200, doc);
      })
      .catch(error => {
        console.log("tMF634listResourceCatalog: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634listResourceCatalog: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634listResourceCategory = function(req, res, next) {
  /**
   * List or find 'ResourceCategory' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name of the category (optional)
   * @type String For filtering: The (class) type of this category (optional)
   * @schemalLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: Immediate base class type of this category (optional)
   * version String For filtering: Category version (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
   * lastUpdate Date For filtering: Date and time of the last update (optional)
   * parentId String For filtering: Unique identifier of the parent category (optional)
   * isRoot Boolean For filtering: If true, this Boolean indicates that the category is a root of categories (optional)
   * category.version String For filtering: Category version (optional)
   * category.name String For filtering: Name of the category (optional)
   * category.@type String For filtering: the class type of the category (optional)
   * resourceCandidate.version String For filtering: ResourceCandidate version (optional)
   * resourceCandidate.name String For filtering: Name given to the ResourceCandidate (optional)
   * resourceCandidate.@type String For filtering: The (class) type of the ResourceCandidate (optional)
   * relatedParty.role String For filtering: Role of the related party. (optional)
   * relatedParty.name String For filtering: Name of the related party (optional)
   * returns List
   **/

  console.log('tMF634listResourceCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulIndex */
 
  const query = mongoUtils.getMongoQuery(req);

  const resourceType = getResourceType(req);

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");
  
  // Find some documents based on criteria plus attribute selection
  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .find(query.criteria, query.options).toArray()
      .then(doc => {
        sendDoc(res, 200, doc);
      })
      .catch(error => {
        console.log("tMF634listResourceCategory: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634listResourceCategory: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634listResourceSpecification = function(req, res, next) {
  /**
   * List or find 'ResourceSpecification' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name given to this REST resource (optional)
   * @type String For filtering: Class type of this REST resource (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: The (immediate) base class type of this REST resource (optional)
   * version String For filtering: Resource Specification version (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: Date and time of the last update of this REST resource (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status of the resource specification (optional)
   * isBundle Boolean For filtering: A flag indicates that if this resource specification is a bundled specification (true) or single (false). (optional)
   * category String For filtering: Category of the target resource like NetworkConnectivity, PhysicalLinks, Generic, L2Network and so on. (optional)
   * targetResourceSchema.@type String For filtering: Class type of the target resource (optional)
   * targetResourceSchema.@schemaLocation String For filtering: This field provides a link to the schema describing the target resource (optional)
   * feature.version String For filtering: feature version (optional)
   * feature.name String For filtering: Unique name given to the feature. it is Required if the feature is not introduced as a separate REST resource (optional)
   * feature.@type String For filtering: The optional (class) type of the feature (optional)
   * feature.isBundle Boolean For filtering: A flag indicating if the feature is bundle (true) or not (false). (optional)
   * feature.isEnabled Boolean For filtering: A flag indicating if the feature is enabled (true) or not (false). (optional)
   * attachment.name String For filtering: name given to the attachment (optional)
   * attachment.@type String For filtering: Attachment class  type (optional)
   * attachment.uri String For filtering: Uniform Resource Identifier (URI) of the attachment (optional)
   * attachment.mimeType String For filtering: Attachment mime type such as extension file for video, picture and document (optional)
   * relatedParty.role String For filtering: Role of the related party. (optional)
   * relatedParty.name String For filtering: Name of the related party (optional)
   * resourceSpecCharacteristic.name String For filtering: A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications. (optional)
   * resourceSpecCharacteristic.valueType String For filtering: A kind of value that the characteristic can take on, such as numeric, text and so forth (optional)
   * resourceSpecCharacteristic.configurable Boolean For filtering: If true, the Boolean indicates that the ResourceSpecCharacteristic is configurable (optional)
   * resourceSpecCharacteristic.@type String For filtering: (Class) type of the ResourceSpecCharacteristic (optional)
   * resourceSpecCharacteristic.@schemaLocation String For filtering: A link to the schema describing this characteristic specification (optional)
   * resourceSpecCharacteristic.@valueSchemaLocation String For filtering: This (optional) field provides a link to the schema describing the value type (optional)
   * resourceSpecCharacteristic.minCardinality Integer For filtering: The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality. (optional)
   * resourceSpecCharacteristic.maxCardinality Integer For filtering: The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality. (optional)
   * resourceSpecCharacteristic.isUnique Boolean For filtering: An indicator that specifies if a value is unique for the specification. Possible values are; \"unique while value is in effect\" and \"unique whether value is in effect or not\" (optional)
   * resourceSpecCharacteristic.regex String For filtering: A rule or principle represented in regular expression used to derive the value of a characteristic value. (optional)
   * resourceSpecCharacteristic.extensible Boolean For filtering: An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a resource. (optional)
   * resourceSpecRelationship.type String For filtering: Type of relationship such as migration, substitution, dependency, exclusivity (optional)
   * resourceSpecRelationship.role String For filtering: The association role for this resource specification (optional)
   * resourceSpecRelationship.name String For filtering: The name given to the target resource specification instance (optional)
   * returns List
   **/

  console.log('tMF634listResourceSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulIndex */
 
  const query = mongoUtils.getMongoQuery(req);

  const resourceType = getResourceType(req);

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");
  
  // Find some documents based on criteria plus attribute selection
  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .find(query.criteria, query.options).toArray()
      .then(doc => {
        sendDoc(res, 200, doc);
      })
      .catch(error => {
        console.log("tMF634listResourceSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634listResourceSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634patchLogicalResourceSpec = function(req, res, next) {
  /**
   * Updates partially a 'LogicalResourceSpec' by Id
   *
   * id String Identifier of the Logical Resource Spec
   * logicalResourceSpec TMF634LogicalResourceSpec_Update The Logical Resource Spec to be updated
   * returns TMF634LogicalResourceSpec
   **/

  console.log('tMF634patchLogicalResourceSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634patchLogicalResourceSpec',payload))
    .then(payload => traverse(req,resourceType,payload))
    .then(payload => {

      mongoUtils.connect().then(db => {
        // first check if resource exists
        db.collection(resourceType)
        .findOne(query)
        .then(old => {
          if (old==undefined) {
            return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
          }
          // then update and return the complete resource
          db.collection(resourceType)
            .updateOne(query, {$set: payload}, {upsert: false})
            .then(() => {
              db.collection(resourceType).findOne(query)
                .then((doc) => {
                  sendDoc(res, 201, doc);
                  notificationUtils.publish(req,doc,old);
                })
                .catch((error) => {
                  console.log("tMF634patchLogicalResourceSpec error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF634patchLogicalResourceSpec error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF634patchLogicalResourceSpec error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF634patchLogicalResourceSpec error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634patchLogicalResourceSpec error=" + error);
    return sendError(res, error);
  });




};

exports.tMF634patchPhysicalResourceSpec = function(req, res, next) {
  /**
   * Updates partially a 'PhysicalResourceSpec' by Id
   *
   * id String Identifier of the Physical Resource Spec
   * physicalResourceSpec TMF634PhysicalResourceSpec_Update The Physical Resource Spec to be updated
   * returns TMF634PhysicalResourceSpec
   **/

  console.log('tMF634patchPhysicalResourceSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634patchPhysicalResourceSpec',payload))
    .then(payload => traverse(req,resourceType,payload))
    .then(payload => {

      mongoUtils.connect().then(db => {
        // first check if resource exists
        db.collection(resourceType)
        .findOne(query)
        .then(old => {
          if (old==undefined) {
            return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
          }
          // then update and return the complete resource
          db.collection(resourceType)
            .updateOne(query, {$set: payload}, {upsert: false})
            .then(() => {
              db.collection(resourceType).findOne(query)
                .then((doc) => {
                  sendDoc(res, 201, doc);
                  notificationUtils.publish(req,doc,old);
                })
                .catch((error) => {
                  console.log("tMF634patchPhysicalResourceSpec error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF634patchPhysicalResourceSpec error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF634patchPhysicalResourceSpec error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF634patchPhysicalResourceSpec error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634patchPhysicalResourceSpec error=" + error);
    return sendError(res, error);
  });




};

exports.tMF634patchResourceCandidate = function(req, res, next) {
  /**
   * Updates partially a 'ResourceCandidate' by Id
   *
   * id String Identifier of the Resource Candidate
   * resourceCandidate TMF634ResourceCandidate_Update The Resource Candidate to be updated
   * returns TMF634ResourceCandidate
   **/

  console.log('tMF634patchResourceCandidate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634patchResourceCandidate',payload))
    .then(payload => traverse(req,resourceType,payload))
    .then(payload => {

      mongoUtils.connect().then(db => {
        // first check if resource exists
        db.collection(resourceType)
        .findOne(query)
        .then(old => {
          if (old==undefined) {
            return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
          }
          // then update and return the complete resource
          db.collection(resourceType)
            .updateOne(query, {$set: payload}, {upsert: false})
            .then(() => {
              db.collection(resourceType).findOne(query)
                .then((doc) => {
                  sendDoc(res, 201, doc);
                  notificationUtils.publish(req,doc,old);
                })
                .catch((error) => {
                  console.log("tMF634patchResourceCandidate error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF634patchResourceCandidate error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF634patchResourceCandidate error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF634patchResourceCandidate error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634patchResourceCandidate error=" + error);
    return sendError(res, error);
  });




};

exports.tMF634patchResourceCatalog = function(req, res, next) {
  /**
   * Updates partially a 'ResourceCatalog' by Id
   *
   * id String Identifier of the Resource Catalog
   * resourceCatalog TMF634ResourceCatalog_Update The Resource Catalog to be updated
   * returns TMF634ResourceCatalog
   **/

  console.log('tMF634patchResourceCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634patchResourceCatalog',payload))
    .then(payload => traverse(req,resourceType,payload))
    .then(payload => {

      mongoUtils.connect().then(db => {
        // first check if resource exists
        db.collection(resourceType)
        .findOne(query)
        .then(old => {
          if (old==undefined) {
            return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
          }
          // then update and return the complete resource
          db.collection(resourceType)
            .updateOne(query, {$set: payload}, {upsert: false})
            .then(() => {
              db.collection(resourceType).findOne(query)
                .then((doc) => {
                  sendDoc(res, 201, doc);
                  notificationUtils.publish(req,doc,old);
                })
                .catch((error) => {
                  console.log("tMF634patchResourceCatalog error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF634patchResourceCatalog error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF634patchResourceCatalog error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF634patchResourceCatalog error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634patchResourceCatalog error=" + error);
    return sendError(res, error);
  });




};

exports.tMF634patchResourceCategory = function(req, res, next) {
  /**
   * Updates partially a 'ResourceCategory' by Id
   *
   * id String Identifier of the Resource Category
   * resourceCategory TMF634ResourceCategory_Update The Resource Category to be updated
   * returns TMF634ResourceCategory
   **/

  console.log('tMF634patchResourceCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634patchResourceCategory',payload))
    .then(payload => traverse(req,resourceType,payload))
    .then(payload => {

      mongoUtils.connect().then(db => {
        // first check if resource exists
        db.collection(resourceType)
        .findOne(query)
        .then(old => {
          if (old==undefined) {
            return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
          }
          // then update and return the complete resource
          db.collection(resourceType)
            .updateOne(query, {$set: payload}, {upsert: false})
            .then(() => {
              db.collection(resourceType).findOne(query)
                .then((doc) => {
                  sendDoc(res, 201, doc);
                  notificationUtils.publish(req,doc,old);
                })
                .catch((error) => {
                  console.log("tMF634patchResourceCategory error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF634patchResourceCategory error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF634patchResourceCategory error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF634patchResourceCategory error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634patchResourceCategory error=" + error);
    return sendError(res, error);
  });




};

exports.tMF634patchResourceSpecification = function(req, res, next) {
  /**
   * Updates partially a 'ResourceSpecification' by Id
   *
   * id String Identifier of the Resource Specification
   * resourceSpecification TMF634ResourceSpecification_Update The Resource Specification to be updated
   * returns TMF634ResourceSpecification
   **/

  console.log('tMF634patchResourceSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF634patchResourceSpecification',payload))
    .then(payload => traverse(req,resourceType,payload))
    .then(payload => {

      mongoUtils.connect().then(db => {
        // first check if resource exists
        db.collection(resourceType)
        .findOne(query)
        .then(old => {
          if (old==undefined) {
            return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
          }
          // then update and return the complete resource
          db.collection(resourceType)
            .updateOne(query, {$set: payload}, {upsert: false})
            .then(() => {
              db.collection(resourceType).findOne(query)
                .then((doc) => {
                  sendDoc(res, 201, doc);
                  notificationUtils.publish(req,doc,old);
                })
                .catch((error) => {
                  console.log("tMF634patchResourceSpecification error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF634patchResourceSpecification error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF634patchResourceSpecification error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF634patchResourceSpecification error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634patchResourceSpecification error=" + error);
    return sendError(res, error);
  });




};

exports.tMF634registerListener = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * data TMF634EventSubscriptionInput Data containing the callback endpoint to deliver the information
   * returns TMF634EventSubscription
   **/

  console.log('tMF634registerListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF634retrieveExportJob = function(req, res, next) {
  /**
   * Retrieves a 'ExportJob' by Id
   *
   * id String Identifier of the Export Job
   * returns List
   **/

  console.log('tMF634retrieveExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var id = String(req.swagger.params.id.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = id

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .findOne(query.criteria, query.options)
      .then(doc => {
        if(doc) {
          sendDoc(res, 200, doc)
        } else {
          sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      })
      .catch(error => {
        console.log("tMF634retrieveExportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634retrieveExportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634retrieveImportJob = function(req, res, next) {
  /**
   * Retrieves a 'ImportJob' by Id
   *
   * id String Identifier of the Import Job
   * returns List
   **/

  console.log('tMF634retrieveImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var id = String(req.swagger.params.id.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = id

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .findOne(query.criteria, query.options)
      .then(doc => {
        if(doc) {
          sendDoc(res, 200, doc)
        } else {
          sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      })
      .catch(error => {
        console.log("tMF634retrieveImportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634retrieveImportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634retrieveLogicalResourceSpec = function(req, res, next) {
  /**
   * Retrieves a 'LogicalResourceSpec' by Id
   *
   * id String Identifier of the Logical Resource Spec
   * returns List
   **/

  console.log('tMF634retrieveLogicalResourceSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var id = String(req.swagger.params.id.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = id

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .findOne(query.criteria, query.options)
      .then(doc => {
        if(doc) {
          sendDoc(res, 200, doc)
        } else {
          sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      })
      .catch(error => {
        console.log("tMF634retrieveLogicalResourceSpec: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634retrieveLogicalResourceSpec: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634retrievePhysicalResourceSpec = function(req, res, next) {
  /**
   * Retrieves a 'PhysicalResourceSpec' by Id
   *
   * id String Identifier of the Physical Resource Spec
   * returns List
   **/

  console.log('tMF634retrievePhysicalResourceSpec :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var id = String(req.swagger.params.id.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = id

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .findOne(query.criteria, query.options)
      .then(doc => {
        if(doc) {
          sendDoc(res, 200, doc)
        } else {
          sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      })
      .catch(error => {
        console.log("tMF634retrievePhysicalResourceSpec: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634retrievePhysicalResourceSpec: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634retrieveResourceCandidate = function(req, res, next) {
  /**
   * Retrieves a 'ResourceCandidate' by Id
   *
   * id String Identifier of the Resource Candidate
   * returns List
   **/

  console.log('tMF634retrieveResourceCandidate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var id = String(req.swagger.params.id.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = id

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .findOne(query.criteria, query.options)
      .then(doc => {
        if(doc) {
          sendDoc(res, 200, doc)
        } else {
          sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      })
      .catch(error => {
        console.log("tMF634retrieveResourceCandidate: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634retrieveResourceCandidate: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634retrieveResourceCatalog = function(req, res, next) {
  /**
   * Retrieves a 'ResourceCatalog' by Id
   *
   * id String Identifier of the Resource Catalog
   * returns List
   **/

  console.log('tMF634retrieveResourceCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var id = String(req.swagger.params.id.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = id

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .findOne(query.criteria, query.options)
      .then(doc => {
        if(doc) {
          sendDoc(res, 200, doc)
        } else {
          sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      })
      .catch(error => {
        console.log("tMF634retrieveResourceCatalog: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634retrieveResourceCatalog: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634retrieveResourceCategory = function(req, res, next) {
  /**
   * Retrieves a 'ResourceCategory' by Id
   *
   * id String Identifier of the Resource Category
   * returns List
   **/

  console.log('tMF634retrieveResourceCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var id = String(req.swagger.params.id.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = id

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .findOne(query.criteria, query.options)
      .then(doc => {
        if(doc) {
          sendDoc(res, 200, doc)
        } else {
          sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      })
      .catch(error => {
        console.log("tMF634retrieveResourceCategory: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634retrieveResourceCategory: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634retrieveResourceSpecification = function(req, res, next) {
  /**
   * Retrieves a 'ResourceSpecification' by Id
   *
   * id String Identifier of the Resource Specification
   * returns List
   **/

  console.log('tMF634retrieveResourceSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulShow */

  var id = String(req.swagger.params.id.value);

  var query = mongoUtils.getMongoQuery(req);
  query.criteria.id = id

  const resourceType = getResourceType(req); 

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Internal database error");

  mongoUtils.connect().then(db => {
    db.collection(resourceType)
      .findOne(query.criteria, query.options)
      .then(doc => {
        if(doc) {
          sendDoc(res, 200, doc)
        } else {
          sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id found"));
        }
      })
      .catch(error => {
        console.log("tMF634retrieveResourceSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF634retrieveResourceSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF634unregisterListener = function(req, res, next) {
  /**
   * Unregister a listener
   * Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * id String The id of the registered listener
   * no response value expected for this operation
   **/

  console.log('tMF634unregisterListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};



