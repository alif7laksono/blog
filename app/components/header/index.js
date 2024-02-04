"use client";
import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
  FaSignInAlt,
} from "react-icons/fa";
import Login from "../auth/Login";
import Forgot from "../auth/Forgot";
import Register from "../auth/Register";
import Link from "next/link";
import "./module.styles.css";
import Image from "next/image";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const [showForgotForm, setShowForgotForm] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
    <header className="w-full md:w-4/5 lg:w-3/4 mx-auto flex justify-between items-center p-4 md:px-0">
      <div className="">
        <Link href="/">
          <Image
            src="/images/logo-white.png"
            alt="Logo Image"
            width={180}
            height={50}
            className="w-36 h-auto cursor-pointer md:w-56 sm:w-46"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center space-x-3 md:space-x-4">
        <div className="flex items-center space-x-3 md:space-x-4">
          <button onClick={toggleForm} className="text-xl">
            <svg
              className="w-3 h-3 md:w-3 md:h-3 sm:w-4 sm:h-4 hover:text-gray-500 transition duration-200 ease-in-out "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </button>
          <a
            onClick={toggleLoginForm}
            className="bg-sky-500 hover:bg-sky-400 transition duration-200 ease-in-out font-semibold py-1 px-3 rounded-full mr-2 cursor-pointer md:text-sm text-xs"
          >
            Sign In
          </a>
          {showForm && (
            <div
              className="fixed top-0 right-0 w-full h-full flex items-start justify-center pt-20 text-gray-500 bg-black bg-opacity-50"
              onClick={() => setShowForm(false)}
            >
              <form
                className="bg-sky-950 p-2 rounded relative w-4/5 sm:w-1/2 md:w-3/3"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="relative">
                  <input
                    type="text"
                    className="p-2 w-full pl-12 rounded-lg bg-sky-950 outline-none"
                    placeholder="Search posts, tags, authors ..."
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer">
                    Esc
                  </div>
                  <svg
                    className="w-4 h-4 absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <div className="mt-2 text-md text-gray-500 flex flex-col space-y-4">
                  <span className="font-bold">Recent search:</span>
                  <span className="cursor-pointer hover:text-white text-gray-400 ">
                    Technology
                  </span>
                  <span className="cursor-pointer hover:text-white text-gray-400 ">
                    Nature
                  </span>
                  <span className="cursor-pointer hover:text-white text-gray-400 ">
                    Lifestyle
                  </span>
                  <span className="cursor-pointer hover:text-white text-gray-400 ">
                    Health
                  </span>
                </div>
              </form>
            </div>
          )}
        </div>

        <button onClick={toggleMenu} className="text-xl">
          <FaBars className="hover:rotate-180 transition duration-200" />
        </button>
      </div>
      {showMenu && (
        <div
          onClick={toggleMenu}
          className="fixed inset-0 z-20 bg-black bg-opacity-50"
        >
          <nav
            onClick={(e) => e.stopPropagation()}
            className="fixed right-0 top-0 h-full w-full sm:w-96 p-4 overflow-auto"
          >
            <div className="flex justify-between items-center mb-2">
              <Link href="/" className="">
                <Image
                  src="/images/logo-white.png"
                  alt="Logo Image"
                  width={180}
                  height={50}
                  className="w-56 h-auto cursor-pointer"
                />
              </Link>
              <button
                onClick={toggleMenu}
                className="hover:rotate-90 transition duration-200"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
            <hr className="border-b border-t-0 border-r-0 border-l-0 pb-2 w-full block mb-4" />
            <ul className="space-y-4 ml-3">
              <li>
                <a
                  href="/SinglePost"
                  className="no-underline hover:text-sky-500 text-current text-lg border-b border-t-0 border-r-0 border-l-0 pb-2 w-full block"
                >
                  Single Post
                </a>
              </li>
              <li>
                <a
                  href="/author/JohnDoe"
                  className="no-underline hover:text-sky-500  text-current text-lg border-b border-t-0 border-r-0 border-l-0 pb-2 w-full block"
                >
                  Author Page
                </a>
              </li>
              <li>
                <a
                  href="/category/Lifestyle"
                  className="no-underline hover:text-sky-500  text-current text-lg border-b border-t-0 border-r-0 border-l-0 pb-2 w-full block"
                >
                  Category Page
                </a>
              </li>
              <li>
                <a
                  onClick={toggleLoginForm}
                  className="hover:text-sky-500  text-xl cursor-pointer no-underline text-current border-b border-t-0 border-r-0 border-l-0 pb-2 w-full block"
                >
                  Login Page
                </a>
              </li>
              <li>
                <div className="relative inline-block text-left w-full">
                  <div>
                    <a
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(!isOpen);
                      }}
                      className="hover:text-sky-500  text-xl cursor-pointer no-underline text-current border-b border-t-0 border-r-0 border-l-0 pb-2 w-full block"
                    >
                      <div className="flex justify-between items-center">
                        Pages
                        <svg
                          className="h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </a>
                  </div>

                  {isOpen && (
                    <div className="origin-top-right absolute right-0 w-full rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      <div
                        className="py-1 text-right"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <a
                          href="/PostDetail"
                          className="block px-4 py-2 text-sm no-underline text-current hover:text-sky-500 "
                          role="menuitem"
                        >
                          Post Detail
                        </a>
                        <a
                          href="/Author"
                          className="block px-4 py-2 text-sm  no-underline text-current hover:text-sky-500 "
                          role="menuitem"
                        >
                          Authors
                        </a>
                        <a
                          href="/Category"
                          className="block px-4 py-2 text-sm  no-underline text-current hover:text-sky-500 "
                          role="menuitem"
                        >
                          Category
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            </ul>
            <div className="fixed bottom-10 mt-auto">
              <hr className="my-4 border-t-2 border-gray-200" />
              <div className="flex justify-between items-center">
                <div className="mr-32">
                  <h3 className="text-lg font-bold ml-1">Follow Us</h3>
                </div>
                <div className="flex space-x-4">
                  <FaFacebookF className=" hover:text-accent text-xl text-current" />
                  <FaTwitter className=" hover:text-accent text-xl text-current" />
                  <FaInstagram className="t hover:text-accent text-xl text-current" />
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
      {showLoginForm && (
        <div
          onClick={toggleLoginForm}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-sky-950 bg-opacity-50 z-10"
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
    </header>
  );
}
