import React, { useState } from "react";
import NewNote from "./NewNote";
import Button from "../Components/Button";
import { v4 as uuidv4 } from "uuid";
export default function NotesApp() {
  const [notes, setNotes] = useState([]);

  const addNewNote = (newNote) => {
    const newNotes = [...notes, newNote];
    newNotes.filter((note) => !note.id && (note.id = uuidv4()));
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const cardsBg = [
    "bg-danger",
    "bg-info",
    "bg-warning",
    "bg-primary",
    "bg-secondary"
  ];

  const randomizeBg = () => {
    const random = Math.floor(Math.random() * cardsBg.length);
    return cardsBg[random];
  };

  return (
    <div className="container text-center">
      <Button
        btnClass={"btn-info m-5"}
        text={"+ New Note"}
        onClick={addNewNote}
      />
      <div className="container d-flex" style={{ gap: 25, flexWrap: "wrap" }}>
        {notes.map((note) => (
          <NewNote
            key={note.id}
            note={note}
            onClick={deleteNote}
            cardBg={randomizeBg}
          />
        ))}
      </div>
    </div>
  );
}
