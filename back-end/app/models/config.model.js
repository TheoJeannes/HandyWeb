const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Config', {
    userId: Joi.number().required(),
    name: Joi.string().alphanum().required(),
    size: Joi.number().required(),
})
