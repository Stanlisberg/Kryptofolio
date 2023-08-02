import React, { useEffect, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function HomeImage() {
  // const imageRef = useRef();

  // let imageIndex = 0;
  // const imageArray = [
  //   "images/flower.svg",
  //   "images/connected.svg",
  //   "images/bitcoin.svg",
  // ];

  // const animateImage = () => {
  //   imageRef.current.src = imageArray[imageIndex];
  //   imageIndex ++;

  //   if (imageIndex === imageArray.length) {
  //     imageIndex = 0;
  //   }
  // };

  // useEffect(() => {
  //   setInterval(animateImage, 1700);
  // }, []);
  
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      transitionTime={1}
      infiniteLoop={true}
      showStatus={false}
      width={360}
      >
      {/* <div className='Image-container'> */}
       <div>
        <img className='a' src='images/bitcoin.svg' width='100'/>
       </div>
       <div>
        <img className='b' src='images/flower.svg' />
       </div>
       <div>
        <img className='c' src='images/connected.svg'/>
       </div>
      {/* </div> */}
    </Carousel>
  );
}
export default HomeImage;
