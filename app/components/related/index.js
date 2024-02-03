import React from "react";
import Posts from "../../db/Posts";

export default function RelatedPosts() {
  return (
    <div className="grid grid-cols-4 gap-4 mt-14">
      {Posts.slice(0, 4).map((post, index) => (
        <div key={index} className="card">
          <img src={post.images} alt={post.title} />
          <div className="card-body">
            <h5 className="card-title">{post.title}</h5>
            <p className="card-text">{post.category}</p>

          </div>
        </div>
      ))}
    </div>
  );
}
