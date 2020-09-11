const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    skillSets: {
        type: String,
    },
    hobby: {
        type: String,
    },

})

const User = mongoose.model("User", UserSchema);


module.exports = User;
