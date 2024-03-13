import express from "express";
import fs from "fs";


let server = express();
server.use(express.json());

server.get('/books', (request, response) => {
    let books = JSON.parse(fs.readFileSync("./books_store.db.json", "utf-8"));
    console.log(books);
    let availableBooks = books.filter((book) => book.isAvailable === true);
    console.log(availableBooks);
    response.send(availableBooks)
})

server.get('/books/:id', (request, response) => {
    let books = JSON.parse(fs.readFileSync("./books_store.db.json", "utf-8"));
    console.log(books);
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


server.put('/books/:id', (request, response)=> {
    try{
        let books = JSON.parse(fs.readFileSync("./books_store.db.json", "utf-8"));
        console.log(books);
        let id = request.params.id;
        let newBookValues = request.body;

        let updatedBooks = books.map((book) => {
            if(book.id === id){
                return {
                    id: book.id,
                    bookTitle: newBookValues.bookTitle || book.bookTitle,
                    isAvailable: newBookValues.isAvailable || book.isAvailable,
                    genre: newBookValues.genre || book.genre,
                    author: newBookValues.author || book.author,
                    pages: newBookValues.pages || book.pages
                  };
            }else{
                return book;
            }
        })
        fs.writeFileSync("books_store.db.json", JSON.stringify(updatedBooks, undefined, 2));
        response.send({message: `Book with id: ${id} was updated.`})
    } 
        catch (error) {
            throw new Error("Cannot edit product");
    }
})

server.delete('/books/:id', (request, response)=> {
    try{
        let books = JSON.parse(fs.readFileSync("./books_store.db.json", "utf-8"));
        console.log(books);
        let id = request.params.id;

        let newBookList = books.filter((book) => book.id !== id);
        fs.writeFileSync("books_store.db.json", JSON.stringify(newBookList, undefined, 2));
        response.send({message: `Book with id: ${id} successfully removed`})
    } catch (error){
        throw new Error("Cannot delete book")
    }
})

server.listen(3000, 'localhost', () => {
    console.log('Server is up and running.')
});

