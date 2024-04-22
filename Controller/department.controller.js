
import url from "url";
import DepartmentModel from "../schema/departmentSchema.js";

const departmentFilter = async (req, res) => {
    console.log("Here.....");
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(query.name);
    const filter = {}
    if (query.name) {
        filter.deptName = { $regex: new RegExp(query.name, "i") } // i for case-insensitive 
    }
    if (query.email) {
        filter.email = query.email
    }
    if (query.phone) {
        filter.phone = query.phone
    }
    if (query.city) {
        filter.villageOrCity = query.city
    }
    if (query.ps) {
        filter.ps = query.ps
    }
    if (query.salary) {
        if (query.salaryupto) {
            filter['$and'] = [{ salary: { $gte: query.salary } }, { salary: { $lte: query.salaryupto } }]
        } else if (query.salaryCondition === "gt") {
            filter.salary = { $gt: query.salary }
        } else if (query.salaryCondition === "lt") {
            filter.salary = { $lt: query.salary }
        } else if (query.salaryCondition === "gte") {
            filter.salary = { $gte: query.salary }
        } else if (query.salaryCondition === "lte") {
            filter.salary = { $lte: query.salary }
        } else {
            filter.salary = query.salary
        }
    }
    if (query.dept) {
        filter.dept = query.dept
    }
    console.log(JSON.stringify(filter));

    try {
        const allDpt = await DepartmentModel.find(filter);
        res.send(allDpt);
    } catch (error) {
        res.send(error.message)
    }


}

const addDepartment = async (req, res) => {
    // console.log(req.body);
    const requestdata = {
        
        "dept": req.body.dept,
        "description": req.body.description
    }
    const newDpt = new DepartmentModel(requestdata);
    try {
        const data = await newDpt.save()
        res.send(data);

    } catch (error) {
        res.send(error.message)
    }

}

const updateDepartment = async (req, res) => {
    console.log(req.body);
    const requestdata = {}
    if (req.body.empName) { requestdata["empName"] = req.body.empName }
    if (req.body.email) { requestdata["email"] = req.body.email }
    if (req.body.phone) { requestdata["phone"] = req.body.phone }
    if (req.body.city) { requestdata["villageOrCity"] = req.body.city }
    if (req.body.salary) { requestdata["salary"] = req.body.salary }
    if (req.body.dept) { requestdata["dept"] = req.body.dept }

    const data = await DepartmentModel.updateOne({ "_id": req.params.id }, requestdata);
    res.send(data);
}

const deleteDepartment = async (req, res) => {
    const id = req.params.id;
    try {
        const data = await DepartmentModel.deleteOne({ "_id": id });
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}

const fiendDepartmentById = async (req, res) => {
    console.log(req.params);
    const allEmp = await DepartmentModel.findById(req.params.id);
    res.send(allEmp)
}

const departmentController = {
    addDepartment,
    departmentFilter,
    fiendDepartmentById,
    updateDepartment,
    deleteDepartment,
}
export default departmentController;