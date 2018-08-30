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

exports.tMF666createBillFormat = function(req, res, next) {
  /**
   * Creates a 'BillFormat'
   *
   * billFormat TMF666BillFormat_Create The Bill Format to be created
   * returns TMF666BillFormat
   **/

  console.log('tMF666createBillFormat :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF666AccountManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666createBillFormat',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF666createBillFormat',payload))
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
      console.log("tMF666createBillFormat: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF666createBillPresentationMedia = function(req, res, next) {
  /**
   * Creates a 'BillPresentationMedia'
   *
   * billPresentationMedia TMF666BillPresentationMedia_Create The Bill Presentation Media to be created
   * returns TMF666BillPresentationMedia
   **/

  console.log('tMF666createBillPresentationMedia :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF666AccountManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666createBillPresentationMedia',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF666createBillPresentationMedia',payload))
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
      console.log("tMF666createBillPresentationMedia: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF666createBillingAccount = function(req, res, next) {
  /**
   * Creates a 'BillingAccount'
   *
   * billingAccount TMF666BillingAccount_Create The Billing Account to be created
   * returns TMF666BillingAccount
   **/

  console.log('tMF666createBillingAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF666AccountManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666createBillingAccount',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF666createBillingAccount',payload))
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
      console.log("tMF666createBillingAccount: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF666createBillingCycleSpecification = function(req, res, next) {
  /**
   * Creates a 'BillingCycleSpecification'
   *
   * billingCycleSpecification TMF666BillingCycleSpecification_Create The Billing Cycle Specification to be created
   * returns TMF666BillingCycleSpecification
   **/

  console.log('tMF666createBillingCycleSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF666AccountManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666createBillingCycleSpecification',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF666createBillingCycleSpecification',payload))
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
      console.log("tMF666createBillingCycleSpecification: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF666createFinancialAccount = function(req, res, next) {
  /**
   * Creates a 'FinancialAccount'
   *
   * financialAccount TMF666FinancialAccount_Create The Financial Account to be created
   * returns TMF666FinancialAccount
   **/

  console.log('tMF666createFinancialAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF666AccountManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666createFinancialAccount',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF666createFinancialAccount',payload))
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
      console.log("tMF666createFinancialAccount: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF666createPartyAccount = function(req, res, next) {
  /**
   * Creates a 'PartyAccount'
   *
   * partyAccount TMF666PartyAccount_Create The Party Account to be created
   * returns TMF666PartyAccount
   **/

  console.log('tMF666createPartyAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF666AccountManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666createPartyAccount',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF666createPartyAccount',payload))
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
      console.log("tMF666createPartyAccount: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF666createSettlementAccount = function(req, res, next) {
  /**
   * Creates a 'SettlementAccount'
   *
   * settlementAccount TMF666SettlementAccount_Create The Settlement Account to be created
   * returns TMF666SettlementAccount
   **/

  console.log('tMF666createSettlementAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulCreate - argument tMF666AccountManagement */
  
  const resourceType = getResourceType(req);

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666createSettlementAccount',payload))
    .then(payload => processCommonAttributes(req, resourceType, payload))
    .then(payload => processAssignmentRules('tMF666createSettlementAccount',payload))
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
      console.log("tMF666createSettlementAccount: error=" + error.toString());
      sendError(res, error);
    });



};

exports.tMF666deleteBillFormat = function(req, res, next) {
  /**
   * Deletes a 'BillFormat' by Id
   *
   * id String Identifier of the Bill Format
   * no response value expected for this operation
   **/

  console.log('tMF666deleteBillFormat :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF666deleteBillPresentationMedia = function(req, res, next) {
  /**
   * Deletes a 'BillPresentationMedia' by Id
   *
   * id String Identifier of the Bill Presentation Media
   * no response value expected for this operation
   **/

  console.log('tMF666deleteBillPresentationMedia :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF666deleteBillingAccount = function(req, res, next) {
  /**
   * Deletes a 'BillingAccount' by Id
   *
   * id String Identifier of the Billing Account
   * no response value expected for this operation
   **/

  console.log('tMF666deleteBillingAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF666deleteBillingCycleSpecification = function(req, res, next) {
  /**
   * Deletes a 'BillingCycleSpecification' by Id
   *
   * id String Identifier of the Billing Cycle Specification
   * no response value expected for this operation
   **/

  console.log('tMF666deleteBillingCycleSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF666deleteFinancialAccount = function(req, res, next) {
  /**
   * Deletes a 'FinancialAccount' by Id
   *
   * id String Identifier of the Financial Account
   * no response value expected for this operation
   **/

  console.log('tMF666deleteFinancialAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF666deletePartyAccount = function(req, res, next) {
  /**
   * Deletes a 'PartyAccount' by Id
   *
   * id String Identifier of the Party Account
   * no response value expected for this operation
   **/

  console.log('tMF666deletePartyAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF666deleteSettlementAccount = function(req, res, next) {
  /**
   * Deletes a 'SettlementAccount' by Id
   *
   * id String Identifier of the Settlement Account
   * no response value expected for this operation
   **/

  console.log('tMF666deleteSettlementAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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

exports.tMF666listBillFormat = function(req, res, next) {
  /**
   * List or find 'BillFormat' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF666listBillFormat :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666listBillFormat: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666listBillFormat: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666listBillPresentationMedia = function(req, res, next) {
  /**
   * List or find 'BillPresentationMedia' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF666listBillPresentationMedia :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666listBillPresentationMedia: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666listBillPresentationMedia: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666listBillingAccount = function(req, res, next) {
  /**
   * List or find 'BillingAccount' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF666listBillingAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666listBillingAccount: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666listBillingAccount: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666listBillingCycleSpecification = function(req, res, next) {
  /**
   * List or find 'BillingCycleSpecification' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF666listBillingCycleSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666listBillingCycleSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666listBillingCycleSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666listFinancialAccount = function(req, res, next) {
  /**
   * List or find 'FinancialAccount' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF666listFinancialAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666listFinancialAccount: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666listFinancialAccount: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666listPartyAccount = function(req, res, next) {
  /**
   * List or find 'PartyAccount' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF666listPartyAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666listPartyAccount: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666listPartyAccount: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666listSettlementAccount = function(req, res, next) {
  /**
   * List or find 'SettlementAccount' objects
   *
   * fields String Comma separated properties to display in response (optional)
   * offset Integer Requested index for start of resources to be provided in response (optional)
   * limit Integer Requested number of resources to be provided in response (optional)
   * returns List
   **/

  console.log('tMF666listSettlementAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666listSettlementAccount: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666listSettlementAccount: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666patchBillFormat = function(req, res, next) {
  /**
   * Updates partially a 'BillFormat' by Id
   *
   * id String Identifier of the Bill Format
   * billFormat TMF666BillFormat_Update The Bill Format to be updated
   * returns TMF666BillFormat
   **/

  console.log('tMF666patchBillFormat :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666patchBillFormat',payload))
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
                  console.log("tMF666patchBillFormat error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF666patchBillFormat error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF666patchBillFormat error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF666patchBillFormat error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666patchBillFormat error=" + error);
    return sendError(res, error);
  });




};

exports.tMF666patchBillPresentationMedia = function(req, res, next) {
  /**
   * Updates partially a 'BillPresentationMedia' by Id
   *
   * id String Identifier of the Bill Presentation Media
   * billPresentationMedia TMF666BillPresentationMedia_Update The Bill Presentation Media to be updated
   * returns TMF666BillPresentationMedia
   **/

  console.log('tMF666patchBillPresentationMedia :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666patchBillPresentationMedia',payload))
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
                  console.log("tMF666patchBillPresentationMedia error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF666patchBillPresentationMedia error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF666patchBillPresentationMedia error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF666patchBillPresentationMedia error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666patchBillPresentationMedia error=" + error);
    return sendError(res, error);
  });




};

exports.tMF666patchBillingAccount = function(req, res, next) {
  /**
   * Updates partially a 'BillingAccount' by Id
   *
   * id String Identifier of the Billing Account
   * billingAccount TMF666BillingAccount_Update The Billing Account to be updated
   * returns TMF666BillingAccount
   **/

  console.log('tMF666patchBillingAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666patchBillingAccount',payload))
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
                  console.log("tMF666patchBillingAccount error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF666patchBillingAccount error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF666patchBillingAccount error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF666patchBillingAccount error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666patchBillingAccount error=" + error);
    return sendError(res, error);
  });




};

exports.tMF666patchBillingCycleSpecification = function(req, res, next) {
  /**
   * Updates partially a 'BillingCycleSpecification' by Id
   *
   * id String Identifier of the Billing Cycle Specification
   * billingCycleSpecification TMF666BillingCycleSpecification_Update The Billing Cycle Specification to be updated
   * returns TMF666BillingCycleSpecification
   **/

  console.log('tMF666patchBillingCycleSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666patchBillingCycleSpecification',payload))
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
                  console.log("tMF666patchBillingCycleSpecification error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF666patchBillingCycleSpecification error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF666patchBillingCycleSpecification error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF666patchBillingCycleSpecification error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666patchBillingCycleSpecification error=" + error);
    return sendError(res, error);
  });




};

exports.tMF666patchFinancialAccount = function(req, res, next) {
  /**
   * Updates partially a 'FinancialAccount' by Id
   *
   * id String Identifier of the Financial Account
   * financialAccount TMF666FinancialAccount_Update The Financial Account to be updated
   * returns TMF666FinancialAccount
   **/

  console.log('tMF666patchFinancialAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666patchFinancialAccount',payload))
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
                  console.log("tMF666patchFinancialAccount error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF666patchFinancialAccount error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF666patchFinancialAccount error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF666patchFinancialAccount error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666patchFinancialAccount error=" + error);
    return sendError(res, error);
  });




};

exports.tMF666patchPartyAccount = function(req, res, next) {
  /**
   * Updates partially a 'PartyAccount' by Id
   *
   * id String Identifier of the Party Account
   * partyAccount TMF666PartyAccount_Update The Party Account to be updated
   * returns TMF666PartyAccount
   **/

  console.log('tMF666patchPartyAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666patchPartyAccount',payload))
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
                  console.log("tMF666patchPartyAccount error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF666patchPartyAccount error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF666patchPartyAccount error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF666patchPartyAccount error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666patchPartyAccount error=" + error);
    return sendError(res, error);
  });




};

exports.tMF666patchSettlementAccount = function(req, res, next) {
  /**
   * Updates partially a 'SettlementAccount' by Id
   *
   * id String Identifier of the Settlement Account
   * settlementAccount TMF666SettlementAccount_Update The Settlement Account to be updated
   * returns TMF666SettlementAccount
   **/

  console.log('tMF666patchSettlementAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

  /* matching isRestfulPatch */

  const internalError =  new TError(TErrorEnum.INTERNAL_SERVER_ERROR, "Unable to update resource");

  const resourceType = getResourceType(req);

  const id = String(req.swagger.params.id.value);
  const query = {
   id: id
  };

  swaggerUtils.getPayload(req)
    .then(payload => validateRequest('tMF666patchSettlementAccount',payload))
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
                  console.log("tMF666patchSettlementAccount error=" + error);
                  return sendError(res, internalError);
                });
            })
            .catch((error) => {
              console.log("tMF666patchSettlementAccount error=" + error);
              return sendError(res, internalError);
            })
          })
        .catch((error) => {
          console.log("tMF666patchSettlementAccount error=" + error);
          return sendError(res, new TError(TErrorEnum.RESOURCE_NOT_FOUND,"No resource with given id"));
        });        
      })
      .catch((error) => {
        console.log("tMF666patchSettlementAccount error=" + error);
        return sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666patchSettlementAccount error=" + error);
    return sendError(res, error);
  });




};

exports.tMF666registerListener = function(req, res, next) {
  /**
   * Register a listener
   * Sets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * data TMF666EventSubscriptionInput Data containing the callback endpoint to deliver the information
   * returns TMF666EventSubscription
   **/

  console.log('tMF666registerListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulCreate */

  notificationUtils.register(req, res, next);  


};

exports.tMF666retrieveBillFormat = function(req, res, next) {
  /**
   * Retrieves a 'BillFormat' by Id
   *
   * id String Identifier of the Bill Format
   * returns List
   **/

  console.log('tMF666retrieveBillFormat :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666retrieveBillFormat: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666retrieveBillFormat: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666retrieveBillPresentationMedia = function(req, res, next) {
  /**
   * Retrieves a 'BillPresentationMedia' by Id
   *
   * id String Identifier of the Bill Presentation Media
   * returns List
   **/

  console.log('tMF666retrieveBillPresentationMedia :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666retrieveBillPresentationMedia: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666retrieveBillPresentationMedia: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666retrieveBillingAccount = function(req, res, next) {
  /**
   * Retrieves a 'BillingAccount' by Id
   *
   * id String Identifier of the Billing Account
   * returns List
   **/

  console.log('tMF666retrieveBillingAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666retrieveBillingAccount: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666retrieveBillingAccount: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666retrieveBillingCycleSpecification = function(req, res, next) {
  /**
   * Retrieves a 'BillingCycleSpecification' by Id
   *
   * id String Identifier of the Billing Cycle Specification
   * returns List
   **/

  console.log('tMF666retrieveBillingCycleSpecification :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666retrieveBillingCycleSpecification: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666retrieveBillingCycleSpecification: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666retrieveFinancialAccount = function(req, res, next) {
  /**
   * Retrieves a 'FinancialAccount' by Id
   *
   * id String Identifier of the Financial Account
   * returns List
   **/

  console.log('tMF666retrieveFinancialAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666retrieveFinancialAccount: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666retrieveFinancialAccount: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666retrievePartyAccount = function(req, res, next) {
  /**
   * Retrieves a 'PartyAccount' by Id
   *
   * id String Identifier of the Party Account
   * returns List
   **/

  console.log('tMF666retrievePartyAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666retrievePartyAccount: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666retrievePartyAccount: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666retrieveSettlementAccount = function(req, res, next) {
  /**
   * Retrieves a 'SettlementAccount' by Id
   *
   * id String Identifier of the Settlement Account
   * returns List
   **/

  console.log('tMF666retrieveSettlementAccount :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);

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
        console.log("tMF666retrieveSettlementAccount: error=" + error);
        sendError(res, internalError);
      });
  })
  .catch(error => {
    console.log("tMF666retrieveSettlementAccount: error=" + error);
    sendError(res, internalError);
  });




};

exports.tMF666unregisterListener = function(req, res, next) {
  /**
   * Unregister a listener
   * Resets the communication endpoint address the service instance must use to deliver information about its health state, execution state, failures and metrics.
   *
   * id String The id of the registered listener
   * no response value expected for this operation
   **/

  console.log('tMF666unregisterListener :: ' + req.method + ' ' + req.url + ' ' + req.headers.host);


  /* matching tmfHub & isRestfulDestroy */

  notificationUtils.unregister(req, res, next);  


};



