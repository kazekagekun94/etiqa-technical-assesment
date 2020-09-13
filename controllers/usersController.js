const User = require("../models/usersModel")

exports.registerUser = async (req, res, next) => {
    try {
        console.log(req.body)
        const newUser = { username, email, phoneNumber, skillSets, hobby } = req.body
        await new User(newUser).save()

        return res.status(200).json({
            status: "success"
        })
    } catch (err) {
        return res.status(400).json({
            status: "fail"
        })
    }


}

exports.deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.userId
        const status = await User.deleteMany({
            _id: {
                $in: [req.body.userIds]
            }
        });
        return res.status(200).json({
            status: "success"
        })
    } catch (err) {
        return res.status(400).json({
            status: "fail",
            error: "Please retry to delete user."
        })
    }
}

exports.updateUser = async (req, res, next) => {
    try {
        const updatedUser = { username, email, phoneNumber, skillSets, hobby } = req.body.updatedUser
        const userId = req.body.userId
        await User.findByIdAndUpdate(userId, updatedUser)
        return res.status(200).json({
            status: "success"
        })
    } catch (err) {
        console.log(err)
        return res.status(400).json({
            status: "fail",
            error: "Please retry to update user."
        })
    }

}

