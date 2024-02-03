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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded w-full md:w-1/2 h-auto">
          <h1 className="mb-4 text-3xl font-bold text-center">
            Create Your Account
          </h1>
          <p className="text-gray-600 text-center mb-4">
            Join our community today! Sign up for free to access exclusive
            features and benefits.
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
            <button
              type="submit"
              className="w-full p-2 bg-black text-white rounded hover:bg-gray-700"
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
              className="text-gray-500 no-underline text-current flex items-center hover:text-gray-700 mb-2 md:mb-0"
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
              className="text-gray-500 no-underline text-current hover:text-gray-700"
            >
              Forgot Your Password?
            </a>
          </div>
          <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 mt-6 justify-center">
            <button className="p-2 bg-black text-white rounded flex items-center hover:bg-gray-700">
              <FaGoogle className="mr-2" />
              Register with Google
            </button>
            <button className="p-2 bg-black text-white rounded flex items-center hover:bg-gray-700">
              <FaFacebookF className="mr-2" />
              Register with Facebook
            </button>
            <button className="p-2 bg-black text-white rounded flex items-center hover:bg-gray-700">
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
