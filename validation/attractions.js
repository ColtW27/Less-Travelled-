const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateAttractionInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.address = validText(data.address) ? data.address : '';
    data.description = validText(data.description) ? data.description : '';
    data.rating = validText(data.rating) ? data.rating : '';
    data.longitude = validText(data.longitude) ? data.longitude : '';
    data.latitude = validText(data.latitude) ? data.latitude : '';
    data.imageUrl = validText(data.imageUrl)? data.imageUrl: '';


    if(Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    if(Validator.isEmpty(data.address)) {
        errors.address = "Address field is required";
    }

    if(Validator.isEmpty(data.description)) {
        errors.description = "Description field is required";
    }

    // if(Validator.isInt(data.rating)) {
    //     errors.rating = "Rating must be a number";
    // }
    
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }  
}

