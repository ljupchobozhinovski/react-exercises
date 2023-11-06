import React from "react";

export default function NavItem({ href, active = "", text, onClick }) {
  return (
    <li className="nav-item">
      <a href={href} className={`nav-link ${active}`} onClick={onClick}>
        {text}
      </a>
    </li>
  );
}
