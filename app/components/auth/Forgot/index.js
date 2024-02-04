"use client";
import React, { useState } from "react";
import Login from "../Login";
import Register from "../Register";
import { FaArrowLeft } from "react-icons/fa";

export default function Forgot() {
  const [email, setEmail] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowRegisterForm(false);
  };

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
    setShowLoginForm(false);
  };

  return (
    <div className="">
      {!showLoginForm && !showRegisterForm && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-950 p-6 rounded w-full md:w-1/2 h-auto">
          <h1 className="mb-4 text-3xl font-bold text-center text-white">
            Forgot Your Password?
          </h1>
          <p className="text-gray-200 text-center w-3/4 mx-auto">
            No worries, it happens to the best of us. Enter your email address
            below and we&apos;ll send you instructions on how to reset your
            password.
          </p>
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-6 bg-sky-950 p-6 rounded"
          >
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-sky-950 text-gray-500 border border-gray-300 rounded outline-none"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-sky-500 text-white rounded hover:bg-sky-400"
            >
              Send Reset Instructions
            </button>
          </form>
          <div className="flex flex-row justify-between w-full mt-4 md:mt-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleLoginForm();
              }}
              className="text-gray-500 hover:text-white no-underline text-current italic flex items-center lg:mb-0"
            >
              <FaArrowLeft className="mr-2" />
              Back to Login
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleRegisterForm();
              }}
              className="text-gray-500 hover:text-white no-underline text-current italic flex items-center"
            >
              Create New Account
            </a>
          </div>
        </div>
      )}
      {showLoginForm && <Login />}
      {showRegisterForm && <Register />}
    </div>
  );
}
