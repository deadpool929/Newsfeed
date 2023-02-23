import React, { Component } from "react";
import load from "../load.gif";
export default class Loading extends Component {
  render() {
    return (
      <div className="text-center" style={{ marginTop: "8%" }}>
        <img src={load}></img>
      </div>
    );
  }
}
