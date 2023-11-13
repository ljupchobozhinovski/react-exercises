import React from "react";
import styled from "styled-components";
import { FaUserAlt, FaPhone } from "react-icons/fa";
const ContactStyle = styled.li`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  max-width: 700px;
  margin: auto;
  padding: 0.2rem 0.4rem;
  border-bottom: 1px solid #666;
  &:hover {
    cursor: pointer;
    background-color: #666;
  }
  img {
    height: 50px;
    border-radius: 50%;
  }
`;

export default function Contact({ icon, firstName, lastName, phoneNumber }) {
  return (
    <ContactStyle>
      <div>
        {!icon ? (
          <FaUserAlt className="text-info" />
        ) : (
          <img src={icon} alt="" />
        )}
      </div>
      <div>{!firstName ? "First Name" : firstName}</div>
      <div>{!lastName ? "Last Name" : lastName}</div>
      <div>
        {!phoneNumber ? (
          "+3897xxxxxxxx"
        ) : (
          <a className="text-info" href={`tel: ${phoneNumber}`}>
            {phoneNumber}
            <FaPhone className="text-success ms-1" />
          </a>
        )}
      </div>
    </ContactStyle>
  );
}
