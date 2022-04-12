const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('User', {
  firstName: Joi.string().lowercase().alphanum().required(),
  lastName: Joi.string().lowercase().alphanum().required(),
  role: Joi.string().lowercase().valid('user', 'admin').required(),
  password: Joi.string().optional()
})
