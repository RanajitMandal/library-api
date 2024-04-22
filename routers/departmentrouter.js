import { Router } from "express";
import DepartmentModel from "../schema/departmentSchema.js";
import departmentController from "../Controller/department.controller.js";
import url from "url";

const departmentRouter = Router();

departmentRouter.get('/all-department', departmentController.departmentFilter)
departmentRouter.get('/department/:id', departmentController.fiendDepartmentById)
departmentRouter.post('/add-department', departmentController.addDepartment)
departmentRouter.patch('/update-department/:id', departmentController.updateDepartment)

departmentRouter.delete('/delete-department/:id',departmentController.deleteDepartment);

export default departmentRouter;



