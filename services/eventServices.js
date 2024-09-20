import Event from "../models/Event.js";

const findEvents = async () => {
    const events = await Event.find();
    return events;
  };
  
  export default { findEvents };
  