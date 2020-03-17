import React from 'react';
import './_carrousel-thumbnail.scss';
import {isMobile} from 'react-device-detect'

const Thumbnail =({ imgUrl, handleClick, index }) => {
  if(isMobile){
    return (
        <div>
            {
               <img src={imgUrl} alt='img-thumbnails'               
                data-index ={index}
               />
            }           
        </div>
    )
  }
  //here we capture when the mouse enter into a image and change the image when the mouse hover, and handle the clic to
  //render the component. 
  else{    
    return (
        <div className='thumbnail'>
            {
               <img className='img-thumbnail' src={imgUrl} alt='img-thumbnails'
                onClick={handleClick}
                data-index ={index}
                onMouseEnter={handleClick}
               />
            }           
        </div>
    )
  }
   
}

export default Thumbnail


