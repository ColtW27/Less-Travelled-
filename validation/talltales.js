const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTalltaleInput(data) {
    let errors = {};

    data.body = validText(data.body) ? data.body : "";
    data.title = validText(data.title) ? data.title : "";

    if (!Validator.isLength(data.body, { min: 50, max: 1000 })) {
        errors.body = "TallTales must be between 50 and 1000 characters";
    }

    if (Validator.isEmpty(data.body)) {
        errors.body = "Body field is required";
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}