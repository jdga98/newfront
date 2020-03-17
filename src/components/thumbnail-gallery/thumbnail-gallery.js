import React, { useState } from "react";
import ActiveThumbnailWindow from "./Active-Thumbnail-Window";
import "./_carrousel-thumbnail.scss";
import ThumbnailGrid from "./thumbnail-grid";
import {isMobile} from 'react-device-detect'
import Swiper from 'react-id-swiper';

const ThumbnailGallery = ({ thumbnails }) => {
  const [ activeIndex, setActiveIndex ] = useState(0);


  //here we render all the photos and send to two components called thumbnailgrid and activethumbnailwindow..
  //then set default photo to show to default [0] first image in ActiveThumbnailWindow.
 
  const renderThumbnails = () => {
    if (thumbnails.length) {
      return (
        <>
          <ThumbnailGrid
            thumbnails={thumbnails}
            handleClick={(handleClick)}
          />
          
          <ActiveThumbnailWindow
            activeThumbnail={thumbnails[[activeIndex][0]]}
          />
        </>
      );
    }
    return null;
  };

  const handleClick = e => {
    const newActiveIndex = e.target.getAttribute("data-index");
    setActiveIndex(newActiveIndex);
  };

  
  if(isMobile){      
      const params = {
        pagination: {
          el: '.swiper-pagination',         
          clickable: false
        },
        containerClass: 'banner-mobile__imgContainer'
      }     
      
    
      const lstImg = 
        thumbnails.map((thumbnail, i) => {
        return (
           <img  className='banner-mobile__img' src={thumbnail} key={i}alt='img-thumbnails'/>
        );      
      })
    
    return(
      <section className="banner-mobile">
        <Swiper {...params} shouldSwiperUpdate>
          {lstImg}
        </Swiper>
      </section>
    )
  }
  else{
    return (
      <div className='left-container'>
        <div className="left-thumbnail">{renderThumbnails()}</div>
        <div className="p-description"></div>
      </div>
    );
  }
}

export default ThumbnailGallery;
