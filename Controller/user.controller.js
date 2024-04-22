
import url from "url";
import UserModel from "../schema/userSchema.js";


const userFilter = async (req, res) => {
    console.log("Here.....");
    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
    console.log(query.name);
    const filter = {}
    if (query.firstname) {
        filter.firstname = { $regex: new RegExp(query.firstname, "i") } // i for case-insensitive 
    }
    if (query.lastname) {
        filter.lastname = { $regex: new RegExp(query.lastname, "i") } // i for case-insensitive 
    }
    
    if (query.email) {
        filter.email = query.email
    }
    if (query.phone) {
        filter.phone = query.phone
    }
    if (query.dob) {
        filter.dob = query.dob
    }

   
    // if (query.salary) {

    //     if (query.salaryupto) {
    //         filter['$and'] = [{ salary: { $gte: query.salary } }, { salary: { $lte: query.salaryupto } }]
    //     } else if (query.salaryCondition === "gt") {
    //         filter.salary = { $gt: query.salary }
    //     } else if (query.salaryCondition === "lt") {
    //         filter.salary = { $lt: query.salary }
    //     } else if (query.salaryCondition === "gte") {
    //         filter.salary = { $gte: query.salary }
    //     } else if (query.salaryCondition === "lte") {
    //         filter.salary = { $lte: query.salary }
    //     } else {
    //         filter.salary = query.salary
    //     }
    // }
    // const populateObj = {
    //     path: "dept",
    //     select: "dept"
    // }
    // if (query.dept) {
    //     // populateObj.match = { "dept": query.dept }
    // }
    console.log(filter);

    const allEmp = await UserModel.find(filter).populate(populateObj);
    // const allEmp = await EmployeeModel.find({ salary: { $gt: 20000 } });

    res.send(allEmp);

}
const userById = async (req, res) => {
    console.log(req.params);
    const allEmp = await UserModel.findById(req.params.id);

    res.send(allEmp)
}
const userAdd= async (req, res) => {
    // console.log(req.body);
    const requestdata = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "email": req.body.email,
        "phone": req.body.phone,
        "dob": req.body.dob,
        
    }
    const newEmp = new UserModel(requestdata);
    try {
        const data = await newEmp.save()
        res.send(data);

    } catch (error) {
        res.send(error.message)
    }

}

const userUpdate = async (req, res) => {
    console.log(req.body);
    const requestdata = {}
    if (req.body.firstName) { requestdata["firstName"] = req.body.firstName }
    if (req.body.lastName) { requestdata["lastName"] = req.body.lastName }
    if (req.body.email) { requestdata["email"] = req.body.email }
    if (req.body.phone) { requestdata["phone"] = req.body.phone }
    if (req.body.dob) { requestdata["dob"] = req.body.dob }
  


    const data = await UserModel.updateOne({ "_id": req.params.id }, requestdata);
    res.send(data);
}
const userDelete = async (req, res) => {
    const id = req.params.id;

    try {
        const data = await UserModel.deleteOne({ "_id": id });
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
}



const userController = {
    userFilter, userAdd, userUpdate, userDelete, userById
}
export default userController;