"use client";
import React, { useState, useEffect } from "react";
import PostData from "../../db/PostData";
import Image from "next/image";
import Login from "../auth/Login";
import Forgot from "../auth/Forgot";
import Register from "../auth/Register";

export default function CommentSection() {
  const [replyClicked, setReplyClicked] = useState(null);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showForgotForm, setShowForgotForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(false);
    setShowForgotForm(false);
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(false);
    setShowForgotForm(false);
  };

  const toggleForgotForm = () => {
    setShowForgotForm(!showForgotForm);
    setShowLoginForm(false);
    setShowRegisterForm(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setShowForm(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="mt-14 bg-sky-950 md:w-full lg:w-3/4 w-full p-4 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      {PostData[0].comments.map((comment, index) => (
        <div
          key={index}
          className="mb-4 md:p-4 rounded-md  shadow flex items-start"
        >
          <div className="w-1/4 md:w-14">
            <Image
              src={comment.image}
              alt={comment.author}
              width={800}
              height={500}
              className="w-16 h-16 rounded-full"
            />
          </div>
          <div className="ml-4 flex-grow flex flex-col justify-between w-3/4">
            <div>
              <p className="font-bold text-sky-500">{comment.author}</p>
              <p className="opacity-60 text-sm">{comment.date}</p>
              <p className="opacity-80 text-md mb-2 line-clamp-2">
                {comment.comment}
              </p>
            </div>
            <div className="text-right">
              <button
                className="italic opacity-80 px-2 py-1 text-sm md:text-base hover:text-gray-300"
                onClick={() =>
                  setReplyClicked(replyClicked === index ? null : index)
                }
              >
                Reply
              </button>
            </div>
            {replyClicked === index && (
              <div className="">
                <textarea
                  className="w-full p-2 text-gray-500 outline-none border-2 border-sky-500 rounded-md bg-transparent"
                  placeholder="Write a reply..."
                ></textarea>
                <div className="mt-2 flex justify-end">
                  <button
                    className="px-2 py-2 text-white"
                    onClick={() => console.log("Reply posted")}
                  >
                    Post Reply
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="mt-4  p-4 rounded-lg text-center">
        <p className="text-lg font-bold">Want to join the discussion?</p>
        <p className="text-md">
          Please{" "}
          <a
            className="text-sky-500 hover:text-sky-400 none-underline cursor-pointer"
            onClick={toggleLoginForm}
          >
            Sign In{" "}
          </a>
          to reply.
        </p>
      </div>

      {showLoginForm && (
        <div
          onClick={toggleLoginForm}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center inset-0 bg-black bg-opacity-50 z-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-sky-900 p-4 rounded"
          >
            <Login
              onRegisterClick={toggleRegisterForm}
              onForgotClick={toggleForgotForm}
            />
          </div>
        </div>
      )}
      {showRegisterForm && (
        <div
          onClick={toggleRegisterForm}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-4 rounded"
          >
            <Register onLoginClick={toggleLoginForm} />
          </div>
        </div>
      )}
      {showForgotForm && (
        <div
          onClick={toggleForgotForm}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-10"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-4 rounded"
          >
            <Forgot onLoginClick={toggleLoginForm} />
          </div>
        </div>
      )}
    </div>
  );
}
