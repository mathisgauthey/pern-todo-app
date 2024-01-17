const express = require("express");
const app = express(); // Take the express librairy and run it
const cors = require("cors");
const pool = require("./db"); //req.body

//Middleware
app.use(cors()); // It's a mechanism that allows many resources (e.g., fonts, JavaScript, etc.) on a web page to be requested from another domain outside the domain from which the resource originated.
app.use(express.json()); //Essentially, it allows you to use req.body to access the data in the body of the request.

//ROUTES//

//Create_a_todo_item
app.post("/todos", async (req, res) => {
    try {
        // console.log(req.body);
        const { description } = req.body; // extracting the description property from the body object of the req (request) object
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]
        );
        res.json(newTodo.rows[0]); //return the first row
    } catch (error) {
        console.error(error.message);
    }
});

//Get_all_todos
app.get("/todos", async (req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (error) {
        console.error(error.message);
    }
});

//Get_a_todo
app.get("/todos/:id", async (req, res) => {
    try {
        // console.log(req.params);
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
            id,
        ]);
        res.json(todo.rows[0]);
    } catch (error) {
        console.error(error.message);
    }
});

//Update_a_todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        );
        res.json("Todo was updated!");
    } catch (error) {
        console.error(error.message);
    }
});

//Delete_a_todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("Todo was deleted!");
    } catch (error) {
        console.error(error.message);
    }
});

app.listen(5000, () => {
    console.log("Server has started on port 5000");
});
