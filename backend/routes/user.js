const express = require("express");
const router = express.Router();
const { createUser, signInUser } = require("../zod/schema");
const jwt = require("jsonwebtoken");
const { authMiddleware } = require("../middlewares/auth")
const { JWT_SECRET } = require("../config");
const { User, Account } = require("../db");

router.post("/user/signup", async (req, res) => {
    const createPayload = req.body;
    console.log('createPayload: ', createPayload);
    const parsePayload = createUser.safeParse(createPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "Something wrong with the inputs"
        })
        return;
    }
    const exsitingUser = await User.findOne({ username: req.body.username });
    if (exsitingUser) {
        res.status(411).json({
            msg: "User already existed."
        })
        return;
    }
    const createdUser = await User.create({
        username: createPayload.username,
        firstName: createPayload.firstName,
        lastName: createPayload.lastName,
        password: createPayload.password
    })
  const userId = createdUser._id;
    
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })

    const token = jwt.sign({ id: createdUser._id }, JWT_SECRET)
    res.json({
        msg: "User created successfully",
        token: token
    })


})
router.post("/user/signin", async (req, res) => {
    const signInPayload = req.body;
    const parsePayload = signInUser.safeParse(signInPayload);
    if (!parsePayload.success) {
        res.status(411).json({
            msg: "Something wrong with the inputs"
        })
        return;
    }
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        res.status(411).json({
            msg: "Error while logging in."
        })
    }
    const token = jwt.sign({ id: user._id }, JWT_SECRET)
    res.status(200).json({
        token: token
    })


})
router.put("/user/update", authMiddleware, async (req, res) => {
    const userId = req.userId;
    if (!userId) {
        res.json({
            msg: "User not found"
        })
    }
    await User.updateOne({ _id: userId },
        req.body
    )
    res.json({
        msg: "User updated Successfully."
    })
})
router.get("/bulk", authMiddleware, async (req, res) => {
    const query = req.query.filter || "";
    const users = await User.find({
        $or : [
            {
                firstName:{
                    "$regex":query
                }
            },
            {
                lastName:{
                    "$regex":query
                }
            }
        ]
    })
   
    res.json({
        users : users.map(user => ({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    })
})

module.exports = router;