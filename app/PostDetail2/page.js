import React from "react";
import postData from "../db/PostData2";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";

export default function () {
  return (
    <>
      <Header />
      <div className="flex w-full sm:w-3/4 md:w-2/3 lg:w-3/4 mx-auto mt-14">
        <div className="w-1/3 bg-sky-95- p-4">
          <ul className="space-y-2">
            {postData.content.map((section, index) => (
              <li key={index} className="text-blue-500 hover:text-blue-700">
                <a href={`#${section.subtitle.replace(/\s+/g, "")}`}>
                  {section.subtitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 p-4">
          {postData.content.map((section, index) => (
            <div
              key={index}
              id={section.subtitle.replace(/\s+/g, "")}
              className="mb-10"
            >
              <h2 className="text-2xl font-bold mb-2">{section.subtitle}</h2>
              <p className="text-gray-400">{section.subContent}</p>
              <Image
                src={section.image}
                alt={section.subtitle}
                width={500}
                height={300}
              />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
