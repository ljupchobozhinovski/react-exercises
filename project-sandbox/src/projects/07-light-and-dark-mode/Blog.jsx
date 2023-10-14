import React, { useState } from "react";
import Title from "../Components/Title";
import Button from "../Components/Button";
import { useContext } from "react";
import { ThemeContext } from "./context/theme-context";
const Blog = () => {
  const { theme, changeTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="text-end">
        <span>
          <Button
            text={theme === "dark" ? "Light" : "Dark"}
            onClick={changeTheme}
            btnClass={`${theme === "dark" && "btn-light"} btn-sm`}
          />
        </span>
      </div>
      <Title text={`MY BLOG WITH ${theme} THEME`} />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore est
        minus illum, totam repellat commodi modi in, aliquam quis nisi ex optio
        doloremque error eveniet.
      </p>
    </>
  );
};

export default Blog;
