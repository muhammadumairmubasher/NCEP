import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment';
const userSchema=mongoose.Schema({
    universityName:String,
    city:String,
    location:String,
    information:String,
    meritFormula:String,
    lastYearMerit:Number,
    eligibilityCriteria:String,
    feeStructure:Number,
    email:String,
    phone:Number,
    websiteLink:String,
    degreeProgram:String,
    section:String,
    imageUrl:String,
    sector:{type:String, default:''},

});

autoIncrement.initialize(mongoose.connection);
userSchema.plugin(autoIncrement.plugin,'universityInformation');
const user= mongoose.model('universityInformation',userSchema);
export default user;