import React, { useState } from "react";
import Title from "../Components/Title";
import ContactList from "./ContactList";
import { getContacts } from "./db";
import Contact from "./Contact";
import SearchFilter from "./SearchFilter";

export default function PhoneBookApp() {
  let DbContacts = getContacts();
  const [showContacts, setShowContacts] = useState(false);
  const [sortAZ, setSortAZ] = useState(true);
  const [searchContact, setSearchContact] = useState("");

  const toggleContacts = () => {
    showContacts ? setShowContacts(false) : setShowContacts(true);
  };

  const toggleSortAZ = () => {
    sortAZ ? setSortAZ(false) : setSortAZ(true);
  };

  return (
    <div className="container">
      <Title text={"Phone Book"} />
      <main className="bg-dark text-light p-1">
        <SearchFilter
          handleToggleContacts={toggleContacts}
          handleToggleSortAZ={toggleSortAZ}
          handleSearchContact={setSearchContact}
        />
        <div style={{ height: 650, overflow: "auto" }}>
          <h2 className="text-center">Display Contacts</h2>
          {showContacts && (
            <ContactList
              contacts={(sortAZ
                ? DbContacts.sort((a, b) =>
                    a.first_name.localeCompare(b.first_name)
                  )
                : DbContacts.sort((a, b) =>
                    b.first_name.localeCompare(a.first_name)
                  )
              ).filter((contact) => {
                if (searchContact === "") {
                  return contact;
                } else if (
                  contact.first_name
                    .toLocaleLowerCase()
                    .includes(searchContact.toLowerCase())
                ) {
                  return contact;
                }
              })}
            />
          )}
        </div>
      </main>
    </div>
  );
}
