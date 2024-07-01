const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://coder3653:I6kqs67SqNCySKOw@cluster0.4jgryd7.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    username:String,
    firstName:String,
    lastName:String,
    password:String,
})

const accountSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})
const User = mongoose.model("users",userSchema)
const Account = mongoose.model("accounts",accountSchema);

module.exports = {User,Account};