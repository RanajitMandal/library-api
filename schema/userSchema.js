import { date } from "joi";
import mongoose from "mongoose";


const UserSchema = new mongoose.Schema({

    "firstName": {
        type: String,
        required: true
    },
    "lastName": {
        type: String,
        required: true
    },
    "email": {
        type: String,
        required: true
    },
    "phone": {
        type: String,
        required: false
    },
    "date": {
        type: Date,
        required: true
    },
});

// compile our model
const UserModel = mongoose.model('user',UserSchema , 'user');
export default UserModel;