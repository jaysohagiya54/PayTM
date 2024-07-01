const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/user")
const accountRoute = require("./routes/account")
const app = express();
const port = 3000;
app.use(cors());

app.use(bodyParser.json());

app.use("/api/v1",userRoute);
app.use("/api/v1/account",accountRoute);

app.listen(port,() => {
    console.log(`Server is running on port ${port}`);
})



