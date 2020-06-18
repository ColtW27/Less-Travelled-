const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateAttractionInput(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    data.address = validText(data.address) ? data.address : '';
    data.location_data = validText(data.location_data) ? data.location_data : '';
    data.description = validText(data.description) ? data.description : '';
    data.rating = validText(data.rating) ? data.rating : '';


    if(Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }

    if(Validator.isEmpty(data.address)) {
        errors.address = "Address field is required";
    }

    if(Validator.isEmpty(data.location_data)) {
        errors.location_data = "Location field is required";
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

