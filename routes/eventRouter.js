import express from "express";
import eventController from "../controlers/eventController.js";

const eventRouter = express.Router();

eventRouter.get("/events", eventController.getEventList);

export default eventRouter;