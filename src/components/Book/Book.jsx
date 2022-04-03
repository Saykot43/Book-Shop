import React from "react";

const Book = ({ book }) => {
  const { bookname, img, comment, rating } = book;
  return (
    <div>
      <div className="shadow-lg rounded-2xl w-80 h-100 flex flex-col bg-white p-4 border-4 mt-10">
        <img
          className="mx-auto object-center rounded h-60 w-80"
          src={img}
          alt=""
        />
        <p className=" justify-center">
          <span className="font-semibold">বই নাম: </span>
          {bookname}
        </p>
        <p className="text-start">
          <span className="font-semibold">Comment:</span>
          {comment}
        </p>
        <p>Rating: {rating} start</p>
      </div>
    </div>
  );
};

export default Book;
