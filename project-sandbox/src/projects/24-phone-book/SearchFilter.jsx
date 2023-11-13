import React from "react";
import Button from "../Components/Button";
import { FaAddressBook, FaArrowsAltV } from "react-icons/fa";
export default function SearchFilter({
  handleToggleContacts,
  handleToggleSortAZ,
  handleSearchContact
}) {
  return (
    <section className="text-center my-5">
      <Button
        btnClass={"btn-warning mx-2 p-2"}
        text={" "}
        icon={<FaAddressBook />}
        onClick={handleToggleContacts}
      />
      <input
        onChange={(e) => handleSearchContact(e.target.value)}
        type="text"
        placeholder="Search by first name"
        className="mb-3 mx-1 p-2"
      />
      <Button
        btnClass={"btn-danger mx-2 p-2"}
        text={" "}
        icon={<FaArrowsAltV />}
        onClick={handleToggleSortAZ}
      />
    </section>
  );
}
