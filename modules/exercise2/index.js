import fs from "fs";
import { books } from "./books.js";

console.log(books)

let booksData = function (arr){

    let sentence = "";
    arr.forEach(book =>{
        sentence += `Book ${book.title} by ${book.author} is of genre ${book.genre} \n`
    })
    fs.writeFileSync("booksData.txt", sentence);
}

booksData(books)




