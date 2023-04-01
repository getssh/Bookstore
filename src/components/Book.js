import './Book.css';
import BookInfo from './bookInfo/BookInfo';
import BookStatus from './bookStatus/BookStatus';
import BookChapter from './bookChapter/BookChapter';

const bookData = [
  {
    catagory: 'Action',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    completed: 'Completed',
    percent: '64%',
    chapter: 'Chapter 17',
  },
  {
    catagory: 'Science Fiction',
    title: 'Dune',
    author: 'Frank Herbert',
    completed: 'Completed',
    percent: '8%',
    chapter: "Chapter 3: 'A Lesson Learned'",
  },
  {
    catagory: 'Economy',
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    completed: 'Completed',
    percent: '0%',
    chapter: 'Introduction',
  },
];

const books = bookData.map((book) => (
  <>
    <BookInfo
      catagory={book.catagory}
      title={book.title}
      author={book.author}
    />
    <BookStatus
      completed={book.completed}
      percent={book.percent}
    />
    <BookChapter chapter={book.chapter} />
  </>
));
const Book = () => (
  <div className="book">
    {books}
  </div>
);

export default Book;
