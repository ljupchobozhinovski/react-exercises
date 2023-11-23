import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function LazyLoadPost({ title, url, thumbnailUrl, albumId }) {
  return (
    <div class="col">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">{title}</h2>
        </div>

        <LazyLoadImage
          src={url}
          className="card-img-top"
          alt={url}
          effect="blur"
        />

        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text">{thumbnailUrl}</p>
        </div>
        <div className="card-footer">Album ID: {albumId}</div>
      </div>
    </div>
  );
}
