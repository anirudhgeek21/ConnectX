import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        lastName: {
            type: String,
            min:2,
            max: 50,
        },
        password: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        friends: {
            type: Array,
            default: [],
        },
        picturePath: {
            type: String,
            defualt : " ",
        },
        pseudoName: {
            type: String,
            default: "Anonymous"
        },
        communities: {
            type: Array,
            default : [],
        },
        college: {
            type: String,
        },
        linkedin: {
            type: String,
        },
        instagram: {
            type: String,
        },
        eventsAttending: {
            type: Array,
            default: [],
        }
    },
    {timestamps : true}
)

const User = mongoose.model("User", userSchema);
export default User;