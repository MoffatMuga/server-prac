const mongoose = require('mongoose')

const UserSchema = mongoose.schema(
        {
            name: {
                type:String,
                required: [true, "please enter a name"]
            },
            email: {
                type:String,
                required: [true, "please enter an email"],
                unique: true
            },
            password: {
                type:String,
                required: [true, "please enter a password"]
            }
        },
        {
            timestamps: true
        }
    )

    module.exports = mongoose.model('User', UserSchema)