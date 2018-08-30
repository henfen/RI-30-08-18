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

exports.tMF662createAssociation = function(req, res, next) {
  /**
   * Creates a 'Association'
   *
   * association TMF662Association_Create The Association to be created
   * returns TMF662Association
   **/

  console.log('tMF662createAssociation :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF662EntityCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662createAssociation',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF662createAssociation',payload))
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
      console.log("tMF662createAssociation: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF662createAssociationSpecification = function(req, res, next) {
  /**
   * Creates a 'AssociationSpecification'
   *
   * associationSpecification TMF662AssociationSpecification_Create The Association Specification to be created
   * returns TMF662AssociationSpecification
   **/

  console.log('tMF662createAssociationSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF662EntityCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662createAssociationSpecification',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF662createAssociationSpecification',payload))
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
      console.log("tMF662createAssociationSpecification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF662createCatalog = function(req, res, next) {
  /**
   * Creates a 'Catalog'
   *
   * catalog TMF662Catalog_Create The Catalog to be created
   * returns TMF662Catalog
   **/

  console.log('tMF662createCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF662EntityCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662createCatalog',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF662createCatalog',payload))
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
      console.log("tMF662createCatalog: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF662createCategory = function(req, res, next) {
  /**
   * Creates a 'Category'
   *
   * category TMF662Category_Create The Category to be created
   * returns TMF662Category
   **/

  console.log('tMF662createCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF662EntityCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662createCategory',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF662createCategory',payload))
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
      console.log("tMF662createCategory: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF662createEntityCatalogItem = function(req, res, next) {
  /**
   * Creates a 'EntityCatalogItem'
   *
   * entityCatalogItem TMF662EntityCatalogItem_Create The Entity Catalog Item to be created
   * returns TMF662EntityCatalogItem
   **/

  console.log('tMF662createEntityCatalogItem :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF662EntityCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662createEntityCatalogItem',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF662createEntityCatalogItem',payload))
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
      console.log("tMF662createEntityCatalogItem: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF662createEntitySpecification = function(req, res, next) {
  /**
   * Creates a 'EntitySpecification'
   *
   * entitySpecification TMF662EntitySpecification_Create The Entity Specification to be created
   * returns TMF662EntitySpecification
   **/

  console.log('tMF662createEntitySpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF662EntityCatalog */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662createEntitySpecification',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF662createEntitySpecification',payload))
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
      console.log("tMF662createEntitySpecification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF662deleteAssociation = function(req, res, next) {
  /**
   * Deletes a 'Association' by Id
   *
   * id String Identifier of the Association
   * no response value expected for this operation
   **/

  console.log('tMF662deleteAssociation :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF662deleteAssociationSpecification = function(req, res, next) {
  /**
   * Deletes a 'AssociationSpecification' by Id
   *
   * id String Identifier of the Association Specification
   * no response value expected for this operation
   **/

  console.log('tMF662deleteAssociationSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF662deleteCatalog = function(req, res, next) {
  /**
   * Deletes a 'Catalog' by Id
   *
   * id String Identifier of the Catalog
   * no response value expected for this operation
   **/

  console.log('tMF662deleteCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF662deleteCategory = function(req, res, next) {
  /**
   * Deletes a 'Category' by Id
   *
   * id String Identifier of the Category
   * no response value expected for this operation
   **/

  console.log('tMF662deleteCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF662deleteEntityCatalogItem = function(req, res, next) {
  /**
   * Deletes a 'EntityCatalogItem' by Id
   *
   * id String Identifier of the Entity Catalog Item
   * no response value expected for this operation
   **/

  console.log('tMF662deleteEntityCatalogItem :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF662deleteEntitySpecification = function(req, res, next) {
  /**
   * Deletes a 'EntitySpecification' by Id
   *
   * id String Identifier of the Entity Specification
   * no response value expected for this operation
   **/

  console.log('tMF662deleteEntitySpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF662listAssociation = function(req, res, next) {
  /**
   * List or find 'Association' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name given to this association (optional)
   * @type String For filtering: The (class) type of this association (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: Immediate base class type of this association (optional)
   * version String For filtering: Version of this REST resource (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: The last modified date of this association object (optional)
   * lifecycleStatus String For filtering: Indicates the current lifecycle status (optional)
   * associationSpec.@type String For filtering: The (class) type of the AssociationSpecification (optional)
   * associationRole.role String For filtering: The association role of this relationship participant as defined in the associationRoleSpec (optional)
   * associationRole.isSource Boolean For filtering: A flag indicating if the participant involved in a uni-directional relationship is the source or not. this flag is true If the association is bi-directional (both end points are navigable) (optional)
   * associationRole.name String For filtering: Name of the endpoint which plays this association role (optional)
   * associationRole.@type String For filtering: (class) type of the endpoint which plays this association role (optional)
   * constraint.version String For filtering: constraint version (optional)
   * constraint.name String For filtering: Name given to the constraint (optional)
   * constraint.@type String For filtering: The (class) type of the constraint (optional)
   * returns List
   **/

  console.log('tMF662listAssociation :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662listAssociation: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662listAssociation: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662listAssociationSpecification = function(req, res, next) {
  /**
   * List or find 'AssociationSpecification' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name given to this association specification (optional)
   * @type String For filtering: The (class) type of this association specification (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: Immediate base class type of this association specification (optional)
   * version String For filtering: Version of this association (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: The last modified date of this specification (optional)
   * lifecycleStatus String For filtering: Indicates the current lifecycle status (optional)
   * constraint.version String For filtering: constraint version (optional)
   * constraint.name String For filtering: Name given to the constraint (optional)
   * constraint.@type String For filtering: The (class) type of the constraint (optional)
   * associationRoleSpec.role String For filtering:  (optional)
   * associationRoleSpec.isSource Boolean For filtering:  (optional)
   * associationRoleSpec.aggregation String For filtering:  (optional)
   * associationRoleSpec.minQuantity Integer For filtering:  (optional)
   * associationRoleSpec.maxQuantity Integer For filtering:  (optional)
   * associationRoleSpec.defaulQuantity Integer For filtering:  (optional)
   * associationRoleSpec.entityType String For filtering:  (optional)
   * returns List
   **/

  console.log('tMF662listAssociationSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662listAssociationSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662listAssociationSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662listCatalog = function(req, res, next) {
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

  console.log('tMF662listCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662listCatalog: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662listCatalog: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662listCategory = function(req, res, next) {
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
   * returns List
   **/

  console.log('tMF662listCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662listCategory: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662listCategory: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662listEntityCatalogItem = function(req, res, next) {
  /**
   * List or find 'EntityCatalogItem' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name given to this REST resource (optional)
   * @type String For filtering: Class type of this REST resource (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: The (immediate) base class type of this REST resource (optional)
   * version String For filtering: EntityCatalogItem version (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: Date and time of the last update of this REST resource (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status of this catalog item (optional)
   * returns List
   **/

  console.log('tMF662listEntityCatalogItem :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662listEntityCatalogItem: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662listEntityCatalogItem: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662listEntitySpecification = function(req, res, next) {
  /**
   * List or find 'EntitySpecification' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * name String For filtering: Name given to this REST resource (optional)
   * @type String For filtering: Class type of this REST resource (optional)
   * @schemaLocation String For filtering: This field provides a link to the schema describing this REST resource (optional)
   * @baseType String For filtering: The (immediate) base class type of this REST resource (optional)
   * version String For filtering: Entity specification version (optional)
   * validFor.startDateTime Date For filtering: An instant of time, starting at the TimePeriod (optional)
   * validFor.endDateTime Date For filtering: An instant of time, ending at the TimePeriod. (optional)
   * lastUpdate Date For filtering: Date and time of the last update of this REST resource (optional)
   * lifecycleStatus String For filtering: Used to indicate the current lifecycle status of this catalog item (optional)
   * attachment.name String For filtering: name given to the attachment (optional)
   * attachment.@type String For filtering: Attachment class  type (optional)
   * attachment.uri String For filtering: Uniform Resource Identifier (URI) of the attachment (optional)
   * attachment.mimeType String For filtering: Attachment mime type such as extension file for video, picture and document (optional)
   * entitySchema.@type String For filtering: Class type of the target entity (optional)
   * entitySchema.@schemaLocation String For filtering: This field provides a link to the schema describing the target entity (optional)
   * specCharacteristic.name String For filtering: Name of the SpecCharacteristic (optional)
   * specCharacteristic.valueType String For filtering: A kind of value that the characteristic can take on, such as numeric, text and so forth (optional)
   * specCharacteristic.configurable Boolean For filtering: If true, the Boolean indicates that the SpecCharacteristic is configurable (optional)
   * specCharacteristic.@type String For filtering: (Class) type of the characteristic (optional)
   * specCharacteristic.@schemaLocation String For filtering: A link to the schema describing this characteristic (optional)
   * relatedParty.role String For filtering: Role of the related party. (optional)
   * relatedParty.name String For filtering: Name of the related party (optional)
   * returns List
   **/

  console.log('tMF662listEntitySpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662listEntitySpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662listEntitySpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662registerListener = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * data TMF662EventSubscriptionInput Data containing the callback endpoint to deliver the information
   * returns TMF662EventSubscription
   **/

  console.log('tMF662registerListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF662retrieveAssociation = function(req, res, next) {
  /**
   * Retrieves a 'Association' by Id
   *
   * id String Identifier of the Association
   * returns List
   **/

  console.log('tMF662retrieveAssociation :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662retrieveAssociation: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662retrieveAssociation: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662retrieveAssociationSpecification = function(req, res, next) {
  /**
   * Retrieves a 'AssociationSpecification' by Id
   *
   * id String Identifier of the Association Specification
   * returns List
   **/

  console.log('tMF662retrieveAssociationSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662retrieveAssociationSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662retrieveAssociationSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662retrieveCatalog = function(req, res, next) {
  /**
   * Retrieves a 'Catalog' by Id
   *
   * id String Identifier of the Catalog
   * returns List
   **/

  console.log('tMF662retrieveCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662retrieveCatalog: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662retrieveCatalog: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662retrieveCategory = function(req, res, next) {
  /**
   * Retrieves a 'Category' by Id
   *
   * id String Identifier of the Category
   * returns List
   **/

  console.log('tMF662retrieveCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662retrieveCategory: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662retrieveCategory: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662retrieveEntityCatalogItem = function(req, res, next) {
  /**
   * Retrieves a 'EntityCatalogItem' by Id
   *
   * id String Identifier of the Entity Catalog Item
   * returns List
   **/

  console.log('tMF662retrieveEntityCatalogItem :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662retrieveEntityCatalogItem: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662retrieveEntityCatalogItem: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662retrieveEntitySpecification = function(req, res, next) {
  /**
   * Retrieves a 'EntitySpecification' by Id
   *
   * id String Identifier of the Entity Specification
   * returns List
   **/

  console.log('tMF662retrieveEntitySpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF662retrieveEntitySpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662retrieveEntitySpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF662unregisterListener = function(req, res, next) {
  /**
   * Unregister a listener
   * Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * id String The id of the registered listener
   * no response value expected for this operation
   **/

  console.log('tMF662unregisterListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};

exports.tMF662updateAssociation = function(req, res, next) {
  /**
   * Updates partially a 'Association' by Id
   *
   * id String Identifier of the Association
   * association TMF662Association_Update The Association to be updated
   * returns TMF662Association
   **/

  console.log('tMF662updateAssociation :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662updateAssociation',payload))
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
                  console.log("tMF662updateAssociation error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF662updateAssociation error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF662updateAssociation error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF662updateAssociation error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662updateAssociation error=" + error);
    return sendError(res, error);
  });




};

exports.tMF662updateAssociationSpecification = function(req, res, next) {
  /**
   * Updates partially a 'AssociationSpecification' by Id
   *
   * id String Identifier of the Association Specification
   * associationSpecification TMF662AssociationSpecification_Update The Association Specification to be updated
   * returns TMF662AssociationSpecification
   **/

  console.log('tMF662updateAssociationSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662updateAssociationSpecification',payload))
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
                  console.log("tMF662updateAssociationSpecification error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF662updateAssociationSpecification error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF662updateAssociationSpecification error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF662updateAssociationSpecification error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662updateAssociationSpecification error=" + error);
    return sendError(res, error);
  });




};

exports.tMF662updateCatalog = function(req, res, next) {
  /**
   * Updates partially a 'Catalog' by Id
   *
   * id String Identifier of the Catalog
   * catalog TMF662Catalog_Update The Catalog to be updated
   * returns TMF662Catalog
   **/

  console.log('tMF662updateCatalog :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662updateCatalog',payload))
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
                  console.log("tMF662updateCatalog error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF662updateCatalog error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF662updateCatalog error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF662updateCatalog error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662updateCatalog error=" + error);
    return sendError(res, error);
  });




};

exports.tMF662updateCategory = function(req, res, next) {
  /**
   * Updates partially a 'Category' by Id
   *
   * id String Identifier of the Category
   * category TMF662Category_Update The Category to be updated
   * returns TMF662Category
   **/

  console.log('tMF662updateCategory :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662updateCategory',payload))
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
                  console.log("tMF662updateCategory error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF662updateCategory error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF662updateCategory error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF662updateCategory error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662updateCategory error=" + error);
    return sendError(res, error);
  });




};

exports.tMF662updateEntityCatalogItem = function(req, res, next) {
  /**
   * Updates partially a 'EntityCatalogItem' by Id
   *
   * id String Identifier of the Entity Catalog Item
   * entityCatalogItem TMF662EntityCatalogItem_Update The Entity Catalog Item to be updated
   * returns TMF662EntityCatalogItem
   **/

  console.log('tMF662updateEntityCatalogItem :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662updateEntityCatalogItem',payload))
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
                  console.log("tMF662updateEntityCatalogItem error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF662updateEntityCatalogItem error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF662updateEntityCatalogItem error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF662updateEntityCatalogItem error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662updateEntityCatalogItem error=" + error);
    return sendError(res, error);
  });




};

exports.tMF662updateEntitySpecification = function(req, res, next) {
  /**
   * Updates partially a 'EntitySpecification' by Id
   *
   * id String Identifier of the Entity Specification
   * entitySpecification TMF662EntitySpecification_Update The Entity Specification to be updated
   * returns TMF662EntitySpecification
   **/

  console.log('tMF662updateEntitySpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF662updateEntitySpecification',payload))
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
                  console.log("tMF662updateEntitySpecification error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF662updateEntitySpecification error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF662updateEntitySpecification error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF662updateEntitySpecification error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF662updateEntitySpecification error=" + error);
    return sendError(res, error);
  });




};



