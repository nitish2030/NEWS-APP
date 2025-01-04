import React from "react";

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
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
          <span className="badge rounded-pill bg-danger" style={{ zIndex: 1 }}>
            {source}
          </span>
        </div>
        <img
          src={imageUrl || "https://via.placeholder.com/150"}
          className="card-img-top"
          alt="News"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small style={{ color: "green" }}>
              By {author || "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-dark btn-sm">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
