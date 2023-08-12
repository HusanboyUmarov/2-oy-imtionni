const joi = require("joi");


const contactValidation =(payload)=>{
    const schema = joi.object({
        name: joi.string().required(),
        phoneNumber: joi.string().required(),
        email: joi.string().required(),
        message: joi.string().required(),
    });
    const {error} = schema.validate(payload)
    if(error)return error
    else return false;
};

module.exports = {
    contactValidation
}