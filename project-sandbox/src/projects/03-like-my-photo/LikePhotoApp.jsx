import React, { useState } from "react";
import Title from "../Components/Title";
import {
  AiOutlineSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment
} from "react-icons/ai";

const LikePhotoApp = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);

  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count + 1);
    } else {
      setLike(false);
      setCount(count - 1);
    }
  };

  return (
    <>
      <div>
        <Title text={"Like Photo App"} />
        <Title classes={"h5"} text={`Likes ${count}`} />
      </div>
      <div className="d-flex justify-content-center">
        <div
          onDoubleClick={toggleLike}
          className="card text-center"
          style={{ width: "18rem", cursor: "pointer" }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_1280.jpg"
            class="card-img-top"
            alt="corgi-doggo"
          />
          <div className="card-header">
            <AiOutlineSmile className="m-2" />
            <span>DogyDog</span>
          </div>
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
          <div className="card-footer d-flex justify-content-around">
            <AiOutlineComment />{" "}
            {like ? (
              <AiFillHeart className="text-danger" onClick={toggleLike} />
            ) : (
              <AiOutlineHeart onClick={toggleLike} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LikePhotoApp;
