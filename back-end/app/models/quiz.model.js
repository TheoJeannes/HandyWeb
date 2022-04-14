const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Quiz', {
  theme: Joi.number().optional(),
  name: Joi.string().required(),
  questions: Joi.array().required(),
  image: Joi.string().optional(),
  difficulte: Joi.number().required()

})
