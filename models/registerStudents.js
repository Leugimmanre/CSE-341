const Joi = require('joi');

const registerSchema = Joi.object({
  firstName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)
    .required(),
  lastName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/)
    .required(),
  age: Joi.number()
    .integer()
    .min(1)
    .max(120)
    .required(),
  phone: Joi.string()
    .pattern(/^\d{10}$/)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'es'] } })
    .required(),
  address: Joi.string()
    .required(),
  degree: Joi.string()
    .required(),
  university: Joi.string()
    .required(),
});

module.exports = registerSchema;