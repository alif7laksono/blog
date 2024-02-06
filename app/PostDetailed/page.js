"use client";
import React, { useState } from "react";
import Header from "../components/header";
import Comment from "../components/comment";
import RelatedPosts from "../components/related";
import Image from "next/image";
import postDetailedData from "../db/PostDetailedData";
import Authors from "../db/Authors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faComment } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/footer";

export default function PostDetailed() {
  const [activeSection, setActiveSection] = useState("introduction");

  return (
    <>
      <Header />

      <div className="w-full md:w-4/5 lg:w-3/4 mx-auto p-4 bg-transparent shadow-md rounded-md">
        <div>
          <h1 className="text-4xl font-bold mb-4 text-center">
            {postDetailedData.title}
          </h1>

          <div className=" lg:w-3/4 md:w-full w-full mt-10 mx-auto">
            <h2 className="text-2xl font-semibold mb-2">Introduction</h2>
            <p className="text-base mb-4 leading-loose text-gray-200">
              {postDetailedData.introduction}
            </p>
          </div>

          <hr className="my-4 lg:w-3/4 md:w-full w-full mx-auto" />
          <div className="lg:w-3/4 md:w-full w-full mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col sm:flex-row justify-between items-center space-x-0 sm:space-x-4 mb-4 sm:mb-0 text-center sm:text-left">
                <Image
                  src={Authors[4].img}
                  alt="Author's profile"
                  width={64}
                  height={64}
                  className="w-16 h-16 sm:w-16 sm:h-16 rounded-full mx-auto sm:mx-0"
                />
                <div>
                  <h2 className="text-xl md:text-lg sm:text-base font-semibold text-sky-500 cursor-pointer hover:text-sky-400">
                    {Authors[4].name}
                  </h2>
                  <p className="text-sm text-gray-500">{Authors[4].bio}</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="text-sm text-gray-500">
                  <span>{postDetailedData.uploadDate}</span>
                  <span> • </span>
                  <span>{postDetailedData.readingTime} min read</span>
                </div>
                <div className="flex justify-center items-center space-x-4">
                  <span className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="cursor-pointer text-lg md:text-base sm:text-sm"
                    />
                    <span>{postDetailedData.totalLikes}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faShare}
                      className="cursor-pointer text-lg md:text-base sm:text-sm"
                    />
                    <span>{postDetailedData.totalShares}</span>
                  </span>
                  <span className="flex items-center space-x-2">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="cursor-pointer text-lg md:text-base sm:text-sm"
                    />
                    <span>{postDetailedData.totalComments}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-4 lg:w-3/4 md:w-full w-full mx-auto" />

          <div className="flex justify-center">
            <Image
              src={postDetailedData.image1}
              width={1000}
              height={400}
              alt="brain image"
              className="rounded-md"
            />
          </div>
          <p className="mb-4 text-center italic">
            Image provided by{" "}
            <span className="text-sky-500">
              <a
                href="https://unsplash.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </span>
          </p>
          <div className=" lg:w-3/4 md:w-full w-full mt-10 mx-auto">
            <h2 className="text-2xl font-semibold mb-2">
              {postDetailedData.subTitle1}
            </h2>
            <p className="text-base mb-4 leading-loose text-gray-200">
              {postDetailedData.article1}
            </p>
          </div>
          <div className=" lg:w-3/4 md:w-full w-full mt-10 mx-auto">
            <h2 className="text-2xl font-semibold mb-2">
              {postDetailedData.subTitle2}
            </h2>
            <p className="text-base mb-4 leading-loose text-gray-200">
              {postDetailedData.article2}
            </p>
          </div>
          <div className=" lg:w-3/4 md:w-full w-full mt-10 mx-auto">
            <h2 className="text-2xl font-semibold mb-2">
              {postDetailedData.subTitle3}
            </h2>
            <p className="text-base mb-4 leading-loose text-gray-200">
              {postDetailedData.article3}
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src={postDetailedData.image2}
              width={1000}
              height={400}
              alt="brain image"
              className="rounded-md"
            />
          </div>
          <p className="mb-4 text-center italic">
            Image provided by{" "}
            <span className="text-sky-500">
              <a
                href="https://unsplash.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Unsplash
              </a>
            </span>
          </p>
          <div className=" lg:w-3/4 md:w-full w-full mt-10 mx-auto">
            <h2 className="text-2xl font-semibold mb-2">
              {" "}
              {postDetailedData.subTitle4}
            </h2>
            <p className="text-base mb-4 leading-loose text-gray-200">
              {postDetailedData.article4}
            </p>
          </div>
          <div className="text-sm italic mt-4 py-4 bg-transparent rounded text-center">
            <h2 className="font-semibold mb-2 text-md">Sources:</h2>
            {postDetailedData.sources.map((source, index) => (
              <span key={index}>
                <a
                  href={source.url}
                  className="text-sky-500 hover:text-blue-700 transition duration-300 text-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.name}
                </a>
                {index < postDetailedData.sources.length - 1 && ", "}
              </span>
            ))}
          </div>
        </div>
        <Comment />
        <RelatedPosts />
      </div>

      <Footer />
    </>
  );
}
