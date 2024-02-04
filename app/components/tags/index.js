import React from "react";
import Tags from "../../db/Tags";
import Image from "next/image";

const TagComponent = () => {
  return (
    <div className="p-4 md:p-0 w-full md:w-4/5 lg:w-3/4 mx-auto mt-14">
      <h1 className="text-3xl font-bold text-center mb-6">Our Tags</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
        {Tags.map((tag) => {
          return (
            <div
              key={tag.id}
              className="flex items-center px-4 py-2 rounded-md transition-colors duration-100 bg-sky-950 bg-opacity-50 hover:bg-sky-900 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={tag.image}
                  alt={tag.name}
                  width={64}
                  height={64}
                  className="rounded-full w-64 h-auto "
                />
              </div>
              <div className=" text-center">
                <h2 className="font-semibold text-sm capitalize">{tag.name}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TagComponent;
