import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Posts from "../../db/Posts";
import Image from "next/image";
import Link from "next/link";

export default function InspirationPage() {
  const inspirationPosts = Posts.filter(
    (post) => post.category === "Inspiration"
  );
  return (
    <>
      <Header />
      <div className="px-4 md:px-0">
        <div className="flex flex-col md:flex-row md:space-x-4 mx-auto w-full md:w-4/5 lg:w-3/4">
          {/* left side */}
          <div className="w-full md:w-full lg:w-2/3 p-4 md:px-0 sm:px-0 px-0">
            <h2 className="text-xl md:text-2xl font-bold mb-4">
              Inspiration Posts
            </h2>
            {inspirationPosts.slice(0, 4).map((post, index) => (
              <div
                key={index}
                className="mb-8 md:flex md:space-x-4 shadow-lg overflow-hidden bg-sky-950 p-4 rounded-lg hover:opacity-80 cursor-pointer transition ease-in-out duration-150"
              >
                <div className="md:w-2/3 sm:px-4 px-0 flex flex-col justify-between">
                  <div className="flex space-x-4 items-center text-gray-500 text-sm md:text-xs lg:text-base">
                    <p className="text-white hover:text-sky-500">
                      <Link href={`/Author/JohnDoe`}>{post.author}</Link>
                    </p>
                    <p className=" hover:text-white cursor-pointer transition ease-in-out duration-150">
                      {new Date(post.date).toLocaleDateString()}
                    </p>
                  </div>
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 cursor-pointer hover:text-gray-500">
                    <Link href="/PostDetailed">{post.title}</Link>
                  </h2>
                  <p className="text-sm md:text-base mb-2 line-clamp-3 leading-loose opacity-80">
                   <Link href="/PostDetailed"> {post.content}</Link>
                  </p>
                  <p className="w-1/3 md:w-1/2 lg:w-2/4 xl:w-1/3 sm:mt-2 mt-2 md:mt-0 lg:mt-0 mb-2 md:mb-0 text-center text-xs md:text-xs lg:text-sm text-white px-2 py-1 border-2 border-sky-500 hover:bg-sky-500 rounded-md">
                    <Link href={`/Category/inspiration`}>{post.category}</Link>
                  </p>
                </div>
                <div className="md:w-1/3 sm:w-1/2 w-full">
                  <Image
                    src={post.images}
                    alt={post.alt}
                    width={400}
                    height={268}
                    className="rounded-lg object-cover cursor-pointer hover:opacity-80 transition ease-in-out duration-150"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* right side */}
          <div className="w-full md:w-1/3 mt-4 md:mt-0 py-4 md:hidden lg:block sm:block">
            {/* latest posts */}
            <div className="">
              <h2 className="text-xl md:text-2xl font-bold mb-4">
                Latest Posts
              </h2>
              {Posts.sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 3)
                .map((post, index) => (
                  <div
                    key={index}
                    className="mb-4 pb-4 last:border-0 rounded-lg bg-sky-950 p-2 hover:opacity-80 cursor-pointer transition ease-in-out duration-150"
                  >
                    <p className="w-1/3 md:w-1/2 lg:w-2/4 xl:w-1/3 sm:mt-2 mt-2 md:mt-0 lg:mt-0 mb-2 md:mb-0 text-center text-xs md:text-xs lg:text-sm text-white px-2 py-1 border-2 border-sky-500 hover:bg-sky-500 rounded-md">
                      <Link href={`/Category/inspiration`}>
                        {post.category}
                      </Link>
                    </p>

                    <h3 className="text-lg md:text-xl font-semibold mt-2 hover:text-gray-500">
                      <Link href="/PostDetailed">{post.title}</Link>
                    </h3>
                    <p className="line-clamp-2 opacity-80 mt-2">
                      {post.content}
                    </p>
                    <div className="flex justify-between items-center text-gray-500 mt-2 text-sm md:text-xs lg:text-base">
                      <div className="flex space-x-4 items-center">
                        <p className=" text-white hover:text-sky-500">
                          <Link href={`/Author/JohnDoe`}>{post.author}</Link>
                        </p>
                        <p className=" hover:text-white cursor-pointer transition ease-in-out duration-150">
                          {new Date(post.date).toLocaleDateString()}
                        </p>
                      </div>
                      <a
                        href="/PostDetailed"
                        className="hover:text-white text-gray-500 no-underline transition-colors duration-200"
                      >
                        Learn more
                      </a>
                    </div>
                  </div>
                ))}
            </div>

            {/* explore categories */}
            <div className="bg-sky-950 p-2 rounded-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-4 px-4 pt-2">
                Explore Categories
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                {Array.from(new Set(Posts.map((post) => post.category))).map(
                  (category, index) => (
                    <div
                      key={index}
                      className="last:border-0 rounded-lg bg-sky-950 p-2 hover:opacity-80 cursor-pointer transition ease-in-out duration-150"
                    >
                      <p className="box-content text-center cursor-pointer hover:bg-sky-400 text-sm md:text-xs border-sky-500 border-2 rounded-full text-white px-2 py-1 whitespace-normal w-auto">
                        {category}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
