import ctrlWrapper from "../decorators/ctrlWraper.js";
import HttpError from "../helpers/HttpError.js";
import { createParticipantsSchema } from "../schemas/partiicipantsSchema.js";
import { addParticipant } from "../services/participantsServices.js";


export const createParticipant = async (req, res, next) => {
  try {
    // Validate incoming request body
    const { error } = createParticipantsSchema.validate(req.body);
    if (error) {
      throw HttpError(400, error.message); // Validation error
    }

    // Extract data from request body
    const { reg_event } = req.body;

    // Check if the event exists
    // const event = await Event.findById(reg_event);
    // if (!event) {
    //   throw HttpError(404, "Event not found"); // Event not found
    // }

    // Create and save the participant
    const result = await addParticipant({ ...req.body });

    // Send response with status 201 for successful creation
    res.status(201).json(result);
  } catch (error) {
    next(error); // Pass error to error-handling middleware
  }
};


  export default {
    createParticipant:ctrlWrapper(createParticipant),
  };