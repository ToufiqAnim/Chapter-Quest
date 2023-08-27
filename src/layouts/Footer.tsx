import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaGooglePlusSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-center text-white">
      <div className="container px-6 pt-6 mx-auto">
        <div className="mb-6 flex justify-center">
          <FaFacebookSquare className="m-1 h-10 w-10 uppercase leading-normal text-white " />
          <FaTwitterSquare className="m-1 h-10 w-10 uppercase leading-normal text-white " />

          <FaGooglePlusSquare className="m-1 h-10 w-10 uppercase leading-normal text-white " />

          <FaInstagramSquare className="m-1 h-10 w-10 uppercase leading-normal text-white " />

          <FaLinkedin className="m-1 h-10 w-10 uppercase leading-normal text-white " />

          <FaGithubSquare className="m-1 h-10 w-10 uppercase leading-normal text-white " />
        </div>

        <div>
          <form action="">
            <div className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
              <div className="md:mb-6 md:ml-auto">
                <p className="">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="relative md:mb-6">
                <input
                  type="text"
                  className="border border-white peer block min-h-[auto] w-full rounded  bg-transparent px-3 py-[0.32rem] leading-[1.6] text-neutral-200 outline-none transition-all duration-200 ease-linear "
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>

              <div className="mb-6 md:mr-auto">
                <button
                  type="submit"
                  className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="mb-6">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Home</h5>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Books</h5>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Wishlist</h5>
          </div>

          <div className="mb-6">
            <h5 className="mb-2.5 font-bold uppercase">Account</h5>
          </div>
        </div>
      </div>

      <div className="p-4 text-center bg-[rgba(0, 0, 0, 0.2)]">
        © 2023 Copyright:
        <a className="text-white" href="https://tailwind-elements.com/">
          Tailwind Elements
        </a>
      </div>
    </footer>
  );
}

export default Footer;
