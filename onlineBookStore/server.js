import express from "express";
import fs from "fs";


let server = express();
server.use(express.json());
let books = JSON.parse(fs.readFileSync("./books_store.db.json", "utf-8"))
console.log(books)

server.get('/books', (request, response) => {
    let availableBooks = books.filter((book) => book.isAvailable === true);
    console.log(availableBooks);
    response.send(availableBooks)
})

server.get('/books/:id', (request, response) => {
    let params = request.params;
    let specificBook = books.find((book) => book.id === params.id);
    if (!specificBook) {
        return response.status(404).send({ message: `Book with id: ${params.id} was not found` })
    }
    response.send(specificBook);


})



server.post('/books', (request, response) => {
    try {
        let dataFromUser = request.body;
        let newBook = {
            id: dataFromUser.id,
            bookTitle: dataFromUser.bookTitle,
            isAvailable: dataFromUser.isAvailable,
            genre: dataFromUser.genre,
            author: dataFromUser.author,
            pages: dataFromUser.pages
        };

        let updatedBooks = [...books, newBook];
        fs.writeFileSync("books_store.db.json", JSON.stringify(updatedBooks, undefined, 2));
        response.status(201).send({ message: 'New book created:', newBook })

    } catch {

        throw new Error("Cannot add product");
    }


})

server.listen(3000, 'localhost', () => {
    console.log('Server is up and running.')
});

