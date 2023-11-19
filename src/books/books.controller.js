const Book = require("./book.model.js");



// GET

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    console.log(books);
    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json("Couldn't get books: ", error.message);
  }
};

router.get('', getAllBooks)

// GET BY ID

const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    console.log(book);
    res.status(200).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json("Couldn't get book: ", error.message);
  }
};
router.get('/:id', getBook)

// POST
const createBook = async (req, res) => {
  try {
      const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { titre, sous_titre, auteur, date, description } = req.body;


  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: error.message });
  }
};

router.post('', createBook)

// DELETE

const removeBook = async (req, res) => {
  try {
    const id = req.params.id

    const toDelete = await Book.findById(id)
    if (toDelete) {
      await toDelete.deleteOne()
      res.status(200).json({ deletedBook: toDelete})
      return
    }
    res.status(200).json({ deletedBook: 'nothing to delete'})
  } catch (error) {
    console.error(error)
  }
}

router.delete('/:id', removeBook)


module.exports = router