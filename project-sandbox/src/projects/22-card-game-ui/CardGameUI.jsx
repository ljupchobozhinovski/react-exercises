import React, { useState } from "react";
import Title from "../Components/Title";
import Button from "../Components/Button";
import Card from "./Card";
import Spear from "./svg/spear.svg";
import Archer from "./svg/archer.svg";
import Horse from "./svg/horse.svg";

export default function CardGameUI({}) {
  const [start, setStart] = useState(false);
  const startGame = () => {
    setStart(true);
  };

  document.body.style.background = "#170536";
  document.body.style.color = "whitesmoke";
  return (
    <div className="container text-center">
      {!start ? (
        <section className="text-center m-5">
          <Title text={"Card Game"} />
          <Button
            text={"Start"}
            btnClass={"btn-danger w-25 my-4"}
            onClick={startGame}
          />
          <Title classes={"h4"} text={"Rules:"} />
          <ul className="list-unstyled">
            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
            <li>Quod voluptates nesciunt quia commodi!</li>
            <li>
              Atque quibusdam sed et in obcaecati quaerat nemo minima quos totam
              est eius, dolorum voluptatum deserunt excepturi.
            </li>
            <li>
              Eos similique, repellendus unde numquam suscipit nam quia
              cupiditate adipisci provident mollitia.{" "}
            </li>
            <li>
              Enim dolor necessitatibus eos praesentium id odio, sed omnis, ea
              ex vero officiis molestiae iure esse cumque fuga nisi eaque.
            </li>
            <li>
              Facilis non facere nesciunt minima corporis maxime sequi incidunt
              at sunt voluptates!
            </li>
            <li>
              Temporibus commodi sed eum id asperiores delectus optio illo,
              nostrum obcaecati consectetur.
            </li>
            <li>
              Facere aperiam ullam esse molestiae maiores eum sit consectetur,
              maxime odio debitis cupiditate pariatur?
            </li>
          </ul>
        </section>
      ) : (
        <>
          <Title text={"0:1"} />
          <main className="container m-auto">
            <div className="row">
              <div className="col-5">
                <section className="player_1 d-flex">
                  <Card
                    player={"player_1"}
                    unitTypeName={"Sward Cavalry"}
                    unitTypeImg={Horse}
                  />
                  <Card
                    player={"player_1"}
                    unitTypeName={"Spearman"}
                    unitTypeImg={Spear}
                  />
                </section>
              </div>
              <div className="col-2">
                <section className="fog-of-war"></section>
              </div>
              <div className="col-5">
                <section className="player_2 d-flex">
                  <Card
                    player={"player_2"}
                    unitTypeName={"Sward Cavalry"}
                    unitTypeImg={Horse}
                  />
                  <Card
                    player={"player_2"}
                    unitTypeName={"Spearman"}
                    unitTypeImg={Spear}
                    />
                    </section>
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
}
