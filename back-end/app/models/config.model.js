const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Config', {
    userId: Joi.number().required(),
    name: Joi.string().alphanum().required(),
    size: Joi.number().required(),
    verticalEccentricity: Joi.number(),
    horizontalEccentricity: Joi.number(),
    colorButtons: Joi.string()
        .valid("blue", "green", "blue_navy", "black", "orange")
        .required(),
    font: Joi.string()
        .valid("calibri", "luciole", "arial")
        .required()
})
