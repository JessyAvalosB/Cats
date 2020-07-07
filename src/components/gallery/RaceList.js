import React from "react";
import { Link } from "react-router-dom";

const RaceList = params => {
  return (
    <div>
      <h2>Razas</h2>
      <ul className="list-group">
        <Link
          to="#"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center item-hover"
          style={{backgroundColor: "#1c1714", color: "#e4e6eb" }}
        >
          Persa
          <span className="badge badge-primary badge-pill">14</span>
        </Link>
        <Link
          to="#"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          style={{backgroundColor: "#1c1714", color: "#e4e6eb" }}
        >
          Bengala
          <span className="badge badge-primary badge-pill">2</span>
        </Link>
        <Link
          to="#"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          style={{backgroundColor: "#1c1714", color: "#e4e6eb" }}
        >
          Siamés
          <span className="badge badge-primary badge-pill">1</span>
        </Link>
        <Link
          to="#"
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          style={{backgroundColor: "#1c1714", color: "#e4e6eb" }}
        >
          Coon
          <span className="badge badge-primary badge-pill">1</span>
        </Link>
      </ul>
    </div>
  );
};

export default RaceList;
