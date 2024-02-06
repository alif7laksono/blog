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
import Image from "next/image";

const {
  title,
  description,
  author,
  dateTime,
  image1,
  image2,
  image3,
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
    quote: "Believe you can and you&apos;re halfway there.",
    by: "Theodore Roosevelt",
  },
];

export default function PostDetail() {
  const [replyClicked, setReplyClicked] = useState(null);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="w-full md:w-3/4 lg:w-1/2 mx-auto mt-2 px-4 md:px-0">
        <div className="flex items-center"></div>
        <h1 className="text-6xl font-bold mb-4 text-center leading-normal">
          {title}
        </h1>
        <p className="mb-4 opacity-70 text-lg leading-relaxed mt-4">
          &apos;Finding Inspiration in Everyday Moments&apos; explores the
          concept of discovering creativity and motivation in the mundane
          aspects of daily life. This title suggests that inspiration is not
          limited to grand events or extraordinary circumstances but can be
          found in the ordinary experiences that make up our day-to-day
          existence. The article may delve into techniques for cultivating a
          mindset that allows individuals to recognize and appreciate the
          beauty, insight, and potential for innovation in the seemingly routine
          occurrences of life. It could also offer practical tips or anecdotes
          to inspire readers to seek out and embrace the hidden sources of
          inspiration that surround them. Overall, the title hints at a
          narrative that celebrates the power of mindfulness and perspective in
          uncovering inspiration in the most unexpected places.
        </p>
        <div className="mb-4">
          {image1 && (
            <Image
              src="/images/posts/technology/image-1.jpg"
              alt={`${title} 2`}
              width={800}
              height={500}
              priority={true}
              className="w-full h-74 object-cover rounded-lg"
            />
          )}
        </div>
        
        <div className="mb-4">
          <h4 className="text-3xl font-semibold leading-relaxed">
            {description}
          </h4>
        </div>
        <div className="prose lg:prose-xl mb-4 opacity-70 text-lg leading-relaxed">
          <div>
            <p>
              Even the most mundane activities can spark inspiration if we
              approach them with mindfulness and curiosity. Something as simple
              as sipping a cup of coffee or taking a walk around the block can
              become an opportunity to find beauty in the everyday. Pay
              attention to the little details - the way the sunlight filters
              through the trees, the sound of birds chirping in the distance -
              and you&apos;ll discover a world of inspiration waiting to be
              explored.
            </p>
            <p>
              So, the next time you&apos;re feeling stuck or uninspired,
              remember that inspiration is all around you. Whether it&apos;s in
              the natural world, the people you meet, or the everyday moments
              you experience, there&apos;s beauty to be found everywhere you
              look. All you have to do is open your eyes and heart to it.
            </p>
          </div>
        </div>
        {image2 && (
          <Image
            src="/images/posts/nature/image-2.jpg"
            width={800}
            height={500}
            alt={`${title}`}
            priority={true}
            className="w-full h-74 object-cover rounded-lg mt-4 mb-4"
          />
        )}
        <p className="text-sm text-gray-500 text-center">
          Images provided by <i>Unsplash</i>
        </p>

        <div className="mb-4 opacity-70 text-lg leading-relaxed mt-4">
          <div>
            <p>
              Life is filled with moments - some big, some small, but all
              significant in their own way. It&apos;s easy to get caught up in
              the hustle and bustle of daily life and overlook the beauty that
              surrounds us. However, if we take the time to pause and appreciate
              the world around us, we can find inspiration in the most
              unexpected places.
            </p>
            <p>
              One of the simplest yet most profound sources of inspiration is
              nature. Take a moment to step outside and breathe in the fresh
              air. Look up at the sky and marvel at the colors of the sunset or
              the dance of the clouds. Even in the midst of chaos, nature has a
              way of grounding us and reminding us of the beauty of the world.
            </p>
          </div>
          <br />
          <div>
            <p>
              Another source of inspiration can be found in the people we
              encounter every day. Whether it&apos;s a kind gesture from a
              stranger or a heartfelt conversation with a loved one, human
              connections have the power to uplift and inspire us. Take the time
              to listen to others&apos; stories, and you may find yourself
              inspired by their resilience, compassion, and strength.
            </p>
          </div>
          <br />
        </div>
        {image3 && (
          <Image
            src="/images/posts/lifestyle/image-2.jpg"
            alt={`${title} 1`}
            width={800}
            height={500}
            priority={true}
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
          <h2 className="text-2xl">Share this post:</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <FaFacebookF className="text-gray-700 text-3xl hover:text-gray-300 transition duration-200" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="text-gray-700 text-3xl hover:text-gray-300 transition duration-200" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-200"
            >
              <FaInstagram className="text-gray-700 text-3xl hover:text-gray-300 transition duration-200" />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition duration-200"
            >
              <FaPinterest className="text-gray-700 text-3xl hover:text-gray-300 transition duration-200" />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition duration-200"
              title="Copy link"
            >
              <FaLink className="text-gray-700 text-3xl hover:text-gray-300 transition duration-200" />
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
                    <p className="font-bold">{comment.author}</p>
                    <p className="opacity-60 text-sm">{comment.date}</p>
                    <p className="opacity-80 text-md mb-2 line-clamp-2">
                      {comment.comment}
                    </p>
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
      </div>
      <Footer />
    </div>
  );
}
