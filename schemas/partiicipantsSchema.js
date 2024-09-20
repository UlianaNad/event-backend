import Joi from "joi";

export const createParticipantsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  birth: Joi.string().min(10).required(),
  heard_from: Joi.string().required(),
});