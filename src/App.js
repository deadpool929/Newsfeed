import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { Routes, Route } from "react-router-dom";

export default class App extends Component {
  constructor() {
    super();
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    this.state = {
      theme: "light",
      modeC: "dark ",
    };
  }
  toChangeTheme = () => {
    if (document.body.style.backgroundColor === "white") {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      this.setState({
        theme: "dark",
        modeC: "light",
      });
    } else if (document.body.style.backgroundColor === "black") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      this.setState({
        theme: "light",
        modeC: "dark",
      });
    }
  };
  render() {
    return (
      <div>
        <Navbar
          change={this.toChangeTheme}
          theme={this.state.theme}
          modecolor={this.state.modeC}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                key="general"
                bgcolor={document.body.style.backgroundColor}
                color={document.body.style.color}
                limit={12}
                category="general"
              />
            }
          />
          <Route
            path="/business"
            element={
              <News
                key="business"
                bgcolor={document.body.style.backgroundColor}
                color={document.body.style.color}
                limit={12}
                category="business"
              />
            }
          />
          <Route
            path="/entertainment"
            element={
              <News
                key="entertainment"
                bgcolor={document.body.style.backgroundColor}
                color={document.body.style.color}
                limit={12}
                category="entertainment"
              />
            }
          />
          <Route
            path="/health"
            element={
              <News
                key="health"
                bgcolor={document.body.style.backgroundColor}
                color={document.body.style.color}
                limit={12}
                category="health"
              />
            }
          />
          <Route
            path="/science"
            element={
              <News
                key="science"
                bgcolor={document.body.style.backgroundColor}
                color={document.body.style.color}
                limit={12}
                category="science"
              />
            }
          />
          <Route
            path="/sports"
            element={
              <News
                key="sports"
                bgcolor={document.body.style.backgroundColor}
                color={document.body.style.color}
                limit={12}
                category="sports"
              />
            }
          />
          <Route
            path="/technology"
            element={
              <News
                key="technology"
                bgcolor={document.body.style.backgroundColor}
                color={document.body.style.color}
                limit={12}
                category="technology"
              />
            }
          />

          {/* <News
            bgcolor={document.body.style.backgroundColor}
            color={document.body.style.color}
            limit={12}
          /> */}
        </Routes>
      </div>
    );
  }
}
