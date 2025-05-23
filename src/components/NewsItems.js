// import React, { Component } from "react";  //Class Based Component
import React from "react"; //Function Based Component
//export class NewsItems extends Component {  //Class Based Component
const NewsItems = (props) => {
  //Function Based Component
  //render() {
  let { title, description, imageUrl, newsUrl, author, date, source } = props; //this.props; //(this keyword is used for Class Based Component)
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>

        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text text-danger">
            <small className="text-body-secondary">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            rel="noreferrer"
            href={newsUrl}
            target="blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
  //}
};

export default NewsItems;
