import React from "react";
import "./module.styles.css";

export default function Welcome() {
  return (
    <div className="bg-welcome text-center p-5">
      <h1 className="sm:text-7xl text-5xl font-bold mb-4 sm:w-3/4 w-full mx-auto">
        Welcome to <span className="text-sky-500">Mezzaluna</span> Blog
      </h1>

      <p className="text-xl sm:text-3xl mb-2 sm:w-1/2 w-full mx-auto sm:leading-relaxed leading-loose">
        Introducing a modern and sleek theme for Ghost. Perfect for{" "}
        <span className="text-sky-500">magazine</span>,{" "}
        <span className="text-sky-500">newsletter</span>,{" "}
        <span className="text-sky-500">professional</span> and personal blogs.
      </p>
      <button className="bg-sky-500 hover:bg-sky-400 transition duration-200 ease-in-out font-bold py-2 px-4 rounded-full mr-2">
        Join Now - It&apos;s Free
      </button>
    </div>
  );
}
