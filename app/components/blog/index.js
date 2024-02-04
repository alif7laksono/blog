"use client";
import React, { useState } from "react";
import Posts from "../../db/Posts";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  const [visible, setVisible] = useState(6);

  const loadMore = () => {
    setVisible(Posts.length);
  };

  const showLess = () => {
    setVisible(6);
  };

  return (
    <div className="w-full md:w-4/5 lg:w-3/4 mx-auto mt-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-0">
        {Posts.slice(0, visible).map((post, index) => (
          <div
            key={index}
            className="rounded-lg bg-sky-950 bg-opacity-50 transform transition-transform duration-200 hover:text-white p-4 flex flex-col"
          >
            <Link href="/PostDetail" rel="noopener noreferrer">
              <Image
                src={post.images}
                alt={post.title}
                width={800}
                height={200}
                className="rounded-lg hover:opacity-90"
              />
              <div className="flex-grow">
                <h2 className="text-2xl font-bold mb-2 line-clamp-2 mt-2 hover:opacity-70 cursor-pointer transition duration-300 ease-in-out">
                  {post.title}
                </h2>
                <p className="line-clamp-2 opacity-70 transition duration-300 ease-in-out">
                  {post.content}
                </p>
                <div className="mt-2 text-sm text-gray-500">
                  <span>{post.category}</span>
                  <span className="mx-2">|</span>
                  <span>{post.author}</span>
                  <span className="mx-2">|</span>
                  <span>{post.time}</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="w-full flex justify-center space-x-4 mt-4">
        {visible === 6 && (
          <button onClick={loadMore} className="px-4 py-2 gradient-button">
            Load More
          </button>
        )}
        {visible > 6 && (
          <button onClick={showLess} className="px-4 py-2 gradient-button">
            Show Less
          </button>
        )}
      </div>
    </div>
  );
}
