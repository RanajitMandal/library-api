import { Router } from "express";
import UserModel from "../schema/userSchema.js";
import userValidator from "../validator/userValidator.js";
import url from 'url';
import userController from "../Controller/user.controller.js";

const userRouter = Router();

// userRouter.get('/all-user', userController.employeeFilter)
// userRouter.get('/user/:id',employeeValidator.fiendEmployeeById, userController.employeeById)

userRouter.post('/add-user', userValidator.addUser, userController.userAdd)
// userRouter.patch('/update-user/:id',employeeValidator.updateEmployee, userController.employeeUpdate)

// userRouter.delete('/delete-user/:id',employeeValidator.deleteEmployee, userController.employeeDelete);

export default userRouter;