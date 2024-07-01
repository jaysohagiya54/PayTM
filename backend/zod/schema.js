const z = require("zod");

 const createUser = z.object({
    username:z.string(),
    firstName:z.string(),
    lastName:z.string(),
    password:z.string().min(6),
})

const signInUser = z.object({
    username:z.string(),
    password:z.string()
})

module.exports = {createUser,signInUser}