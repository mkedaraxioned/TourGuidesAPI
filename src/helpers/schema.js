const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi)
const schemas = {
  guide: Joi.object({
    name: Joi.string()
    .min(3)
    .max(30)
    .required(),
    photo: Joi.string()
    .required(),  
    experience:Joi.number(),
    charges: Joi.number(),
    tour: Joi.array().items(Joi.object({
      place:Joi.string(),
      tourFee: Joi.number()
    })),
  })
}

module.exports = schemas;