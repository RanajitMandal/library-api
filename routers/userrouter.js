import { Router } from "express";
import UserModel from "../schema/userSchema.js";
import employeeValidator from "../validator/employeeValidator.js";
import url from 'url';
import userController from "../Controller/user.controller.js";

const userRouter = Router();

userRouter.get('/all-user', userController.employeeFilter)
userRouter.get('/user/:id',employeeValidator.fiendEmployeeById, userController.employeeById)

userRouter.post('/add-user', employeeValidator.addEmployee, userController.employeeAdd)
userRouter.patch('/update-user/:id',employeeValidator.updateEmployee, userController.employeeUpdate)

userRouter.delete('/delete-user/:id',employeeValidator.deleteEmployee, userController.employeeDelete);

export default userRouter;