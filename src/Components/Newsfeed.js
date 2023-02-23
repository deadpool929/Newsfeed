import React, { Component } from "react";

export default class Newsfeed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { title, Imgurl, url, content, bgcolor, color, author, date, source } =
      this.props;
    return (
      <div>
        <div className="card">
          <span
            style={{ left: "80%", zIndex: "1" }}
            class="position-absolute top-0  translate-middle badge bg-danger"
          >
            {source}
          </span>
          <img src={Imgurl} className="card-img-top" alt="..." />
          <div
            style={{
              backgroundColor: bgcolor,
              color: color,
            }}
            className="card-body"
          >
            <p>Published : {new Date(date).toGMTString()}</p>
            <h5 className="card-title">{title}... </h5>
            <p className="card-text">{content}...</p>
            <h6>Author : {author}</h6>

            <a href={url} className="btn btn-sm btn-primary" target="_blank">
              See Details
            </a>
          </div>
        </div>
      </div>
    );
  }
}
