import React from "react";
import Books from "./Books";
const Home = () => {
  return (
    <>
      <main>
        <div className="flex justify-around items-center contaier mx-auto">
          <div>
            <h1 className="text-5xl font-lobstar ">
              Uncover Literary Treasures at <br /> Chapter Quest.
            </h1>
            <p className="mt-4 max-w-2xl font-lobstar font-thin">
              Discover captivating stories, genres, and a vibrant community at
              Chapter Quest. Explore our curated catalog, engage in discussions,
              and find your next great read. Embark on a literary adventure
              today and unlock the transformative power of books.
            </p>
            <button className="mt-3 bg-slate-800 text-white px-6 py-2 rounded">
              Start Reading
            </button>
          </div>
          <div className=" text-center">
            <img
              src="https://i.ibb.co/7C58r24/harry-Potter-4.webp"
              alt=""
              className="w-[600px] top-0 left-0   rounded-3xl "
            />

            <h1 className="text-xl font-lobstar ">The Chamber Of Secrets</h1>
            <p className="font-lobstar">
              Dive into Harry Potter's magical World
            </p>
          </div>
        </div>
        <div className="container mx-auto mt-14">
          <div>
            <h1 className="text-2xl font-lobstar">Popular Now</h1>
          </div>

          <Books />
        </div>
      </main>
    </>
  );
};

export default Home;
