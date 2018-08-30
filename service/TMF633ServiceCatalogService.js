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

exports.tMF633createExportJob = function(req, res, next) {
  /**
   * Creates a 'ExportJob'
   *
   * exportJob TMF633ExportJob_Create The Export Job to be created
   * returns TMF633ExportJob
   **/

  console.log('tMF633createExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF633ServiceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF633createExportJob',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF633createExportJob',payload))
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
      console.log("tMF633createExportJob: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF633createImportJob = function(req, res, next) {
  /**
   * Creates a 'ImportJob'
   *
   * importJob TMF633ImportJob_Create The Import Job to be created
   * returns TMF633ImportJob
   **/

  console.log('tMF633createImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF633ServiceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF633createImportJob',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF633createImportJob',payload))
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
      console.log("tMF633createImportJob: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF633createServiceCandidate = function(req, res, next) {
  /**
   * Creates a 'ServiceCandidate'
   *
   * serviceCandidate TMF633ServiceCandidate_Create The Service Candidate to be created
   * returns TMF633ServiceCandidate
   **/

  console.log('tMF633createServiceCandidate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF633ServiceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF633createServiceCandidate',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF633createServiceCandidate',payload))
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
      console.log("tMF633createServiceCandidate: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF633createServiceCatalog = function(req, res, next) {
  /**
   * Creates a 'ServiceCatalog'
   *
   * serviceCatalog TMF633ServiceCatalog_Create The Service Catalog to be created
   * returns TMF633ServiceCatalog
   **/

  console.log('tMF633createServiceCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF633ServiceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF633createServiceCatalog',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF633createServiceCatalog',payload))
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
      console.log("tMF633createServiceCatalog: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF633createServiceCategory = function(req, res, next) {
  /**
   * Creates a 'ServiceCategory'
   *
   * serviceCategory TMF633ServiceCategory_Create The Service Category to be created
   * returns TMF633ServiceCategory
   **/

  console.log('tMF633createServiceCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF633ServiceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF633createServiceCategory',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF633createServiceCategory',payload))
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
      console.log("tMF633createServiceCategory: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF633createServiceSpecification = function(req, res, next) {
  /**
   * Creates a 'ServiceSpecification'
   *
   * serviceSpecification TMF633ServiceSpecification_Create The Service Specification to be created
   * returns TMF633ServiceSpecification
   **/

  console.log('tMF633createServiceSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF633ServiceCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF633createServiceSpecification',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF633createServiceSpecification',payload))
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
      console.log("tMF633createServiceSpecification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF633deleteExportJob = function(req, res, next) {
  /**
   * Deletes a 'ExportJob' by Id
   *
   * id String Identifier of the Export Job
   * no response value expected for this operation
   **/

  console.log('tMF633deleteExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF633deleteImportJob = function(req, res, next) {
  /**
   * Deletes a 'ImportJob' by Id
   *
   * id String Identifier of the Import Job
   * no response value expected for this operation
   **/

  console.log('tMF633deleteImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF633deleteServiceCandidate = function(req, res, next) {
  /**
   * Deletes a 'ServiceCandidate' by Id
   *
   * id String Identifier of the Service Candidate
   * no response value expected for this operation
   **/

  console.log('tMF633deleteServiceCandidate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF633deleteServiceCatalog = function(req, res, next) {
  /**
   * Deletes a 'ServiceCatalog' by Id
   *
   * id String Identifier of the Service Catalog
   * no response value expected for this operation
   **/

  console.log('tMF633deleteServiceCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF633deleteServiceCategory = function(req, res, next) {
  /**
   * Deletes a 'ServiceCategory' by Id
   *
   * id String Identifier of the Service Category
   * no response value expected for this operation
   **/

  console.log('tMF633deleteServiceCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF633deleteServiceSpecification = function(req, res, next) {
  /**
   * Deletes a 'ServiceSpecification' by Id
   *
   * id String Identifier of the Service Specification
   * no response value expected for this operation
   **/

  console.log('tMF633deleteServiceSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF633listExportJob = function(req, res, next) {
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

  console.log('tMF633listExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633listExportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633listExportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633listImportJob = function(req, res, next) {
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

  console.log('tMF633listImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633listImportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633listImportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633listServiceCandidate = function(req, res, next) {
  /**
   * List or find 'ServiceCandidate' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name given to this REST resource (optional)
   * @type String For filtering: Class type of this REST resource (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: The (immediate) base class type of this REST resource (optional)
   * version String For filtering: the version of service candidate (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: Date and time of the last update of this REST resource (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status of the service candidate. (optional)
   * category.version String For filtering: Category version (optional)
   * category.name String For filtering: Name of the category (optional)
   * category.@type String For filtering: the class type of the category (optional)
   * serviceSpecification.version String For filtering: ServiceSpecification version (optional)
   * serviceSpecification.name String For filtering: Name given to the ServiceSpecification (optional)
   * serviceSpecification.@type String For filtering: The (class) type of the ServiceSpecification (optional)
   * returns List
   **/

  console.log('tMF633listServiceCandidate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633listServiceCandidate: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633listServiceCandidate: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633listServiceCatalog = function(req, res, next) {
  /**
   * List or find 'ServiceCatalog' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name of the catalog (optional)
   * @type String For filtering: Indicates the (class) type of catalog. For service catalogs, this will be 'ServiceCatalog'. (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: Indicates<b> </b>the base (class) type of this REST resource (optional)
   * version String For filtering: Catalog version (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: Date and time of the last update (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
   * returns List
   **/

  console.log('tMF633listServiceCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633listServiceCatalog: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633listServiceCatalog: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633listServiceCategory = function(req, res, next) {
  /**
   * List or find 'ServiceCategory' objects
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
   * relatedParty.role String For filtering: Role of the related party. (optional)
   * relatedParty.name String For filtering: Name of the related party (optional)
   * serviceCandidate.version String For filtering: ServiceCandidate version (optional)
   * serviceCandidate.name String For filtering: Name given to the ServiceCandidate (optional)
   * serviceCandidate.@type String For filtering: The (class) type of the ServiceCandidate (optional)
   * category.version String For filtering: Category version (optional)
   * category.name String For filtering: Name of the category (optional)
   * category.@type String For filtering: the class type of the category (optional)
   * returns List
   **/

  console.log('tMF633listServiceCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633listServiceCategory: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633listServiceCategory: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633listServiceSpecification = function(req, res, next) {
  /**
   * List or find 'ServiceSpecification' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name given to this REST resource (optional)
   * @type String For filtering: Class type of this REST resource (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: The (immediate) base class type of this REST resource (optional)
   * version String For filtering: Service specification version (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: Date and time of the last update of this REST resource (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status of the service specification (optional)
   * isBundle Boolean For filtering: A flag indicates that if this service specification is a bundled specification (true) or single (false). (optional)
   * resourceSpecification.version String For filtering: ResourceSpecification version (optional)
   * resourceSpecification.name String For filtering: Name given to the ResourceSpecification (optional)
   * resourceSpecification.@type String For filtering: The (class) type of the ResourceSpecification (optional)
   * attachment.name String For filtering: name given to the attachment (optional)
   * attachment.@type String For filtering: Attachment class  type (optional)
   * attachment.uri String For filtering: Uniform Resource Identifier (URI) of the attachment (optional)
   * attachment.mimeType String For filtering: Attachment mime type such as extension file for video, picture and document (optional)
   * serviceSpecCharacteristic.name String For filtering: A word, term, or phrase by which this characteristic specification is known and distinguished from other characteristic specifications. (optional)
   * serviceSpecCharacteristic.valueType String For filtering: A kind of value that the characteristic can take on, such as numeric, text and so forth (optional)
   * serviceSpecCharacteristic.configurable Boolean For filtering: If true, the Boolean indicates that the ServiceSpecCharacteristic is configurable (optional)
   * serviceSpecCharacteristic.@type String For filtering: (Class) type of the ServiceSpecCharacteristic (optional)
   * serviceSpecCharacteristic.@schemaLocation String For filtering: A link to the schema describing this characteristic (optional)
   * serviceSpecCharacteristic.@valueSchemaLocation String For filtering: This (optional) field provides a link to the schema describing the value type. (optional)
   * serviceSpecCharacteristic.minCardinality Integer For filtering: The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality. (optional)
   * serviceSpecCharacteristic.maxCardinality Integer For filtering: The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality. (optional)
   * serviceSpecCharacteristic.isUnique Boolean For filtering: An indicator that specifies if a value is unique for the specification. Possible values are; \"unique while value is in effect\" and \"unique whether value is in effect or not\" (optional)
   * serviceSpecCharacteristic.regex String For filtering: A rule or principle represented in regular expression used to derive the value of a characteristic value. (optional)
   * serviceSpecCharacteristic.extensible Boolean For filtering: An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for an Entity. (optional)
   * relatedParty.role String For filtering: Role of the related party. (optional)
   * relatedParty.name String For filtering: Name of the related party (optional)
   * serviceSpecRelationship.type String For filtering: Type of relationship such as migration, substitution, dependency, exclusivity (optional)
   * serviceSpecRelationship.role String For filtering: The association role for this service specification (optional)
   * serviceSpecRelationship.name String For filtering: The name given to the target service specification instance (optional)
   * targetServiceSchema.@type String For filtering: Class type of the target service (optional)
   * targetServiceSchema.@schemaLocation String For filtering: This field provides a link to the schema describing the target service (optional)
   * returns List
   **/

  console.log('tMF633listServiceSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633listServiceSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633listServiceSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633patchServiceCandidate = function(req, res, next) {
  /**
   * Updates partially a 'ServiceCandidate' by Id
   *
   * id String Identifier of the Service Candidate
   * serviceCandidate TMF633ServiceCandidate_Update The Service Candidate to be updated
   * returns TMF633ServiceCandidate
   **/

  console.log('tMF633patchServiceCandidate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF633patchServiceCandidate',payload))
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
                  console.log("tMF633patchServiceCandidate error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF633patchServiceCandidate error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF633patchServiceCandidate error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF633patchServiceCandidate error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633patchServiceCandidate error=" + error);
    return sendError(res, error);
  });




};

exports.tMF633patchServiceCatalog = function(req, res, next) {
  /**
   * Updates partially a 'ServiceCatalog' by Id
   *
   * id String Identifier of the Service Catalog
   * serviceCatalog TMF633ServiceCatalog_Update The Service Catalog to be updated
   * returns TMF633ServiceCatalog
   **/

  console.log('tMF633patchServiceCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF633patchServiceCatalog',payload))
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
                  console.log("tMF633patchServiceCatalog error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF633patchServiceCatalog error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF633patchServiceCatalog error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF633patchServiceCatalog error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633patchServiceCatalog error=" + error);
    return sendError(res, error);
  });




};

exports.tMF633patchServiceCategory = function(req, res, next) {
  /**
   * Updates partially a 'ServiceCategory' by Id
   *
   * id String Identifier of the Service Category
   * serviceCategory TMF633ServiceCategory_Update The Service Category to be updated
   * returns TMF633ServiceCategory
   **/

  console.log('tMF633patchServiceCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF633patchServiceCategory',payload))
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
                  console.log("tMF633patchServiceCategory error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF633patchServiceCategory error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF633patchServiceCategory error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF633patchServiceCategory error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633patchServiceCategory error=" + error);
    return sendError(res, error);
  });




};

exports.tMF633patchServiceSpecification = function(req, res, next) {
  /**
   * Updates partially a 'ServiceSpecification' by Id
   *
   * id String Identifier of the Service Specification
   * serviceSpecification TMF633ServiceSpecification_Update The Service Specification to be updated
   * returns TMF633ServiceSpecification
   **/

  console.log('tMF633patchServiceSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF633patchServiceSpecification',payload))
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
                  console.log("tMF633patchServiceSpecification error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF633patchServiceSpecification error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF633patchServiceSpecification error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF633patchServiceSpecification error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633patchServiceSpecification error=" + error);
    return sendError(res, error);
  });




};

exports.tMF633registerListener = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * data TMF633EventSubscriptionInput Data containing the callback endpoint to deliver the information
   * returns TMF633EventSubscription
   **/

  console.log('tMF633registerListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF633retrieveExportJob = function(req, res, next) {
  /**
   * Retrieves a 'ExportJob' by Id
   *
   * id String Identifier of the Export Job
   * returns List
   **/

  console.log('tMF633retrieveExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633retrieveExportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633retrieveExportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633retrieveImportJob = function(req, res, next) {
  /**
   * Retrieves a 'ImportJob' by Id
   *
   * id String Identifier of the Import Job
   * returns List
   **/

  console.log('tMF633retrieveImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633retrieveImportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633retrieveImportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633retrieveServiceCandidate = function(req, res, next) {
  /**
   * Retrieves a 'ServiceCandidate' by Id
   *
   * id String Identifier of the Service Candidate
   * returns List
   **/

  console.log('tMF633retrieveServiceCandidate :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633retrieveServiceCandidate: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633retrieveServiceCandidate: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633retrieveServiceCatalog = function(req, res, next) {
  /**
   * Retrieves a 'ServiceCatalog' by Id
   *
   * id String Identifier of the Service Catalog
   * returns List
   **/

  console.log('tMF633retrieveServiceCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633retrieveServiceCatalog: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633retrieveServiceCatalog: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633retrieveServiceCategory = function(req, res, next) {
  /**
   * Retrieves a 'ServiceCategory' by Id
   *
   * id String Identifier of the Service Category
   * returns List
   **/

  console.log('tMF633retrieveServiceCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633retrieveServiceCategory: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633retrieveServiceCategory: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633retrieveServiceSpecification = function(req, res, next) {
  /**
   * Retrieves a 'ServiceSpecification' by Id
   *
   * id String Identifier of the Service Specification
   * returns List
   **/

  console.log('tMF633retrieveServiceSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF633retrieveServiceSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF633retrieveServiceSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF633unregisterListener = function(req, res, next) {
  /**
   * Unregister a listener
   * Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * id String The id of the registered listener
   * no response value expected for this operation
   **/

  console.log('tMF633unregisterListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};



