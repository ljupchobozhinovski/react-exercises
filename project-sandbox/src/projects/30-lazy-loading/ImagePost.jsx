import React, { useState, useEffect } from "react";
import LazyLoadPost from "./LazyLoadPost";

export default function ImagePost() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => {
        setPosts(json);
        console.log(json);
      });
  }, []);
  

  return (
    <div className="container my-5">
      <h1 className="text-center">Post images</h1>
      <div className="container d-flex flex-column">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {posts.map((post) => {
            return (
              <LazyLoadPost
                key={post.id}
                title={post.title}
                img={post.thumbnailUrl}
                url={post.url}
                thumbnailUrl={post.thumbnailUrl}
                albumId={post.albumId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
