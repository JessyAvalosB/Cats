import React, { Component } from "react";

import ImageCard from "../components/gallery/ImageCard";
import RaceList from '../components/gallery/RaceList'

export default class Gallery extends Component {
  render() {
    return (
      <div className="container p-4 d-flex col-12">

        <div className="col-3">
          <RaceList/>
        </div>

        <div className="col-5">
          <ImageCard
            title="Gatita Mimosa"
            description="Puta madre pablo"
            date="2014-05-15"
            like="50"
            dislike="1"
          />
        </div>
      </div>
    );
  }
}
