import React, { useState } from "react";
import Button from "../Components/Button";
import Courses from "./StoreComponents/Courses";
import { coursesDB } from "./db/CoursesDB";
import { currenciesDB } from "./db/currenciesDB";
import { v4 as uuidV4 } from "uuid";
import { CurrencyContext } from "./context/currencies-context";
document.body.style.backgroundColor = "#282c34";
document.body.style.color = "#eee";

export default function Store() {
  const [currency, setCurrency] = useState(currenciesDB.Usd);
  return (
    <CurrencyContext.Provider value={currency}>
      <div className="container p-1">
        <p className="fs-3">Change currency:</p>

        {Object.values(currenciesDB).map((currency) => {
          return (
            <Button
              key={uuidV4()}
              btnClass={"btn btn-sm btn-light mx-2"}
              text={currency.code}
              onClick={() => setCurrency(currency)}
            />
          );
        })}

        <header className="text-center my-4">
          <h1 className="fs-1">Course Store</h1>
          <h2>Become a web developer</h2>
          <p className="mx-2">
            Is software engineering stressful? Software engineers face tight
            project deadlines, sudden ad-hoc requirements, and frequent bugs.
            It’s all part and parcel of the job, but when this pressure becomes
            relentless and puts developers under constant stress, emotional
            exhaustion, and inefficacy, it can lead to burnout. Mental health
            issues are also a common cause of burnout in the tech industry. IT
            programming is a highly cognitively intensive and stressful job,
            requiring problem-solving skills and intense concentration.
          </p>
        </header>
        <div className="container">
          <Courses list={coursesDB} />
        </div>
      </div>
    </CurrencyContext.Provider>
  );
}
