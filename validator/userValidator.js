import Joi from 'joi';


const userFilter = () => {

}
const fiendUserById = () => {

}
const addUser = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().optional(),
    dob: Joi.date().required(),
  
  })
  try {
    const validationData = schema.validate(req.body);
    console.log(JSON.stringify(validationData));
    if (validationData.error) {
      res.send(validationData.error.details)
    } else {
      next()
    }
  } catch (error) {
    res.send(error.message)
  }

}
const updateUser = (req,res,next) => {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().optional(),
    dob: Joi.date().required(),
  })
  try{
    const validationData = schema.validate(req.body);
    console.log(JSON.stringify(validationData));
    if (validationData.error) {
      res.send(validationData.error.details)
    } else {
      next()
    }

  }
  catch (error){

  }
 
};
  


const deleteuser = () => {

}
export default {
  addUser,
  deleteuser, updateUser, deleteuser,userFilter,fiendUserById
}