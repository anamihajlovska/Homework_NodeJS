import { EventEmitter } from "events";
import fs from "fs";

let eventEmitter = new EventEmitter ();

eventEmitter.on("finishTodo", (id) =>{
    let message = `Todo with ID ${id} is finished at DATE ${new Date()}\n`;
    fs.appendFileSync("todo.txt", message);
})

eventEmitter.on("removeTodo", (id) =>{
    let message = `Todo with ID ${id} is removed at DATE ${new Date()}\n`;
    fs.appendFileSync("todo.txt", message);
})

export default eventEmitter;