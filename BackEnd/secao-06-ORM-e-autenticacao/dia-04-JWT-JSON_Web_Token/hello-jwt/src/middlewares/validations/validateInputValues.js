const { loginSchema } = require('./schemas');

const validateLoginCredentials = (objectToValidate) => {
  const { error } = loginSchema.validate(objectToValidate);
  if (error) return { message: error.message }
}

module.exports = {
  validateLoginCredentials,
}