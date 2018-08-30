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

exports.tMF620createCatalog = function(req, res, next) {
  /**
   * Creates a 'Catalog'
   *
   * catalog TMF620Catalog_Create The Catalog to be created
   * returns TMF620Catalog
   **/

  console.log('tMF620createCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF620ProductCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620createCatalog',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF620createCatalog',payload))
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
      console.log("tMF620createCatalog: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF620createCategory = function(req, res, next) {
  /**
   * Creates a 'Category'
   *
   * category TMF620Category_Create The Category to be created
   * returns TMF620Category
   **/

  console.log('tMF620createCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF620ProductCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620createCategory',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF620createCategory',payload))
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
      console.log("tMF620createCategory: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF620createExportJob = function(req, res, next) {
  /**
   * Creates a 'ExportJob'
   *
   * exportJob TMF620ExportJob_Create The Export Job to be created
   * returns TMF620ExportJob
   **/

  console.log('tMF620createExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF620ProductCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620createExportJob',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF620createExportJob',payload))
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
      console.log("tMF620createExportJob: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF620createImportJob = function(req, res, next) {
  /**
   * Creates a 'ImportJob'
   *
   * importJob TMF620ImportJob_Create The Import Job to be created
   * returns TMF620ImportJob
   **/

  console.log('tMF620createImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF620ProductCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620createImportJob',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF620createImportJob',payload))
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
      console.log("tMF620createImportJob: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF620createProductOffering = function(req, res, next) {
  /**
   * Creates a 'ProductOffering'
   *
   * productOffering TMF620ProductOffering_Create The Product Offering to be created
   * returns TMF620ProductOffering
   **/

  console.log('tMF620createProductOffering :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF620ProductCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620createProductOffering',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF620createProductOffering',payload))
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
      console.log("tMF620createProductOffering: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF620createProductOfferingPrice = function(req, res, next) {
  /**
   * Creates a 'ProductOfferingPrice'
   *
   * productOfferingPrice TMF620ProductOfferingPrice_Create The Product Offering Price to be created
   * returns TMF620ProductOfferingPrice
   **/

  console.log('tMF620createProductOfferingPrice :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF620ProductCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620createProductOfferingPrice',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF620createProductOfferingPrice',payload))
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
      console.log("tMF620createProductOfferingPrice: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF620createProductSpecification = function(req, res, next) {
  /**
   * Creates a 'ProductSpecification'
   *
   * productSpecification TMF620ProductSpecification_Create The Product Specification to be created
   * returns TMF620ProductSpecification
   **/

  console.log('tMF620createProductSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF620ProductCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620createProductSpecification',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF620createProductSpecification',payload))
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
      console.log("tMF620createProductSpecification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF620deleteCatalog = function(req, res, next) {
  /**
   * Deletes a 'Catalog' by Id
   *
   * id String Identifier of the Catalog
   * no response value expected for this operation
   **/

  console.log('tMF620deleteCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF620deleteCategory = function(req, res, next) {
  /**
   * Deletes a 'Category' by Id
   *
   * id String Identifier of the Category
   * no response value expected for this operation
   **/

  console.log('tMF620deleteCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF620deleteExportJob = function(req, res, next) {
  /**
   * Deletes a 'ExportJob' by Id
   *
   * id String Identifier of the Export Job
   * no response value expected for this operation
   **/

  console.log('tMF620deleteExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF620deleteImportJob = function(req, res, next) {
  /**
   * Deletes a 'ImportJob' by Id
   *
   * id String Identifier of the Import Job
   * no response value expected for this operation
   **/

  console.log('tMF620deleteImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF620deleteProductOffering = function(req, res, next) {
  /**
   * Deletes a 'ProductOffering' by Id
   *
   * id String Identifier of the Product Offering
   * no response value expected for this operation
   **/

  console.log('tMF620deleteProductOffering :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF620deleteProductOfferingPrice = function(req, res, next) {
  /**
   * Deletes a 'ProductOfferingPrice' by Id
   *
   * id String Identifier of the Product Offering Price
   * no response value expected for this operation
   **/

  console.log('tMF620deleteProductOfferingPrice :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF620deleteProductSpecification = function(req, res, next) {
  /**
   * Deletes a 'ProductSpecification' by Id
   *
   * id String Identifier of the Product Specification
   * no response value expected for this operation
   **/

  console.log('tMF620deleteProductSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF620listCatalog = function(req, res, next) {
  /**
   * List or find 'Catalog' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name of the catalog (optional)
   * @type String For filtering: Indicates the (class) type of catalog. For entity catalogs, this will be 'EntityCatalog'. (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: Indicates<b> </b>the base (class) type of this REST resource (optional)
   * version String For filtering: Catalog version (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: Date and time of the last update (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
   * returns List
   **/

  console.log('tMF620listCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620listCatalog: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620listCatalog: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620listCategory = function(req, res, next) {
  /**
   * List or find 'Category' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * lastUpdate Date For filtering: Date and time of the last update (optional)
   * version String For filtering: Category version (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * parentId String For filtering: Unique identifier of the parent category (optional)
   * isRoot Boolean For filtering: If true, this Boolean indicates that the category is a root of categories (optional)
   * name String For filtering: Name of the category (optional)
   * @type String For filtering: the class type of the Category (optional)
   * @baseType String For filtering: the base class type of the category (optional)
   * @schemaLocation String For filtering: link to the schema describing this category (optional)
   * subCategory.version String For filtering: Category version (optional)
   * subCategory.name String For filtering: Name of the category (optional)
   * subCategory.@referredType String For filtering: the class type of the referred Category (optional)
   * productOffering.name String For filtering: Name of the product offering (optional)
   * productOffering.@referredType String For filtering: the class type of the referred product offering (optional)
   * returns List
   **/

  console.log('tMF620listCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620listCategory: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620listCategory: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620listExportJob = function(req, res, next) {
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

  console.log('tMF620listExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620listExportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620listExportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620listImportJob = function(req, res, next) {
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

  console.log('tMF620listImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620listImportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620listImportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620listProductOffering = function(req, res, next) {
  /**
   * List or find 'ProductOffering' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name of the productOffering (optional)
   * isBundle Boolean For filtering: isBundle determines whether a productOffering represents a single productOffering (false), or a bundle of productOfferings (true). (optional)
   * lastUpdate Date For filtering: Date and time of the last update (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * version String For filtering: ProductOffering version (optional)
   * @type String For filtering: Class type of the product offering (optional)
   * @baseType String For filtering: Immediate base (class) type of the product offering (optional)
   * @schemaLocation String For filtering: A link to the schema describing this product offering (optional)
   * place.name String For filtering: A user-friendly name for the place, such as \"Paris Store\", \"London Store\", \"Main Home\" (optional)
   * place.address String For filtering: A string characterizing an address (for instance a formatted address or an identifier taken from an address database or an address API). (optional)
   * place.@referredType String For filtering: class type of the referred Place object (optional)
   * place.role String For filtering: Role of the place (for instance: 'home delivery', 'shop retrieval') (optional)
   * serviceLevelAgreement.name String For filtering: Name of the service level agreement (optional)
   * serviceLevelAgreement.@referredType String For filtering: class type of referred Service Level Agreement (optional)
   * productSpecification.version String For filtering: Version of the product specification (optional)
   * productSpecification.name String For filtering: Name of the product specification (optional)
   * productSpecification.@referredType String For filtering: class type of referred Product Specification (optional)
   * channel.name String For filtering: Name of the channel (optional)
   * channel.@referredType String For filtering: (Class) type of the referred channel like DistributionChannel, SalesChannel and so on (optional)
   * serviceCandidate.version String For filtering: Version of the service candidate (optional)
   * serviceCandidate.name String For filtering: Name of the service candidate (optional)
   * serviceCandidate.@referredType String For filtering: The Class type of  referred Service Candidate (optional)
   * attachment.type String For filtering: Attachment type such as video, picture (optional)
   * attachment.url String For filtering: Uniform Resource Locator, is a web page address (a subset of URI) (optional)
   * attachment.mimeType String For filtering: Attachment mime type such as extension file for video, picture and document (optional)
   * attachment.@type String For filtering: the class type of the Attachment (optional)
   * attachment.@baseType String For filtering: The immediate base class type of the attachment (optional)
   * attachment.@schemaLocation String For filtering: A link to the schema describing this attachment entity (optional)
   * category.version String For filtering: Category version (optional)
   * category.name String For filtering: Name of the category (optional)
   * category.@referredType String For filtering: the class type of the referred Category (optional)
   * resourceCandidate.version String For filtering: Version of the resource candidate (optional)
   * resourceCandidate.name String For filtering: Name of the resource candidate (optional)
   * resourceCandidate.@referredType String For filtering: The Class type of referred Resource Candidate (optional)
   * productOfferingTerm.name String For filtering: Name of the productOfferingTerm (optional)
   * productOfferingTerm.@type String For filtering: The class type of ProductOfferingTerm (optional)
   * productOfferingTerm.@schemaLocation String For filtering: A link to the schema describing this product offering term (optional)
   * marketSegment.name String For filtering: Name of the market segment (optional)
   * marketSegment.@referredType String For filtering: (Class) type of the referred market segment (optional)
   * productOfferingPrice.name String For filtering: Name of the productOfferingPrice (optional)
   * productOfferingPrice.priceType String For filtering: Indicates the price type: recurring, one time, usage (optional)
   * productOfferingPrice.unitOfMeasure String For filtering: Could be minutes, GB... (optional)
   * productOfferingPrice.recurringChargePeriod String For filtering: Could be month, week... (optional)
   * productOfferingPrice.version String For filtering: ProductOffering version (optional)
   * productOfferingPrice.@type String For filtering: The class type of the product offering price (optional)
   * productOfferingPrice.@baseType String For filtering: the immediate base class of product offering price (optional)
   * productOfferingPrice.@schemaLocation String For filtering: hyperlink reference to the product offering price schema (optional)
   * productOfferingPrice.isBundle Boolean For filtering: a flag indicating if this product offering price is bundle (composite) or not (optional)
   * agreement.name String For filtering: Name of the agreement (optional)
   * agreement.@referredType String For filtering: class type of the referred Agreement (optional)
   * bundledProductOffering.lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
   * bundledProductOffering.name String For filtering: Name of the BundledProductOffering (optional)
   * prodSpecCharValueUse.name String For filtering: Name of the associated productSpecCharacteristic (optional)
   * prodSpecCharValueUse.valueType String For filtering: A kind of value that the characteristic can take on, such as numeric, text and so forth (optional)
   * prodSpecCharValueUse.minCardinality Integer For filtering: The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality. (optional)
   * prodSpecCharValueUse.maxCardinality Integer For filtering: The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality. (optional)
   * returns List
   **/

  console.log('tMF620listProductOffering :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620listProductOffering: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620listProductOffering: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620listProductOfferingPrice = function(req, res, next) {
  /**
   * List or find 'ProductOfferingPrice' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name of the productOfferingPrice (optional)
   * version String For filtering: ProductOffering version (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * priceType String For filtering: A category that describes the price, such as recurring, discount, allowance, penalty, and so forth. (optional)
   * unitOfMeasure.value Float For filtering: A positive floating point number (optional)
   * unitOfMeasure.unit String For filtering: Currency (ISO4217 norm uses 3 letters to define the currency) (optional)
   * recurringChargePeriodType String For filtering: The period to repeat the application of the price Could be month, week... (optional)
   * recurringChargePeriodLength Integer For filtering: the period of the recurring charge:  1, 2, ... .It sets to zero if it is not applicable (optional)
   * @type String For filtering: The class type of this Product offering (optional)
   * @baseType String For filtering: the immediate base class type of this product offering (optional)
   * @schemaLocation String For filtering: hyperlink reference to the schema describing this resource (optional)
   * lastUpdate Date For filtering: the last update time of this POP (optional)
   * isBundle Boolean For filtering: A flag indicating if this POP is composite (bundle) or not (optional)
   * lifecycleStatus String For filtering: the lifecycle status of this POP (optional)
   * price.value Float For filtering: A positive floating point number (optional)
   * price.unit String For filtering: Currency (ISO4217 norm uses 3 letters to define the currency) (optional)
   * percentage Float For filtering: Percentage to apply for ProdOfferPriceAlteration (Discount) (optional)
   * bundledPopRelationship.name String For filtering: Name of  the associated product offering (optional)
   * bundledPopRelationship.@type String For filtering: (Class) type of the associated product offering (optional)
   * popRelationship.name String For filtering: Name of  the associated product offering (optional)
   * popRelationship.@type String For filtering: (Class) type of the associated product offering (optional)
   * prodSpecCharValueUse.name String For filtering: Name of the associated productSpecCharacteristic (optional)
   * prodSpecCharValueUse.valueType String For filtering: A kind of value that the characteristic can take on, such as numeric, text and so forth (optional)
   * prodSpecCharValueUse.minCardinality Integer For filtering: The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality. (optional)
   * prodSpecCharValueUse.maxCardinality Integer For filtering: The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality. (optional)
   * productOfferingTerm.name String For filtering: Name of the productOfferingTerm (optional)
   * productOfferingTerm.@type String For filtering: The class type of ProductOfferingTerm (optional)
   * productOfferingTerm.@schemaLocation String For filtering: A link to the schema describing this product offering term (optional)
   * place.name String For filtering: A user-friendly name for the place, such as \"Paris Store\", \"London Store\", \"Main Home\" (optional)
   * place.address String For filtering: A string characterizing an address (for instance a formatted address or an identifier taken from an address database or an address API). (optional)
   * place.@referredType String For filtering: class type of the referred Place object (optional)
   * place.role String For filtering: Role of the place (for instance: 'home delivery', 'shop retrieval') (optional)
   * constraint.version String For filtering: constraint version (optional)
   * constraint.name String For filtering: Name given to the constraint (optional)
   * constraint.@referredType String For filtering: The (class) type of the referred constraint (optional)
   * pricingLogicAlgorithm.name String For filtering: Name given to the PLA (optional)
   * pricingLogicAlgorithm.plaSpecId String For filtering: id of corresponding PLA specification (optional)
   * pricingLogicAlgorithm.@type String For filtering: The class type of this PLA (optional)
   * tax.taxRate Float For filtering: Tax rate (optional)
   * returns List
   **/

  console.log('tMF620listProductOfferingPrice :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620listProductOfferingPrice: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620listProductOfferingPrice: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620listProductSpecification = function(req, res, next) {
  /**
   * List or find 'ProductSpecification' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name of the product specification (optional)
   * brand String For filtering: The manufacturer or trademark of the specification (optional)
   * isBundle Boolean For filtering: isBundle determines whether a productSpecification represents a single productSpecification (false), or a bundle of productSpecification (true). (optional)
   * lastUpdate Date For filtering: Date and time of the last update (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
   * productNumber String For filtering: An identification number assigned to uniquely identity the specification (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * version String For filtering: Product specification version (optional)
   * @type String For filtering: class type of the product specification (optional)
   * @baseType String For filtering: base class type  (immediate parent) of the product specification (optional)
   * @schemaLocation String For filtering: hyperlink reference to schema describing this object (optional)
   * relatedParty.role String For filtering: Role of the related party. (optional)
   * relatedParty.name String For filtering: Name of the related party (optional)
   * relatedParty.@referredType String For filtering: The class type of referred party/party role reference (optional)
   * productSpecCharacteristic.name String For filtering: Name of the productSpecCharacteristic (optional)
   * productSpecCharacteristic.valueType String For filtering: A kind of value that the characteristic can take on, such as numeric, text and so forth (optional)
   * productSpecCharacteristic.configurable Boolean For filtering: If true, the Boolean indicates that the productSpecCharacteristic is configurable (optional)
   * productSpecCharacteristic.@type String For filtering: the class type of this characteristic (optional)
   * productSpecCharacteristic.@schemaLocation String For filtering: hyperlink reference to the schema describing this characteristic (optional)
   * productSpecCharacteristic.@valueSchemaLocation String For filtering: This (optional) field provides a link to the schema describing the value type. (optional)
   * productSpecCharacteristic.minCardinality Integer For filtering: The minimum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where zero is the value for the minCardinality (optional)
   * productSpecCharacteristic.maxCardinality Integer For filtering: The maximum number of instances a CharacteristicValue can take on. For example, zero to five phone numbers in a group calling plan, where five is the value for the maxCardinality (optional)
   * productSpecCharacteristic.isUnique Boolean For filtering: An indicator that specifies if a value is unique for the specification. Possible values are; \"unique while value is in effect\" and \"unique whether value is in effect or not\" (optional)
   * productSpecCharacteristic.regex String For filtering: A rule or principle represented in regular expression used to derive the value of a characteristic value (optional)
   * productSpecCharacteristic.extensible Boolean For filtering: An indicator that specifies that the values for the characteristic can be extended by adding new values when instantiating a characteristic for a product (optional)
   * serviceSpecification.name String For filtering: Name of the requiredServiceSpecification (optional)
   * serviceSpecification.version String For filtering: Service specification version (optional)
   * serviceSpecification.@referredType String For filtering: the class type of associated service specification (optional)
   * targetProductSchema.@referredType String For filtering: class type of the target product (optional)
   * targetProductSchema.@schemaLocation String For filtering: This field provides a link to the schema describing the target product (optional)
   * productSpecificationRelationship.type String For filtering: Type of relationship such as migration, substitution, dependency, exclusivity (optional)
   * resourceSpecification.name String For filtering: Name of the requiredResourceSpecification (optional)
   * resourceSpecification.version String For filtering: Resource specification version (optional)
   * resourceSpecification.@referredType String For filtering: the class type of associated resource specification (optional)
   * attachment.type String For filtering: Attachment type such as video, picture (optional)
   * attachment.url String For filtering: Uniform Resource Locator, is a web page address (a subset of URI) (optional)
   * attachment.mimeType String For filtering: Attachment mime type such as extension file for video, picture and document (optional)
   * attachment.@type String For filtering: the class type of the Attachment (optional)
   * attachment.@baseType String For filtering: The immediate base class type of the attachment (optional)
   * attachment.@schemaLocation String For filtering: A link to the schema describing this attachment entity (optional)
   * bundledProductSpecification.lifecycleStatus String For filtering: Used to indicate the current lifecycle status (optional)
   * bundledProductSpecification.name String For filtering: Name of the product specification (optional)
   * bundledProductSpecification.@type String For filtering: the class type of the corresponding product specification (optional)
   * returns List
   **/

  console.log('tMF620listProductSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620listProductSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620listProductSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620patchCatalog = function(req, res, next) {
  /**
   * Updates partially a 'Catalog' by Id
   *
   * id String Identifier of the Catalog
   * catalog TMF620Catalog_Update The Catalog to be updated
   * returns TMF620Catalog
   **/

  console.log('tMF620patchCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620patchCatalog',payload))
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
                  console.log("tMF620patchCatalog error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF620patchCatalog error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF620patchCatalog error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF620patchCatalog error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620patchCatalog error=" + error);
    return sendError(res, error);
  });




};

exports.tMF620patchCategory = function(req, res, next) {
  /**
   * Updates partially a 'Category' by Id
   *
   * id String Identifier of the Category
   * category TMF620Category_Update The Category to be updated
   * returns TMF620Category
   **/

  console.log('tMF620patchCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620patchCategory',payload))
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
                  console.log("tMF620patchCategory error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF620patchCategory error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF620patchCategory error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF620patchCategory error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620patchCategory error=" + error);
    return sendError(res, error);
  });




};

exports.tMF620patchProductOffering = function(req, res, next) {
  /**
   * Updates partially a 'ProductOffering' by Id
   *
   * id String Identifier of the Product Offering
   * productOffering TMF620ProductOffering_Update The Product Offering to be updated
   * returns TMF620ProductOffering
   **/

  console.log('tMF620patchProductOffering :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620patchProductOffering',payload))
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
                  console.log("tMF620patchProductOffering error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF620patchProductOffering error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF620patchProductOffering error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF620patchProductOffering error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620patchProductOffering error=" + error);
    return sendError(res, error);
  });




};

exports.tMF620patchProductOfferingPrice = function(req, res, next) {
  /**
   * Updates partially a 'ProductOfferingPrice' by Id
   *
   * id String Identifier of the Product Offering Price
   * productOfferingPrice TMF620ProductOfferingPrice_Update The Product Offering Price to be updated
   * returns TMF620ProductOfferingPrice
   **/

  console.log('tMF620patchProductOfferingPrice :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620patchProductOfferingPrice',payload))
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
                  console.log("tMF620patchProductOfferingPrice error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF620patchProductOfferingPrice error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF620patchProductOfferingPrice error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF620patchProductOfferingPrice error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620patchProductOfferingPrice error=" + error);
    return sendError(res, error);
  });




};

exports.tMF620patchProductSpecification = function(req, res, next) {
  /**
   * Updates partially a 'ProductSpecification' by Id
   *
   * id String Identifier of the Product Specification
   * productSpecification TMF620ProductSpecification_Update The Product Specification to be updated
   * returns TMF620ProductSpecification
   **/

  console.log('tMF620patchProductSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF620patchProductSpecification',payload))
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
                  console.log("tMF620patchProductSpecification error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF620patchProductSpecification error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF620patchProductSpecification error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF620patchProductSpecification error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620patchProductSpecification error=" + error);
    return sendError(res, error);
  });




};

exports.tMF620registerListener = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * data TMF620EventSubscriptionInput Data containing the callback endpoint to deliver the information
   * returns TMF620EventSubscription
   **/

  console.log('tMF620registerListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF620retrieveCatalog = function(req, res, next) {
  /**
   * Retrieves a 'Catalog' by Id
   *
   * id String Identifier of the Catalog
   * returns List
   **/

  console.log('tMF620retrieveCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620retrieveCatalog: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620retrieveCatalog: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620retrieveCategory = function(req, res, next) {
  /**
   * Retrieves a 'Category' by Id
   *
   * id String Identifier of the Category
   * returns List
   **/

  console.log('tMF620retrieveCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620retrieveCategory: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620retrieveCategory: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620retrieveExportJob = function(req, res, next) {
  /**
   * Retrieves a 'ExportJob' by Id
   *
   * id String Identifier of the Export Job
   * returns List
   **/

  console.log('tMF620retrieveExportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620retrieveExportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620retrieveExportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620retrieveImportJob = function(req, res, next) {
  /**
   * Retrieves a 'ImportJob' by Id
   *
   * id String Identifier of the Import Job
   * returns List
   **/

  console.log('tMF620retrieveImportJob :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620retrieveImportJob: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620retrieveImportJob: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620retrieveProductOffering = function(req, res, next) {
  /**
   * Retrieves a 'ProductOffering' by Id
   *
   * id String Identifier of the Product Offering
   * returns List
   **/

  console.log('tMF620retrieveProductOffering :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620retrieveProductOffering: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620retrieveProductOffering: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620retrieveProductOfferingPrice = function(req, res, next) {
  /**
   * Retrieves a 'ProductOfferingPrice' by Id
   *
   * id String Identifier of the Product Offering Price
   * returns List
   **/

  console.log('tMF620retrieveProductOfferingPrice :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620retrieveProductOfferingPrice: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620retrieveProductOfferingPrice: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620retrieveProductSpecification = function(req, res, next) {
  /**
   * Retrieves a 'ProductSpecification' by Id
   *
   * id String Identifier of the Product Specification
   * returns List
   **/

  console.log('tMF620retrieveProductSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF620retrieveProductSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF620retrieveProductSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF620unregisterListener = function(req, res, next) {
  /**
   * Unregister a listener
   * Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * id String The id of the registered listener
   * no response value expected for this operation
   **/

  console.log('tMF620unregisterListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};



