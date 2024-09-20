import ctrlWrapper from "../decorators/ctrlWraper.js";



import Event from "../models/Event.js";


export const getEventList = async (req, res) => {
  try {
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;

    const skip = (page - 1) * limit;

    const events = await Event.find().skip(skip).limit(limit);

    const totalEvents = await Event.countDocuments();

    res.status(200).json({
      events,
      totalCount: totalEvents,  
      currentPage: page,
      totalPages: Math.ceil(totalEvents / limit)
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error });
  }
};

  export default {
    getEventList:ctrlWrapper(getEventList),
  };