import Book from './book.model.js'

const booksRoutes = async (fastify, options) => {
    fastify.get('/books', async (request, reply) => {
        const books = await Book.find();
        console.log(books);
        res.status(200).json(books);
    })
    fastify.post('/books', async (request, reply) => {
        const { titre, sous_titre, auteur, date, description } = request.body;
        const book = await Book.create({
            titre,
            sous_titre,
            auteur,
            date,
            description,
        });
        console.log(book);
        res.status(201).json(book);
    })
}

export default booksRoutes