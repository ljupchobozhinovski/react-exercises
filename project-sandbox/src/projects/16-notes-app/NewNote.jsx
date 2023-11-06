import React, { useEffect, useState } from "react";
import { Icons, NoteStyle, DeleteIcon } from "./NoteStyle";
import { MdOutlineNoteAlt, MdDeleteForever } from "react-icons/md";

export default function NewNote({ note, onClick, text, cardBg }) {
  const [newCardBg, setNewCardBg] = useState();

  useEffect(() => {
    !newCardBg && setNewCardBg(cardBg);
  }, [newCardBg]);

  return (
    <NoteStyle className={`card text-white fw-bolder ${newCardBg}`}>
      <div className="card-header text-right">
        <Icons>
          <MdOutlineNoteAlt />
          <DeleteIcon>
            <MdDeleteForever onClick={() => onClick(note.id)} />
          </DeleteIcon>
        </Icons>
      </div>
      <div className="card-body">
        <textarea style={{ border: "none", outline: "none", resize: "both" }}>
          {text}
        </textarea>
      </div>
      <div className="card-footer"></div>
    </NoteStyle>
  );
}
