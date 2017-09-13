'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const
    express = require('express'),

    placerPocketBalance = require('../models/relmodelUtils').getPlacerPocketBalance,
    errorMessages = require('../utils/errormessages');

//=============================================================================
/**
 * Router instance
 */
//=============================================================================
const router = express.Router();
//=============================================================================
/**
 * API Routes
 */
//=============================================================================


/*
    /getPlacerPocketBalance
    {
        "placerid": "59abbdd107e6e90dd0579485"
    }

*/

router.post('/getPlacerPocketBalance', (req, res) =>{
 return placerPocketBalance(req.body.placerID)
        .then(doc => {
            console.log("Successfully got placer pocket balance");
            return res.status(200).json(doc);
        })
        .catch(err => {
            console.log('/getPlacerPocketBalance err ' + JSON.stringify(err));
            let error = errorMessages.processError(err);
            return res.status(error.code).json(error.msg);
        });

});

//=============================================================================
/**
 * Export Router
 */
//=============================================================================
module.exports = router;
//=============================================================================
