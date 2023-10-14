import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import { ThemeContext, themes } from "./context/theme-context";

const LightAndDarkMode = () => {
  const [theme, setTheme] = useState(themes.dark);
  function changeTheme() {
    theme === themes.dark ? setTheme(themes.light) : setTheme(themes.dark);
  }

  useEffect(() => {
    let docBody = document.body;
    switch (theme) {
      case themes.light:
        docBody.classList.remove("bg-dark");
        docBody.classList.remove("text-light");
        docBody.classList.add("bg-light");
        docBody.classList.add("text-dark");
        break;

      case themes.dark:
        docBody.classList.remove("bg-light");
        docBody.classList.remove("text-dark");
        docBody.classList.add("bg-dark");
        docBody.classList.add("text-light");
    }
  }, [theme]);

  return (
    <div className="container text-center">
      <ThemeContext.Provider value={{ theme, changeTheme }}>
        <Blog />
      </ThemeContext.Provider>
    </div>
  );
};

export default LightAndDarkMode;
