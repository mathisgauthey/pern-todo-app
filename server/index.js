const express = require("express");
const app = express(); // Take the express librairy and run it
const cors = require("cors");
const pool = require("./db"); //req.body

//middleware
app.use(cors());
app.use(express.json());

//ROUTES//

//create a todo

//get all todos

//get a todo

//update a todo

//delete a todo

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});
