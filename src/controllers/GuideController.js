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
}
module.exports = GuideController;