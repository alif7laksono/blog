"use client";
import React, { useState } from "react";
import PostData from "../db/PostData";
import Header from "../components/header";
import Footer from "../components/footer";
import { FiClock } from "react-icons/fi";
import { BiCalendar } from "react-icons/bi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaLink,
} from "react-icons/fa";
import RelatedPosts from "../components/related";

export default function PostDetail() {
  const [replyClicked, setReplyClicked] = useState(null);
  const {
    title,
    description,
    author,
    dateTime,
    images,
    content,
    content2,
    comments,
    category,
    time,
  } = PostData[0];

  const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      by: "Steve Jobs",
    },
    {
      quote:
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      by: "Winston Churchill",
    },
    {
      quote: "Believe you can and you're halfway there.",
      by: "Theodore Roosevelt",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="w-full md:w-3/4 lg:w-1/2 mx-auto mt-2 px-4 md:px-0">
        <div className="flex items-center">
          <p className="capitalize cursor-pointer rounded-lg px-3 py-1 text-sm transition-colors duration-200 gradient-button">
            {category}
          </p>
        </div>
        <h1 className="text-6xl font-bold mb-4 text-center leading-normal">
          {title}
        </h1>
        <div className="mb-4">
          {images[1] && (
            <img
              src={images[1]}
              alt={`${title} 2`}
              className="w-full h-74 object-cover rounded-lg"
            />
          )}
        </div>
        <p className="text-sm text-gray-500 mb-4 flex items-center">
          <span className="mr-2">
            by : <b>{author}</b>
          </span>
          <span className="mr-2 flex items-center">
            <BiCalendar className="h-4 w-4 text-gray-500 mr-1" />
            {new Date(dateTime).toLocaleDateString()}
          </span>
          <FiClock className="h-4 w-4 text-gray-500 mr-1" />
          <span>{time}</span>
        </p>
        <div className="mb-4">
          <h4 className="text-3xl font-semibold leading-relaxed">
            {description}
          </h4>
        </div>
        <div
          className="prose lg:prose-xl mb-4 opacity-70 text-lg leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: content.replace(/<p[^>]*>|<\/p>/g, ""),
          }}
        ></div>
        {images[0] && (
          <img
            src={images[0]}
            alt={`${title} 1`}
            className="w-full h-74 object-cover rounded-lg mt-4 mb-4"
          />
        )}
        <p className="text-sm text-gray-500 text-center">
          Images provided by <i>Unsplash</i>
        </p>

        <div
          className="prose lg:prose-xl mb-4 opacity-70 text-lg leading-relaxed mt-4"
          dangerouslySetInnerHTML={{
            __html: content2.replace(/<p[^>]*>|<\/p>/g, ""),
          }}
        ></div>
        {images[0] && (
          <img
            src={images[2]}
            alt={`${title} 1`}
            className="w-full h-74 object-cover rounded-lg mt-4 mb-4"
          />
        )}
        <p className="text-sm text-gray-500 text-center">
          Images provided by <i>Unsplash</i>
        </p>

        <div className="flex justify-center mt-4">
          <blockquote className="p-4 italic quote w-3/4 mx-auto text-center">
            <div className="mb-4 text-lg leading-relaxed">
              <p className="text-2xl font-bold">{quotes[0].quote}</p>
              <p className="text-xl ">- {quotes[0].by}</p>
            </div>
          </blockquote>
        </div>

        <div className="mt-4 flex flex-col item space-y-4">
          <h2 className="text-2xl text-gray-700">Share this post:</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaFacebookF className="text-gray-700 text-4xl hover:text-gray-300 transition duration-200" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-700 text-4xl hover:text-gray-300 transition duration-200" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-200"
            >
              <FaInstagram className="text-gray-700 text-4xl hover:text-gray-300 transition duration-200" />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-200"
            >
              <FaPinterest className="text-gray-700 text-4xl hover:text-gray-300 transition duration-200" />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition duration-200"
              title="Copy link"
            >
              <FaLink className="text-gray-700 text-4xl hover:text-gray-300 transition duration-200" />
            </a>
          </div>
        </div>

        <div className="mt-14 bg-sky-950 w-full p-4">
          <h2 className="text-2xl font-bold mb-4">Comments</h2>
          {comments &&
            comments.map((comment, index) => (
              <div
                key={index}
                className="mb-4 p-4 rounded-md  shadow flex items-start"
              >
                <div>
                  <img
                    src={comment.image}
                    alt={comment.author}
                    className="w-12 h-12 rounded-full"
                  />
                </div>
                <div className="ml-4 flex-grow flex flex-col justify-between">
                  <div>
                    <p className="font-bold">{comment.author}</p>
                    <p className="opacity-60 text-sm">{comment.date}</p>
                    <p className="opacity-80 text-md mb-2">{comment.comment}</p>
                  </div>
                  <div className="text-right">
                    <button
                      className="italic opacity-80 px-2 py-1 text-sm hover:text-gray-300"
                      onClick={() => setReplyClicked(!replyClicked)}
                    >
                      Reply
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <RelatedPosts />
      </main>
      <Footer />
    </div>
  );
}
