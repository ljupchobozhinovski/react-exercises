import React, { useRef, useEffect, useState } from "react";
import Title from "../Components/Title";
import ContactsData from "./data.json";
import Contact from "./Contact";

export default function SearchFilterApp() {
  let inputSearch = useRef(null);
  useEffect(() => {
    inputSearch.current.focus();
  });

  const [searchContact, setSearchContact] = useState("");

  return (
    <div className="container text-center">
      <Title text={"Filter Contacts App"} />
      <input
        type="text"
        placeholder="Search by first name"
        className="mb-2 p-1"
        style={{ padding: ".3rem 1.5rem" }}
        ref={inputSearch}
        onChange={(e) => {
          setSearchContact(e.target.value);
        }}
      />
      <section>
        <div className="container">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            {ContactsData.filter((contact) => {
              if (searchContact === "") {
                return contact;
              } else if (
                contact.first_name
                  .toLowerCase()
                  .includes(searchContact.toLowerCase())
              ) {
                return contact;
              }
            }).map((contact) => {
              return <Contact contact={contact} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
