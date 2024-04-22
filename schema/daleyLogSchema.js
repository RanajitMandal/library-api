import mongoose from "mongoose";


const DaleyLogSchema = new mongoose.Schema({

    "empId": {
        type: String,
        required: true
    },
    "loginTime": {
        type: Date,
        required: true
    },
    "logoutTime": {
        type: Date,
        required: true
    },
    
});

// compile our model
const DaleyLogModel = mongoose.model('daleyLog', DaleyLogSchema, 'daleyLog');
export default DaleyLogModel;