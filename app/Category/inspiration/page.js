import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Posts from "../../db/Posts";
import Image from "next/image";

export default function InspirationPage() {
  const inspirationPosts = Posts.filter(
    (post) => post.category === "Inspiration"
  );

  // the data inside inspiraion posts : title, category, content, images, author, tags, date, time, alt

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row md:space-x-4 mx-auto w-3/4">
        {/* left side */}
        <div className="w-full md:w-2/3 p-4 md:px-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4">
            Inspiration Posts
          </h1>
          {inspirationPosts.slice(0, 4).map((post, index) => (
            <div
              key={index}
              className="mb-8 md:flex md:space-x-4 shadow-lg overflow-hidden bg-sky-950 p-4 rounded-lg"
            >
              <div className="md:w-1/3">
                <Image
                  src={post.images}
                  alt={post.alt}
                  layout="responsive"
                  width={500}
                  height={335}
                  className="rounded-lg object-cover cursor-pointer hover:opacity-80 transition ease-in-out duration-150"
                />
              </div>
              <div className="md:w-2/3 px-4 flex flex-col justify-between">
                <div className="flex justify-start items-center space-x-4 text-gray-500">
                  <p className="text-sm md:text-base mb-2 hover:text-white cursor-pointer transition ease-in-out duration-150">
                    {post.category}
                  </p>
                  <p className="text-sm md:text-base mb-2 hover:text-white cursor-pointer transition ease-in-out duration-150">
                    By: {post.author}
                  </p>
                  <p className="text-sm md:text-base mb-2 hover:text-white cursor-pointer transition ease-in-out duration-150">
                    {new Date(post.date).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 cursor-pointer hover:text-gray-500">
                    {post.title}
                  </h2>
                  <p className="text-sm md:text-base mb-2 line-clamp-3 leading-loose opacity-80">
                    {post.content}
                  </p>
                </div>
                <div>
                  <a
                    href="#"
                    className="hover:text-white text-gray-500 no-underline transition-colors duration-200"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* right side */}
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          {/* featured posts */}
          <div></div>
          {/* trending posts */}
          <div></div>
          {/* explore categories */}
          <div></div>
          {/* space for ads */}
          <div></div>
        </div>
      </div>
      <Footer />
    </>
  );
}
