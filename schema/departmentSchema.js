import mongoose from "mongoose";


const DepartmentSchema = new mongoose.Schema({
   //"_id":mongoose.Types.ObjectId,
    
    "dept": {
        type: String,
        enum:["IT","ACCOUNT"],
        required: true
    },
    "description": { 
        type: String,
        required: false
    },
});

// compile our model
const DepartmentModel = mongoose.model('department', DepartmentSchema, 'department');
export default DepartmentModel;