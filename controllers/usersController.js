const User = require("../models/usersModel")

exports.registerUser = async (req, res, next) => {
    console.log(req.body)
    const newUser = { username, email, phoneNumber, skillSets, hobby } = req.body
    await new User(newUser).save()

    res.status(200).json({
        status: "success"
    })

}

// exports.deleteUser = async (req, res, next) => {

// }

// exports.updateUser = async (req, res, next) => {

// }

