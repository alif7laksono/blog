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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-sky-950 p-6 rounded w-full md:w-1/2 h-auto">
          <h1 className="mb-4 text-3xl font-bold text-center text-white">
            Create Your Account
          </h1>
          <p className="text-gray-200 text-center mb-4">
            Join our community today! Sign up for free to access exclusive
            features and benefits.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
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
          <div className="flex flex-row justify-between w-full mt-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleLoginForm();
              }}
              className="text-gray-500 no-underline text-current flex items-center hover:text-white mb-2 md:mb-0"
            >
              <FaArrowLeft className="mr-2" />
              <b>Log in</b>
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                toggleForgotForm();
              }}
              className="text-gray-500 no-underline text-current hover:text-white"
            >
              Forgot Your Password?
            </a>
          </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 mt-6 justify-center">
            <button className="p-2 bg-transparent text-white rounded flex items-center border border-transparent hover:border-sky-500 transition-all ease-out duration-200">
              <FaGoogle className="mr-2" />
              Register with Google
            </button>
            <button className="p-2 bg-transparent text-white rounded flex items-center border border-transparent hover:border-sky-500 transition-all ease-out duration-200">
              <FaFacebookF className="mr-2" />
              Register with Facebook
            </button>
            <button className="p-2 bg-transparent text-white rounded flex items-center border border-transparent hover:border-sky-500 transition-all ease-out duration-200">
              <FaTiktok className="mr-2" />
              Continue with TikTok
            </button>
          </div>
        </div>
      )}
      {showLoginForm && <Login />}
      {showForgotForm && <Forgot />}
    </div>
  );
}
