import React, { Component } from "react";

import ImageCard from "../components/gallery/ImageCard";
import RaceList from "../components/gallery/RaceList";
import MenuOptions from "../components/gallery/MenuOptions";

export default class Gallery extends Component {
  render() {
    return (
      <div className="container p-4 d-flex col-md-12">

        <div className="col-sm-3" style={{position: "fixed", left: "1%", top: "15%", zIndex:"2"}}>
          <RaceList/>
        </div>

        <div className="col-md-12 ml-2 mr-4 row d-flex justify-content-center">
          <div className="col-sm-6">
            <ImageCard
              title="Gatita Mimosa"
              description="Puta madre pablo"
              date="2014-05-15"
              like="50"
              dislike="1"
            />
            <br/>
            <ImageCard
              title="Gatita Mimosa"
              description="Puta madre pablo"
              date="2014-05-15"
              like="50"
              dislike="1"
            />
          </div>
        </div>

        <div className="col-md-3" style={{position: "fixed", right: "1%", top: "15%", zIndex:"2"}}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusamus doloremque pariatur eius accusantium totam, tenetur autem tempora laudantium unde iste at, fuga facilis vel sit architecto repudiandae et quam!</p>
        </div>
        <div className="col-3">
          <MenuOptions header="Top gatos amados"/>
          <MenuOptions header="Top gatos no tan amados"/>
        </div>
      </div>
    );
  }
}
