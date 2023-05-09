const validation = (schema) => {
 const joiValidation = (request, response, next) => {

    const {error} = schema.validate(request.body, {abortEarly: false});
    console.log(error);

    if (error) {
        const {details} = error;
        response
            .status(422)
            .json({error:details})
    } else {
        next()
    }
 }
 return joiValidation;
}

module.exports = validation;
