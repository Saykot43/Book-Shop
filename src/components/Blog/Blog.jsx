import React from "react";

const Blog = () => {
  return (
    <div className=" p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 justify-items-center">
      <div className="border-4 border-y-8 p-4">
        <h1 className="text-3xl text-center font-serif font-semibold text-slate-600">
          What is Context api?
        </h1>
        <p className=" text-justify p-4 font-serif text-gray-500">
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux.
        </p>
      </div>
      <div className="border-4 border-y-8 p-4">
        <h1 className="text-3xl text-center font-serif font-semibold text-slate-600">
          What are semantic elements?
        </h1>
        <p className=" text-justify p-4 font-serif text-gray-500">
        Semantic elements have meaningful names which tells about type of content. For example header, footer, table, … etc. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them. 
        </p>
      </div>
    </div>
  );
};

export default Blog;
