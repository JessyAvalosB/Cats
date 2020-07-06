import React from "react";

const RaceList = params => {
  return (
    <div className="d-flex flex-column">
      <h2 className="align-self-center">Razas</h2>
      <ul className="list-group">
        <a
          href="/"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          Persa
          <span className="badge badge-primary badge-pill">14</span>
        </a>
        <a
          href="/"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          Bengala
          <span className="badge badge-primary badge-pill">2</span>
        </a>
        <a
          href="/"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          Siamés
          <span className="badge badge-primary badge-pill">1</span>
        </a>
        <a
          href="/"
          class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
        >
          Coon
          <span className="badge badge-primary badge-pill">1</span>
        </a>
      </ul>
    </div>
  );
};

export default RaceList;
