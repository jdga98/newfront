import React from "react";
import "./_carrousel-thumbnail.scss";
import { isMobile } from "react-device-detect";
import Thumbnail from "./thumbnail";

//this component receives the active thumbnail and renders into the view
const ActiveThumbnailWindow = ({ activeThumbnail }) => {
  if (isMobile) {
    return (
      <div>
        {activeThumbnail.map((thumbnail, i) => {
          return <Thumbnail key={i} imgUrl={thumbnail} index={i} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="active-thumbnail">
        <img
          className="img-thumbnail-active"
          src={activeThumbnail}
          alt="img thumbnail gallery"
        ></img>
      </div>
    );
  }
};

export default ActiveThumbnailWindow;
