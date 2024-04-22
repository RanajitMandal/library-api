import Joi from 'joi';


const employeeFilter = () => {

}
const fiendEmployeeById = () => {

}
const addEmployee = (req, res, next) => {
  const schema = Joi.object({
    empName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().optional(),
    city: Joi.string().required(),
  
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
const updateEmployee = (req,res,next) => {
  const schema = Joi.object({
    empName: Joi.string().optional(),
    email: Joi.string().optional(),
    phone: Joi.string().optional(),
    city: Joi.string().optional(),
    ps: Joi.string().optional(),
    salary: Joi.number().optional(),
    dept: Joi.string().optional(),
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
  


const deleteEmployee = () => {

}
export default {
  addEmployee, updateEmployee, deleteEmployee,employeeFilter,fiendEmployeeById
}