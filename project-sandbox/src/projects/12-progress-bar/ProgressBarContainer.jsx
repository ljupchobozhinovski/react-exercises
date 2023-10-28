import React, { useEffect, useRef, useState } from "react";
import Title from "../Components/Title";
import ProgressBar from "../Components/ProgressBar";

export default function ProgressBarContainer() {
  const [completed, setCompleted] = useState(0);
  const [status, setStatus] = useState({
    ui: 55,
    ux: 33,
    data: 20
  });

  const projectData = [
    {
      bgColor: "navy",
      completed: status.ui
    },
    {
      bgColor: "magenta",
      completed: status.ux
    },
    {
      bgColor: "orange",
      completed: status.data
    }
  ];

  const inputStyle = {
    width: 50,
    outline: "none",
    textAlign: "center",
    borderBottom: "1px solid lightgray"
  };

  const uiInput = useRef(null);

  useEffect(() => {
    uiInput.current.focus();
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 5000);
  }, []);

  return (
    <div className="container text-center">
      <Title text={"Progress bars"} />
      <h2>Project Status:</h2>
      <ul className="list-unstyled">
        <li className="">
          UI Status{" "}
          <input
            type="number"
            min="0"
            max="100"
            style={inputStyle}
            ref={uiInput}
            value={status.ui}
            className="w-25"
            onChange={(e) => {
              setStatus({ ...status, ui: e.target.value });
            }}
          />
        </li>

        <li className="">
          UX Status{" "}
          <input
            className="w-25"
            type="number"
            min="0"
            max="100"
            style={inputStyle}
            value={status.ux}
            onChange={(e) => {
              setStatus({ ...status, ux: e.target.value });
            }}
          />
        </li>

        <li className="">
          DATA Status{" "}
          <input
            className="w-25"
            type="number"
            min="0"
            max="100"
            style={inputStyle}
            value={status.data}
            onChange={(e) => {
              setStatus({ ...status, data: e.target.value });
            }}
          />
        </li>
      </ul>
      {projectData.map((data, idx) => (
        <ProgressBar
          key={idx}
          bgColor={data.bgColor}
          completed={data.completed}
        />
      ))}
      <ProgressBar
        completed={completed}
        bgColor={completed > 50 ? "green" : "red"}
      />
    </div>
  );
}
