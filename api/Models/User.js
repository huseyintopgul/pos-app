const mongoose = require("mongoose");


const UserSchema = mongoose.Schema(
    {
        userName: { type: String, require: true },
        email: { type: String, require: true },
        password: {type:String, require:true},
        verify: {type:Boolean, require:true}, //  projemizde doğruşama yok ama kullanılması gerekirse eklenebilir
    },
    { timestamps: true }
);

const User = mongoose.model("users", UserSchema);


module.exports = User;