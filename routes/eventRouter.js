import express from "express";
import eventController from "../controlers/eventController.js";
import participantController from "../controlers/participantController.js";

const eventRouter = express.Router();

eventRouter.get("/events", eventController.getEventList);

eventRouter.post("/events/register", participantController.createParticipant);

export default eventRouter;

