import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full md:w-3/4 lg:w-3/4 mx-auto p-4 md:p-14 lg:px-20 sm:px-4 flex flex-col md:flex-row gap-4 mt-14 bg-sky-950 rounded-lg items-center">
      <div className="w-full md:w-1/2 lg:w-3/5 lg:pr-10 md:pr-10 text-center sm:text-left lg:text-center md:text-center">
        <h1 className="text-2xl font-bold mb-2 sm:text-4xl">
          Subscribe to Porto newsletter and stay updated.
        </h1>
        <p className="opacity-80 text-md sm:text:xl ">
          No worries, it happens to the best of us. Enter your email address
          below and we&apos;ll send you instructions on how to reset your
          password. Don&apos;t worry, we&apos;ll help you get back on track.
        </p>
      </div>
      <div className="w-full md:w-1/2 lg:w-2/5">
        <form className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow rounded-lg p-2 border-2 border-gray-300 focus:border-none focus:outline-none text-black"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-sky-500 hover:bg-sky-400 ease-in-out text-white rounded-lg transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
