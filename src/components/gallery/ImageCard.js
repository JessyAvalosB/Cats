import React from "react";

const ImageCard = props => {
  return (
    <div className="card text-left bg-dark text-light rounded m-2">
      <img
        className="card-img-top rounded img-fluid"
        src="/img/17010.jpg"
        alt=""
        style={{ width: 500 }}
      />
      <div className="card-body">
        <h4 className="card-title">
          {props.title}
        </h4>
        <p className="card-text">
          {props.description}
        </p>
        <div className="d-flex justify-content-between">
          <span>
            {props.date}
          </span>
          <div>
            {" "}<span>
              <i class="fa fa-thumbs-up" />
            </span>{" "}
            {props.like}{" "}
            <span>
              <i class="fa fa-thumbs-down" />
            </span>{" "}
            {props.dislike}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
