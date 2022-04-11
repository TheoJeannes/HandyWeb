const Joi = require('joi')
const BaseModel = require('../utils/base-model.js')

module.exports = new BaseModel('Theme', {
    themeId: Joi.string().required,
    name: Joi.string().required(),
    quizz: Joi.array(),
    image: Joi.string(),
})
