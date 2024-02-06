import React from "react";
import Posts from "../../db/Posts";
import Image from "next/image";
import Link from "next/link";

export default function RelatedPosts() {
  return (
    <div className="w-full md:w-4/5 lg:w-full mx-auto mt-14">
      <h2 className="text-2xl font-bold md:mb-4 mb-0 text-center md:text-left">Posts You Might Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-0 ">
        {Posts.slice(0, 3).map((post, index) => (
          <div
            key={post.id}
            className="cursor-pointer transition-colors duration-100 bg-sky-950 bg-opacity-50 hover:text-white p-2 flex flex-col rounded-lg"
          >
            <Link href="/PostDetail" rel="noopener noreferrer">
              <div className="overflow-hidden h-48">
                <Image
                  src={post.images}
                  alt=""
                  width={800}
                  height={200}
                  className="rounded-lg hover:opacity-50"
                />
              </div>
            </Link>
            <Link href="/PostDetail" rel="noopener noreferrer">
              <div className="flex-grow">
                <h2 className="text-xl font-bold mt-3 line-clamp-2 h-16 hover:transition ease-in-out duration-500 hover:text-sky-500">
                  {post.title}
                </h2>
                <p className="line-clamp-2 opacity-70 h-18">{post.content}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
