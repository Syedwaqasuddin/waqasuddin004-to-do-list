#!/usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let ans = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: "Select an operation",
            choices: ["Add", "Update", "View", "Delete", "Exit"]
        },
    ]);
    if (ans.select === "Add") {
        let addTodo = await inquirer.prompt({
            name: "add",
            type: "input",
            message: "Add your item in todo list"
        });
        todos.push(addTodo.add);
        console.log(todos);
    }
    if (ans.select === "Update") {
        let updateTodo = await inquirer.prompt({
            name: "todo",
            type: "list",
            message: "Update item in the list",
            choices: todos.map(item => item)
        });
        let addTodo = await inquirer.prompt({
            name: "add",
            type: "input",
            message: "Add your item in todo list"
        });
        let newTodos = todos.filter(val => val !== updateTodo.todo);
        todos = [...newTodos, addTodo.add];
        console.log(todos);
    }
    if (ans.select === "View") {
        console.log(todos);
    }
    if (ans.select === "Delete") {
        let deleteTodo = await inquirer.prompt({
            name: "delete",
            type: "list",
            message: "select item to delete",
            choices: todos.map(item => item)
        });
        let newTodos = todos.filter(val => val !== deleteTodo.delete);
        todos = [...newTodos];
        console.log(todos);
    }
    if (ans.select === "Exit") {
        console.log("Exiting program.....");
        condition = false;
    }
}
