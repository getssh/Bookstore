import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import BookCatagory from './components/bookCatagory/BookCatagory';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Book />} />
          <Route path="categories" element={<BookCatagory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
