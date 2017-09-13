'use strict';
//=============================================================================
/**
 * Module dependencies
 */
//=============================================================================
const
    mongoose = require('mongoose');
//=============================================================================
/**
 * PlacerBalance Schema
 */
//=============================================================================
const PlacerBalanceSchema = mongoose.Schema({


    placerpocketbal: {
        type: Number,
        required: true,
        default:0
    },
    placerpocketlimit:{
        type: Number,
        required: true,
        default:0
    },
});
//=============================================================================
/**
 * Compile to Model
 */
//=============================================================================
const PlacerBalancesModel = mongoose.model('PlacerBalances', PlacerBalanceSchema);
//=============================================================================
/**
 * Export PlacerBalancesModel
 */
//=============================================================================
module.exports = PlacerBalancesModel;
//=============================================================================
