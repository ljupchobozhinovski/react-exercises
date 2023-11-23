import React, { useState } from "react";
import { AiFillRobot, AiOutlineRobot } from "react-icons/ai";

export default function SpeechNarrator({ text }) {
  const splitText = (text, from, to) => [
    text.slice(0, from),
    text.slice(from, to),
    text.slice(to)
  ];
  const [highlightSection, setHighlightSection] = useState({
    from: 0,
    to: 0
  });
  const robotStyle = {
    fontSize: 100,
    padding: 0,
    cursor: "pointer"
  };

  const synth = window.speechSynthesis;
  let utterance = new SpeechSynthesisUtterance(text);
  utterance.addEventListener("boundary", ({ charIndex, charLength }) => {
    setHighlightSection({ from: charIndex, to: charIndex + charLength });
  });

  const HighlightedText = ({ text, from, to }) => {
    const [start, highlight, finish] = splitText(text, from, to);
    return (
      <div className="card" style={{ width: 500 }}>
        {start}
        <span className="bg-warning">{highlight}</span>
        {finish}
      </div>
    );
  };

  const [rateValue, setRateValue] = useState(1);

  const [showPlay, setShowPlay] = useState(false);

  const handlePlay = () => {
    synth.speak(utterance);
    synth.resume();
    setShowPlay(true);
  };

  const handlePause = () => {
    synth.pause();
    setShowPlay(false);
  };

  const handleRateValue = (e) => {
    setRateValue(e.target.value);
  };
  utterance.rate = rateValue;

  return (
    <div
      className="container d-flex justify-content-center align-items-center flex-column my-3"
      style={{ gap: 30 }}
    >
      <h1>Speech Narrator</h1>

      {showPlay ? (
        <AiFillRobot
          style={robotStyle}
          className="text-info"
          onClick={handlePause}
        />
      ) : (
        <AiOutlineRobot style={robotStyle} onClick={handlePlay} />
      )}

      <HighlightedText text={text} {...highlightSection} />
      <div className="form-group">
        <label>Rate: {rateValue}</label>
        <input
          type="range"
          className="form-range"
          min=".5"
          max="2"
          step=".1"
          onChange={handleRateValue}
          value={rateValue}
        />
      </div>
    </div>
  );
}
