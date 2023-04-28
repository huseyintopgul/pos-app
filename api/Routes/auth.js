const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const bcryptjs = require("bcryptjs"); // DB de girilen şifreleri MD-5 ile şifrelemek için kullanıyoruz

// REGISTER işlemi

router.post("/register", async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({
            userName,
            email,
            password: hashedPassword
        });
        await newUser.save();
        res.status(200).json(newUser);
    }
    catch (error) {
        res.status(400).json(error)
    }
});

// LOGIN işlemi

router.post("/login", async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email });
        if (!user) {
         return res.status(404).json({ error: "Kullanıcı bulunamadı!" });
        }
        // bu kısımda req. içerisinde gelen EMAİL ile DB de kayıtlı olan şifrenin karşılaştırılmasını yapıyoruz ve res. döndürüyoruz.

        const validPassword = await bcryptjs.compare(req.body.password, user.password);
        // bu kısımda req. içerisinde gelen PASSWORD ile DB de kayıtlı olan PASSWORD karşılaştırılmasını yapıyoruz.

        if (!validPassword) {
            return res.status(403).json("Girilen şifre hatalıdır!");
        } else {
            res.status(200).json(user)
            // ve burada isErrored, 39 da yapmış olduğumuz karşılaştırmanın sonucunu dön dürüyoruz
        }
    }
    catch (error) {
        res.status(error)
    }
})


module.exports = router;