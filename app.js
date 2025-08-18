const express = require('express');
const fs = require('node:fs');
const app = express();
const port = 3000;

const dummyTodos = JSON.parse(fs.readFileSync('./dummyData/todos.js'));

app.get("/api/todos", (req,res) => {
    res.send(dummyTodos)
});

app.get("/api/todos/:id", (req,res) => {
    res.send(dummyTodos[req.params.id])
});

app.post("/api/todos", (req,res) => {
    res.send("saving todos")
});

app.put("/api/todos/:id", (req,res) => {
    res.send("Updating todos")
});

app.patch("/api/todos/:id/complete", (req,res) => {
    res.send("Updating/ Patching todos")
});

app.delete("/api/todos/:id", (req,res) => {
    res.send("Deleting todos")
});


app.listen(port, () => console.log(`Server is running at port ${port}`))