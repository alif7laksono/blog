"use client";
import React, { useState } from "react";
import { FaGoogle, FaFacebookF, FaTiktok } from "react-icons/fa";
import Register from "../Register";
import Forgot from "../Forgot";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showForgotForm, setShowForgotForm] = useState(false);

  const toggleRegisterForm = () => {
    setShowRegisterForm(!showRegisterForm);
  };

  const toggleForgotForm = () => {
    setShowForgotForm(!showForgotForm);
    setShowRegisterForm(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="">
      {!showRegisterForm && !showForgotForm && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-950 p-6 rounded w-full md:w-1/2 h-auto">
          <h1 className="mb-6 text-3xl font-bold text-center text-white font-sans">
            Welcome Back!
          </h1>
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-4 bg-sky-950 p-4 rounded"
          >
            <input
              type="text"
              placeholder="Username or Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              Log In
            </button>
          </form>
          <div className="flex flex-row md:flex-row justify-between w-full mb-3">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleRegisterForm();
              }}
              className="text-gray-500 px-4 hover:text-white no-underline text-current italic flex items-center"
            >
              Create an Account
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleForgotForm();
              }}
              className="text-gray-500 px-4 hover:text-white no-underline text-current italic flex items-center"
            >
              Forgot Password?
            </a>
          </div>
          <p className="text-gray-500 text-center">Or continue with:</p>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 mt-4 justify-center">
            <button className="p-2 bg-transparent text-white rounded flex items-center border border-transparent hover:border-sky-500 transition-all ease-out duration-200">
              <FaGoogle className="mr-2" />
              Continue with Google
            </button>
            <button className="p-2 bg-transparent text-white rounded flex items-center border border-transparent hover:border-sky-500 transition-all ease-out duration-200">
              <FaFacebookF className="mr-2" />
              Continue with Facebook
            </button>
            <button className="p-2 bg-transparent text-white rounded flex items-center border border-transparent hover:border-sky-500 transition-all ease-out duration-200">
              <FaTiktok className="mr-2" />
              Continue with TikTok
            </button>
          </div>
        </div>
      )}
      {showRegisterForm && <Register />}
      {showForgotForm && <Forgot />}
    </div>
  );
  ƒ;
}
