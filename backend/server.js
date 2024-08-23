const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = {
    origin: ["http://localhost:5173"], //the requests will only be accepted from this origin
}
app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json("hello world");
});

app.listen(8080, () => {
    console.log("Server started on port 8080");
});