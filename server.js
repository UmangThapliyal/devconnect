const express = require("express");
const app = express();
const connectDB = require("./config/db")

//connect database
connectDB();

//Init Middleware
app.use(express.json({
    extended: false
}))

app.get('/', (re1, resp) => {
    resp.send("server is running");
});

//Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/post", require("./routes/api/post"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server running");
})