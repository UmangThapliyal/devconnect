const express = require("express");

const app = express();

app.get('/', (re1, resp) => {
    resp.send("server is running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server running");
})