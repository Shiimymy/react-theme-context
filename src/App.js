import "./App.css";
import React from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import ContentComponent from "./components/ContentComponent";

export default function App() {
  return (
    <ThemeProvider>
      <ContentComponent></ContentComponent> {/*This is the child */}
    </ThemeProvider>
  );
}
