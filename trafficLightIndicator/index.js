import {EventEmitter} from "events";
import colors from "colors";


let eventEmitter = new EventEmitter ();

eventEmitter.on("red", () =>{
    console.log(colors.bgRed("RED"));
    setTimeout(() => {
        eventEmitter.emit("yellow")
    }, 3000)
    
})

eventEmitter.on("yellow", () =>{
    console.log(colors.bgYellow("YELLOW"));
    setTimeout(() => {
        eventEmitter.emit("green")
    }, 3000)
    
})

eventEmitter.on("green", () =>{
    console.log(colors.bgGreen("GREEN"));
    setTimeout(() => {
        eventEmitter.emit("red")
    }, 3000)
    
})


eventEmitter.emit("red");




