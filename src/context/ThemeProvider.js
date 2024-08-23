import ThemeContext from "./ThemeContext";
import { React, useState } from "react";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); /**Sate */

  /**Logi to handle the state */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    /* The provider will access the Context as it is wrap arund the provider
    conf App.js */
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
