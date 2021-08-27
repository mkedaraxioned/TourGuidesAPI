const Guide = require('./../models/Guide');
class GuideController {
  addGuide = async (req,res,next) => {
    try {
      const guide = {
        name: req.body.name,
        photo: req.body.photo,
        experience: req.body.experience,
        charges: req.body.charges,
        tour: req.body.tour
    }
    console.log('🎉',guide);
      const newGuide = await Guide.create(guide);
      return res.status(201).send({message:'Guide added Successfully',guide:newGuide});
      } catch(error) { 
      next(error);
      }
  }

  getGuides = async (req,res,next) => {
    try {
      const guides = await Guide.find({},{"__v":0});
      if(!guides) return res.status(404).send({error: 'Guides not found'});
      return res.status(200).send({guides});
    } catch (error) {
      next(error);
    }
  }
}
module.exports = GuideController;