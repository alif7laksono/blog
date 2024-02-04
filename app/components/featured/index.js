import React from "react";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import Posts from "../../db/Posts";
import Image from "next/image";

export default function Featured() {
  const mainPost = Posts[0];
  const sidePosts = Posts.slice(1, 5);

  return (
    <section className="flex flex-col md:flex-row w-full md:w-4/5 lg:w-3/4 mx-auto py-5">
      <div className="w-full md:w-1/2 lg:w-1/2 h-full px-2 duration-100 bg-sky-950 bg-opacity-50 transform transition-transform rounded-lg">
        {" "}
        <div className="rounded-lg overflow-hidden p-2">
          <Image
            src={mainPost.images}
            alt={mainPost.title}
            width={700}
            height={500}
            className="cursor-pointer hover:opacity-70 transition duration-300 ease-in-out rounded-lg "
            priority="true"
          />
          <div className="md:py-4 py-2 ">
            <h2 className="font-bold text-3xl hover:opacity-70 cursor-pointer transition duration-300 ease-in-out">
              {mainPost.title}
            </h2>
            <p className="line-clamp-3 mb-2 opacity-70 mt-1 text-xl leading-relaxed cursor-pointer">
              {mainPost.content}
            </p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-500">
                <span className="cursor-pointer">{mainPost.author}</span>
                <span className="mx-2">|</span>
                <span>{mainPost.category}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/2 h-full px-2 mb-4 md:mb-0">
        {sidePosts.map((post) => (
          <div
            key={post.id}
            className="flex mb-2 p-2 rounded-lg bg-sky-950 hover:opacity-70 cursor-pointer transition duration-300 ease-in-out  w-full items-center transform"
          >
            <div className="w-1/3 cursor-pointer">
              <Image
                src={post.images}
                alt={post.title}
                width={700}
                height={500}
                className="cursor-pointer rounded-md hover:opacity-90"
              />
            </div>
            <div className="w-2/3 px-4">
              <p className="text-sm text-gray-500 cursor-pointer hover:text-white">
                {post.category}
              </p>
              <h2 className="font-bold text-xl mt-1 cursor-pointer hover:opacity-90">
                {post.title}
              </h2>
              <p className="line-clamp-1 text-sm mt-1 sm:line-clamp-2 cursor-pointer opacity-70 ">
                {post.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// <section className="mx-auto flex flex-col md:flex-row flex-wrap w-full md:w-4/5 lg:w-3/4 sm:px-28 md:px-0 px-0 py-5">
//   <div className="w-full lg:w-1/2 h-full px-2 rounded-md transition-colors duration-200 bg-sky-950 bg-opacity-50 mb-4 md:mb-0">
//     <div className="rounded-lg overflow-hidden p-2">
//       <img src={mainPost.images} alt={mainPost.title} />
//       <div className="md:py-4 py-2">
//         <h2 className="font-bold text-3xl">{mainPost.title}</h2>
//         <p className="line-clamp-3 mb-2 opacity-80 mt-1 text-xl leading-relaxed">
//           {mainPost.content}
//         </p>
//         <div className="flex justify-between items-center">
//           <div className="text-sm text-gray-500">
//             <span>{mainPost.author}</span>
//             <span className="mx-2">|</span>
//             <span>{mainPost.category}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="w-full md:w-1/2 lg:w-1/2 sm:px-4 h-full flex flex-wrap justify-between">
//     {sidePosts.map((post) => (
//       <div
//         key={post.id}
//         className="flex mb-2 p-2 rounded-md transition-colors duration-200 bg-sky-950 bg-opacity-50 w-full md:w-full lg:w-full m-2 items-center"
//       >
//         <div className="w-1/3 cursor-pointer">
//           <img src={post.images} alt={post.title} className="rounded-lg" />
//         </div>
//         <div className="w-2/3 px-4">
//           <p className="text-sm text-gray-500 cursor-pointer">
//             {post.category}
//           </p>
//           <h2 className="font-bold text-xl mt-1 cursor-pointer">
//             {post.title}
//           </h2>
//           <p className="line-clamp-1 text-sm mt-1 sm:line-clamp-2 cursor-pointer">
//             {post.content}
//           </p>
//         </div>
//       </div>
//     ))}
//   </div>
// </section>
