import React from "react";
import { Router } from "@reach/router";
import { ThemeProvider } from "emotion-theming";

import "./App.css";
import ScreenOne from "./screens/ScreenOne";
import ScreenTwo from "./screens/ScreenTwo";
import ScreenThree from "./screens/ScreenThree";
import { theme } from "./components/appShell/Layout";
import Nav from "./components/appShell/Nav";

function App({}) {
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Nav />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Router>
            <ScreenOne path="/one" default />
            <ScreenTwo path="/two" />
            <ScreenTwo path="/two/:id" />
            <ScreenThree path="/three" />
          </Router>
        </React.Suspense>
      </div>
    </ThemeProvider>
  );
}

export default App;
