import React from "react";
import Course from "./Course";

export default function Courses({ list }) {
  return (
    <ul
      className="list-unstyled d-flex mt-2 justify-content-center"
      style={{ flexWrap: "wrap", gap: 30 }}
    >
      {list.map((item) => (
        <Course key={item.id} course={item} />
      ))}
    </ul>
  );
}
