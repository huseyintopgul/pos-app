const express = require("express");
const router = express.Router();
const User = require("../Models/User");

// GET-ALL işlemi

router.get("/get-all-users", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(404).json(error);
    }
});

router.get("/get-user", async (req, res) => {
    const userId = await req.body.userId;
    try {
        const user = await User.findById(userId);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(404).json("Kullanıcı bulunamadı");
    }
});


module.exports = router;



