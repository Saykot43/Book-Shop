import React from "react";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-between items-center">
        <div className="ml-10">
          <div className="text-justify">
            <h1 className="text-6xl font-bold mt-10 items-center">
              Our team is all over
            </h1>
            <h1 className="text-6xl font-bold  mb-5">
              the <span className=" text-cyan-500 to-blue-500">world.</span>
            </h1>
            <p className="text-stone-600 font-sans text-xl">
              Educating and empowering the SEO community by providing the
              freshest news and latest best practices via the industry’s
              smartest practitioners.
              <p>
                Launched in 2003, SEJ is unique in its community-based approach
                to search marketing content. Virtually all of our contributed
                articles come from real online marketing experts, both
                independent and in-house.
              </p>
            </p>
          </div>
        </div>
        <div className="mr-10 justify-center">
          <img
            className="object-cover h-auto w-auto "
            src="https://cdn.searchenginejournal.com/wp-content/uploads/2018/08/About-2x_619996714.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
