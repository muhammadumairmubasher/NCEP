import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import JWT from "jsonwebtoken";

import autoIncrement from 'mongoose-auto-increment';
const profileSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        default: 0
    },
    city: {
        type: String
    },
    address: {
        type: String
    },
    zipCode: {
        type: Number
    },
    obtainMatricMarks: {
        type: Number
    },
    totalMatricMarks: {
        type: Number,
        default: 1100
    },
    obtainInterMarks: {
        type: Number
    },
    totalInterMarks: {
        type: Number,
        default: 1100
    },
    obtainTestMarks: {
        type: Number
    },
    totalTestMarks: {
        type: Number,
        default: 100
    },
    entranceTest: {
        type: String,
    },
    userTokens: [
        {
            token: {
                type: String,
                required: true
            }

        }
    ]
});

// Password Hashing
profileSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password, 12);
        this.cpassword = await bcryptjs.hash(this.cpassword, 12);
    }
    next();
});
// Generating Token.  
profileSchema.methods.generateAuthToken = async function () {
    try {
        let newtoken = JWT.sign(
            {
                _id: this._id
            },
            process.env.SECRET_KEY
        );
        this.userTokens = this.userTokens.concat({ token: newtoken })
        await this.save();
        return newtoken;
    } catch (error) {
        Response.send({ message: error.message });
        console.log(error);
    }
}

autoIncrement.initialize(mongoose.connection);
profileSchema.plugin(autoIncrement.plugin, 'user');

const UserProfile = mongoose.model('user', profileSchema);
export default UserProfile;
