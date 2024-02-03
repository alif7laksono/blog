import React from "react";
import Tags from "../db/Tags";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function Category() {
  return (
    <div>
      <Header />
      <div className="mx-auto w-full lg:w-3/4">
        <h1 className="text-3xl font-bold text-center my-8">Categories</h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {Tags.map((tag) => (
            <div
              key={tag.id}
              className="flex flex-col items-center shadow-lg cursor-pointer rounded-md bg-transparent hover:shadow-xl py-4 px-2 gradient-border relative"
            >
              <Image
                src={tag.image}
                alt={tag.name}
                width={200}
                height={200}
                className="rounded-md object-cover"
              />
              <h2 className="text-lg sm:text-xl md:text-xl font-semibold mb-2 capitalize mt-2">
                {tag.name}
              </h2>
              <p className="text-sm text-gray-500">
                Total posts: {tag.totalPosts}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}