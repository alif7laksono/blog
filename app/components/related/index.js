import React from "react";
import Posts from "../../db/Posts";
import Image from "next/image";

export default function RelatedPosts() {
  return (
    <div className="w-full md:w-4/5 lg:w-full mx-auto mt-14">
      <h2 className="text-2xl font-bold mb-4">Posts You Might Like</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 md:p-0 ">
        {Posts.slice(0, 3).map((post, index) => (
          <div
            key={post.id}
            className="cursor-pointer rounded-sm transition-colors duration-100 bg-sky-950 bg-opacity-50 hover:bg-sky-900 hover:text-white p-2 flex flex-col"
          >
            <div className=" overflow-hidden">
              <Image
                src={post.images}
                alt=""
                width={800}
                height={200}
                layout="responsive"
              />
            </div>
            <div className="flex-grow">
              <h2 className="text-2xl font-bold mb-2 mt-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="line-clamp-2 opacity-70 ">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
