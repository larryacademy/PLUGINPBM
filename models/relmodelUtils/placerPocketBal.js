'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================

const
      PlacerBalance = require('../placerbalances'),
    	Promise = require('bluebird'),
        _ = require('lodash'),
        ObjectId = require('mongoose').Types.ObjectId,
        Id = require('../../utils/ValidObjectid'),
        error_codes = require('../../utils/errormessages').error_codes;

//=============================================================================
  /**
  * Get Placer Pocket Balance and Pocket Limit and send SNS
  */
//=============================================================================
function getPlacerPocketBal(placerID) {
     if (_.isEmpty(placerID) || !Id.isValid(placerID)) {
        console.log("Either userid parameter is not passed or userid is not in the right format")
        return Promise.reject(error_codes.MissingOrInvalid);
    }
    return PlacerBalance.findOne({"placerID":ObjectId(placerID)})
        .exec()
        .then(result => {
            if (!_.isEmpty(result)) {
                return result;
            }
            else {
                console.log("Error input doesn't exist " + JSON.stringify(userid));
                return Promise.reject(error_codes.ResourceNotExist);
            }
        })
        .then(data => {

                        if (data.placerpocketbal > data.placerpocketlimit) {
                            console.log("Send notification to Placer to make deposit in the bank");
                        }
                        else if (data.placerpocketbal=0){
                          console.log("Send notification to Placer to withdraw");
                        }

        })
        .catch(err => {
            return Promise.reject(err);
        });

};
//=============================================================================
/**
 * Export module
 */
//=============================================================================
module.exports = getPlacerPocketBal;
//=============================================================================
