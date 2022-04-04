import React from "react";

const BookReview = ({ book }) => {
  const { bookname, img, comment, rating, author, price, authorImage } = book;
  return (
    <div>
      <div className="shadow-lg rounded-2xl w-80 h-100 flex flex-col bg-white p-4 border-4 mt-10">
        <img
          className="mx-auto object-center rounded-xl h-60 w-80 mb-3"
          src={img}
          alt=""
        />
        <p className=" justify-center">
          <span className="font-semibold">বই নাম: </span>
          {bookname}
        </p>
        <div className=" justify-between flex items-center gap-1">
          <div><span className="font-semibold">লেখক: </span>
          {author}</div>
          <div>
              <img className="rounded-full h-20 w-20" src={authorImage} alt="" />
          </div>

        </div>
        <p className="text-start">
          <span className="font-semibold">Comment:</span>
          {comment}
        </p>
        <p>Rating: <span className=" font-bold">{rating}</span> start</p>
        <p className="text-start">
          <span className="font-semibold">Price: </span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default BookReview;
