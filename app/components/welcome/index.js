import React from "react";
import "./module.styles.css";

export default function Welcome() {
  return (
    <div className="bg-welcome text-center p-5">
      <h1 className="sm:text-7xl text-5xl font-bold mb-4 sm:w-3/4 w-full mx-auto">
        Welcome to <span className="gradient-text">Mezzaluna</span> Blog
      </h1>

      <p className="text-xl sm:text-3xl mb-2 sm:w-1/2 w-full mx-auto sm:leading-relaxed leading-loose">
        Introducing a modern and sleek theme for Ghost. Perfect for{" "}
        <span className="gradient-text">magazine</span>,{" "}
        <span className="gradient-text">newsletter</span>,{" "}
        <span className="gradient-text">professional</span> and personal blogs.
      </p>
      <button className="gradient-button font-bold py-2 px-4 rounded-full mr-2">
        Join Now - It's Free
      </button>
    </div>
  );
}
