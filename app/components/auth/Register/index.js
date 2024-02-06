"use client";
import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaArrowLeft, FaTiktok } from "react-icons/fa";
import Login from "../Login";
import Forgot from "../Forgot";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showForgotForm, setShowForgotForm] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
    setShowForgotForm(false);
  };

  const toggleForgotForm = () => {
    setShowForgotForm(!showForgotForm);
    setShowLoginForm(false);
  };

  return (
    <div className="">
      {!showLoginForm && !showForgotForm && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-950 py-4 px-16 rounded w-full md:w-2/3 lg:w-1/3 h-auto">
          <h1 className="mb-4 text-3xl font-bold text-center text-white capitalize">
            Join our community today!
          </h1>

          <form onSubmit={handleSubmit} className="space-y-2 text-sm">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 bg-sky-950 text-gray-500 border border-gray-300 rounded outline-none"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 bg-sky-950 text-gray-500 border border-gray-300 rounded outline-none"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-sky-500 text-white rounded hover:bg-sky-400"
            >
              Register
            </button>
          </form>
          <div className="flex flex-row md:flex-row justify-between w-full mb-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleLoginForm();
              }}
              className="text-gray-500 py-1 hover:text-white no-underline text-current italic flex items-center text-sm md:text-md"
            >
              Login
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleForgotForm();
              }}
              className="text-gray-500 py-1 hover:text-white no-underline text-current italic flex items-center text-sm md:text-md"
            >
              Forgot?
            </a>
          </div>
          <div className="flex flex-col lg:flex-row space-y-0 lg:space-y-0 space-x-0 lg:space-x-4 mt-2 justify-center text-sm">
            <button className="p-2 bg-transparent text-white rounded flex items-center border border-transparent hover:border-sky-500 transition-all ease-out duration-200">
              <FaGoogle className="mr-2" />
              Google
            </button>
            <button className="p-2 bg-transparent text-white rounded flex items-center border border-transparent hover:border-sky-500 transition-all ease-out duration-200">
              <FaFacebookF className="mr-2" />
              Facebook
            </button>
            <button className="p-2 bg-transparent text-white rounded flex items-center border border-transparent hover:border-sky-500 transition-all ease-out duration-200">
              <FaTiktok className="mr-2" />
              TikTok
            </button>
          </div>
        </div>
      )}
      {showLoginForm && <Login />}
      {showForgotForm && <Forgot />}
    </div>
  );
}
