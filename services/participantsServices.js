import Participant from "../models/Participants.js";

export const addParticipant = (data) => Participant.create(data);