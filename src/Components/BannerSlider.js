import React, { useRef } from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import banner_1 from "../Assets/images/banner.png";
import banner_2 from "../Assets/images/banner_22.png";
import Slider from 'react-slick';

function BannerSlider() {

  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex) => {
  //   setIndex(selectedIndex);
  // };

  const sliderRef = useRef(null); 
	var settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	};

  return (
    <>
<div className='bannerSliderMain'>
<Slider ref={sliderRef} {...settings}>
<img className="d-block w-100" src={banner_1} alt="First slide" />
<img className="d-block w-100" src={banner_2} alt="First slide" />
</Slider>

<button className="slick-prev slick-arrow" onClick={() => sliderRef.current.slickPrev()}><i class="fa fa-angle-left" aria-hidden="true"></i></button>
		<button className="slick-next slick-arrow" onClick={() => sliderRef.current.slickNext()}><i class="fa fa-angle-right" aria-hidden="true"></i></button>
</div>

{/* 
<Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner_1}
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner_2}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner_1}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel> */}
    

    </>
  )
}

export default BannerSlider