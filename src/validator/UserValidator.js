import Joi from "joi";

const CreateUserValidator = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    address: Joi.string().max(100).required(),
})

const UpdateUserValidator = Joi.object({
    name: Joi.string().min(3).max(50).optional(),
    email: Joi.string().email().optional(),
    address: Joi.string().max(100).optional()
})

export {
    CreateUserValidator,
    UpdateUserValidator
}