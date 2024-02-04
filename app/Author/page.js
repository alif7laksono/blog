import React from "react";
import Authors from "../db/Authors";
import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import {
  FaFacebookF,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaLink,
} from "react-icons/fa";

const socialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    icon: FaFacebookF,
  },
  {
    name: "Twitter",
    url: "https://www.twitter.com",
    icon: FaTwitter,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: FaInstagram,
  },
  {
    name: "Pinterest",
    url: "https://www.pinterest.com",
    icon: FaPinterest,
  },
  {
    name: "Link",
    url: "#",
    icon: FaLink,
  },
];

export default function Author() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 py-4 w-full sm:w-3/4 md:w-full lg:w-3/4 mx-auto">
        {Authors.map((author) => (
          <div
            key={author.id}
            className="flex flex-col items-center p-6 shadow-lg rounded-md bg-sky-950 bg-opacity-50 hover:text-white hover:shadow-xl hover:opacity-70 transition duration-300 ease-in-out"
          >
            <Image
              src={author.img}
              alt={author.name}
              width={800}
              height={500}
              className="w-24 h-24 rounded-full"
            />
            <span className="capitalize mt-2 opacity-60 text-sm sm:text-sm md:text-base">
              {author.posts} posts
            </span>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
              {author.name}
            </h2>
            <p className="text-center opacity-70 mb-4 text-md sm:text-sm md:text-base h-20">
              {author.bio}
            </p>
            <div className="flex space-x-2 sm:space-x-3 md:space-x-4">
              {socialMedia.map((media) => (
                <a
                  key={media.name}
                  href={media.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-300 transition duration-200"
                >
                  <media.icon className="text-gray-700 text-2xl sm:text-2xl md:text-xl hover:text-gray-300 transition duration-200" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
