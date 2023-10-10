import React, { useState, useEffect } from "react";
import Title from "../Components/Title";
import Button from "../Components/Button";
import { BsFillFileEarmarkFontFill } from "react-icons/bs";
import { BiCommentDetail } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

const TestimonialsApp = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${testimonials}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [testimonials]);

  return (
    <>
      <div className="container">
        <Title text={"Testimonial App"}> </Title>
        <div className="d-flex justify-content-around">
          <Button
            text={"Posts"}
            btnClass={"btn-info"}
            icon={<BsFillFileEarmarkFontFill />}
            onClick={() => setTestimonials("Posts")}
          />
          <Button
            text={"Users"}
            btnClass={"btn-info"}
            icon={<FaUserAlt />}
            onClick={() => setTestimonials("Users")}
          />
          <Button
            text={"Comments"}
            btnClass={"btn-info"}
            icon={<BiCommentDetail />}
            onClick={() => setTestimonials("Comments")}
          />
        </div>
        <Title
          classes={"fs-4"}
          text={!testimonials ? "Select one option" : testimonials}
        >
          {" "}
        </Title>
      </div>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          {!items
            ? null
            : items.map((item) => {
                return (
                  <div className="card" key={item.id}>
                    <div className="card-body">
                      <p>
                        {item.name && (
                          <h5 className="card-title text-danger">
                            {item.name}
                          </h5>
                        )}
                      </p>
                      <p>
                        {item.title && (
                          <h6 className="card-subtitle mb-2 text-primary ">
                            {item.title}
                          </h6>
                        )}
                      </p>
                      <p className="card-text">{item.body || item.email}</p>
                      {item.email && (
                        <h6 className="text-info">{item.email}</h6>
                      )}
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
};

export default TestimonialsApp;
