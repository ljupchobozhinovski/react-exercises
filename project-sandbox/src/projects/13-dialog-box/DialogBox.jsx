import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from "react-icons/bs";
import "./Bounce.css";
export default function DialogBox({ width = 550 }) {
  const [subscription, setSubscription] = useState({
    title: "Hello",
    desc: "Would you like to subscribe",
    state: null,
    justifyContent: "space-between"
  });

  const handleSubscribe = () => {
    setSubscription({
      title: "Thank you",
      desc: "for your subscription",
      state: "subscribed",
      justifyContent: "flex-end"
    });
  };

  const handleUnsubscribe = () => {
    setSubscription({
      title: "Sorry",
      desc: "to see you go",
      state: "unsubscribed",
      justifyContent: "flex-end"
    });
  };

  const [icon, setIcon] = useState();
  let iconStyle = {
    fontSize: "80px",
    justifyContent: "center",
    color: subscription.state === "subscribed" ? "forestgreen" : "red"
  };

  useEffect(() => {
    if (subscription.state === "subscribed") {
      setIcon(<BsFillEmojiSmileFill style={iconStyle} />);
      document.body.style.background = "forestgreen";
    }
    if (subscription.state === "unsubscribed") {
      setIcon(<BsFillEmojiFrownFill style={iconStyle} />);
      document.body.style.background = "red";
    }
  }, [subscription.state]);

  const [bounce, setBounce] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setBounce("");
    }, 500);

    return () => setBounce("bounce");
  }, [subscription.state]);

  return (
    <div className={`container d-flex justify-content-center mt-5 ${bounce}`}>
      <div className="card bg-light" style={{ width: width }}>
        <img
          src="https://images.pexels.com/photos/7248764/pexels-photo-7248764.jpeg?auto=compress&cs=tinysrgb&w=600"
          className="card-img-top"
          alt="subscribe"
        />
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <h5 className="card-title">{subscription.title}</h5>
                <p className="card-text">{subscription.desc}</p>
              </div>
              <div className="col-4">{icon}</div>
            </div>
          </div>
        </div>

        <div
          className="d-flex mb-2 px-1"
          style={{
            width: "100%",
            justifyContent: `${subscription.justifyContent}`
          }}
        >
          {subscription.state === null && (
            <Button text={"Cancel"} btnClass={"btn-light"} />
          )}
          {subscription.state === "subscribed" ? null : (
            <Button
              text={"Subscribe"}
              btnClass={"btn-danger"}
              onClick={handleSubscribe}
            />
          )}
          {subscription.state === "subscribed" ? (
            <Button
              text={"Unsubscribe"}
              btnClass={"btn-danger"}
              onClick={handleUnsubscribe}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}
