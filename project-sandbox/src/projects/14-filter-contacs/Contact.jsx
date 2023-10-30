import React from "react";

export default function Contact({ contact }) {
  const bgColors = [
    "bg-primary",
    "bg-secondary",
    "bg-success",
    "bg-danger",
    "bg-warning",
    "bg-info",
    "bg-light"
  ];

  const getRandomBgColor = function () {
    return bgColors[Math.floor(Math.random() * bgColors.length)];
  };

  return (
    <div key={contact.id} className="col ">
      <div className={`card m-2 border border-success`}>
        <div className={`card-header ${getRandomBgColor()} m-2`}>
          <h5 className="card-title">First Name : {contact.first_name}</h5>
        </div>
        <img src={contact.avatar} alt={contact.user_name} />
        <div className="card-body">
          <h6>Country of origin: {contact.country}</h6>
          <p className="card-text">Username: {contact.user_name}</p>
          <h5>{contact.jobTitle}</h5>
          <h6>{contact.jobDescription}</h6>
        </div>
        <div className="card-footer">
          <p className="card-text">Phone: {contact.phone}</p>
          <p className="card-text">Email: {contact.email}</p>
          <p>{contact.zodiacSign}</p>
        </div>
      </div>
    </div>
  );
}
