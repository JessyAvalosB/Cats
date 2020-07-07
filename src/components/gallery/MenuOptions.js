import React from "react";

const MenuOptions = props => {
  return (
    <div className="list-group d-flex flex-column m-4">
      <h4 className="align-self-center">
        {props.header}
      </h4>

      <a href="/" className="list-group-item list-group-item-action">
        Top 10
      </a>
      <a href="/" className="list-group-item list-group-item-action">
        Top 50
      </a>
      <a href="/" className="list-group-item list-group-item-action">
        Top 100
      </a>
    </div>
  );
};

export default MenuOptions;
