import React from "react";

export default function Newsletter() {
  return (
    <div className="w-full md:w-3/4 lg:w-3/4 mx-auto p-4 md:p-14 flex flex-col md:flex-row gap-4 mt-14 newsletter rounded-lg items-center">
      <div className="w-full md:w-1/2 lg:w-3/5">
        <h1 className="text-4xl font-bold mb-2">
          Subscribe to Porto newsletter and stay updated.
        </h1>
        <p className="text-gray-600 text-center w-3/4 mx-auto">
          No worries, it happens to the best of us. Enter your email address
          below and we&apos;ll send you instructions on how to reset your
          password.
        </p>

        <p className="text-gray-600 text-center w-3/4 mx-auto">
          Don&apos;t worry, we&apos;ll help you get back on track.
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
            className="px-4 py-2 bg-black text-white rounded-lg transition-colors duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}
