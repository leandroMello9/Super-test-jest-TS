import { Schema, model,  Document } from "mongoose";

interface IUser extends Document {
    name: string,
    password: string,
    email: string
}
const User = new Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        
    },
    password: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

const UserModel = model<IUser>('User', User, 'User');

export {UserModel, IUser};