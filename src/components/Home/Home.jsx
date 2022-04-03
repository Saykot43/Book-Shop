import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Home = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("book.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
        <div className="ml-10">
          <div className="text-justify">
            <h1 className="text-6xl font-bold mt-10 items-center">
              Your next Book
            </h1>
            <h1 className="text-6xl font-bold text-amber-400 mb-5">
              Your future life
            </h1>
            <p className="text-stone-600 font-sans">
              A book is a medium for recording information in the form of
              writing or images, typically composed of many pages bound together
              and protected by a cover. The technical term for this physical
              arrangement is codex. In the history of hand-held physical
              supports for extended written compositions or records, the codex
              replaces its predecessor, the scroll. A single sheet in a codex is
              a leaf and each side of a leaf is a page.
            </p>
          </div>
          <button className="bg-slate-300 mt-10 ml-20 text-cyan-500 p-3 rounded-xl font-semibold shadow-cyan-600">
            Live demo
          </button>
        </div>
        <div className="mr-10 justify-center">
          <img
            className="object-cover h-96 w-96 border rounded-xl bg-cyan-500 shadow-lg shadow-gray-700 "
            src="https://st2.depositphotos.com/2769299/7314/i/950/depositphotos_73146765-stock-photo-a-stack-of-books-on.jpg"
            alt=""
          />
        </div>
      </div>
      <div>
        <h1 className="mt-20 text-center text-4xl font-semibold">
          Customar Review({books.length})
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
          {books.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
        <p className="bg-slate-300 mt-10 ml-20 text-cyan-500 p-3 rounded-xl font-semibold shadow-cyan-600 mt-14 px-0 text-center mb-32">Review all</p>
      </div>
    </>
  );
};

export default Home;
