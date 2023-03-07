const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const cors = require("cors");

router.post("/register", async (req, res) => {

    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, "mynameisyash").toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/login",cors(), async (req, res) => {
    try {
        const userlogin = await User.findOne({ username: req.body.username });
        !userlogin && res.status(401).json("Wrong Cradentials");

        const hashedpassword = CryptoJS.AES.decrypt(userlogin.password, "mynameisyash");
        const originalpassword = hashedpassword.toString(CryptoJS.enc.Utf8);
 
        originalpassword !== req.body.password &&
         res.status(401).json("Wrong Cradentials");

        const accesstoken = jwt.sign(
            {
                id: userlogin._id,
                isAdmin: userlogin.isAdmin,
            },
            "mynameisyash",
            {expiresIn: "3d"}
        );
       // const { password, ...others } = user_.doc;
        res.status(200).json({userlogin,accesstoken});
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;