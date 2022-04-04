import React from "react";
import BookReview from "../BookReview/BookReview";
import { ReviewHook } from "../Hooks/ReviewHook";

const Review = () => {
  const [books] = ReviewHook([]);
  // console.log(books);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
      {books.map((book) => (
        <BookReview key={book.id} book={book} />
      ))}
    </div>
  );
};

export default Review;
