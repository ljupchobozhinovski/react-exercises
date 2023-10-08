import React, { useState } from "react";
import Title from "../Components/Title";

const EsignatureApp = () => {
  const [name, setName] = useState("Please enter your Signature");

  const [date, setDate] = useState("Please select date");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: "none",
    borderBottom: "2px dotted",
    outline: "none",
    padding: ".35 rem 0"
  };
  document.body.style.background = "#eee";
  return (
    <>
      <div className="text-bg-primary p-3">
        <Title text={name}></Title>
      </div>
      <div className="text-bg-secondary p-3">
        <Title text={date}></Title>
      </div>

      <div className="text-bg-warning">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum eveniet
          cumque quam possimus, animi blanditiis veritatis quod excepturi
          temporibus vero quasi illo fugit perspiciatis repellendus a voluptatum
          quia similique ratione asperiores atque. Odio quas repudiandae facere
          illo esse optio, temporibus placeat iure autem doloremque minima eaque
          sed distinctio porro debitis eum corrupti, fuga, repellat rem! Omnis
          cupiditate sit doloremque iusto nemo culpa, numquam exercitationem
          commodi vero non, nulla porro velit dicta id? Qui, ducimus explicabo?
          Saepe laborum quia illum, harum suscipit doloremque aspernatur iusto
          alias minus quidem obcaecati, temporibus est nulla? Sapiente in
          consectetur asperiores atque voluptatum, sunt exercitationem obcaecati
          doloribus amet eos nemo nesciunt doloremque nostrum error aut, dicta
          cupiditate saepe? Dolor pariatur similique minima debitis consectetur
          accusamus, earum aut veritatis ea! Asperiores corporis error quibusdam
          necessitatibus id? Officiis sequi quod illum dolor temporibus
          voluptates maxime nostrum est voluptate autem ratione fugiat vel quae
          ut earum maiores, molestiae repellat, ducimus doloribus incidunt
          praesentium quas accusamus eius. Quia, maxime optio. Earum, minus
          totam in quibusdam magni laborum debitis culpa tempora ea recusandae
          laudantium velit, soluta incidunt aperiam quae quasi. Similique hic
          fugiat molestiae quasi illo rem! Repellendus molestiae nihil
          excepturi, optio placeat voluptatem aperiam quod possimus esse qui
          quibusdam vitae praesentium id quam tenetur itaque quo. Vel rerum quas
          sunt dolore, quos natus minima provident nihil veritatis
          necessitatibus eius maiores animi. Commodi error quasi illum officiis
          corrupti, ratione facilis aliquid quas ea, accusamus mollitia deserunt
          reprehenderit, distinctio dolores perspiciatis aut. Sit quia non
          cumque quod quibusdam, laborum fuga quisquam voluptatibus!
        </p>
      </div>

      <div>
        <footer className="d-flex justify-content-around">
          <input
            type="date"
            value={date}
            name=""
            id=""
            style={inputStyle}
            onChange={handleDateChange}
          />
          <input
            type="text"
            value={name}
            name=""
            id=""
            style={inputStyle}
            onChange={handleNameChange}
          />
        </footer>
      </div>
    </>
  );
};

export default EsignatureApp;
