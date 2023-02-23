import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav
          className={`navbar navbar-expand-lg navbar-${this.props.theme} bg-${this.props.theme}`}
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              NewsFeed
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " to="/business">
                    Business
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " to="/health">
                    Health
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " to="/science">
                    Science
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " to="/sports">
                    Sports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active " to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={`form-check form-switch text-${this.props.modecolor}`}
            >
              <input
                type="checkbox"
                className="form-check-input"
                id="flexSwitchCheckDefault"
                onClick={this.props.change}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
