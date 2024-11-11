import React, { useRef } from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import Slider from 'react-slick';






function TestPage() {

  const sliderRef = useRef(null); 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  
  return (
    <>

test

{/* <button onClick={() => sliderRef.current.slickPrev()}>Previous</button> */}
{/* <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider> */}

<div className="slider-container">
      <button className="prev-button" onClick={() => sliderRef.current.slickPrev()}>
        Prev
      </button>

      <Slider ref={sliderRef} {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      <br/> <br/><br/> <br/><br/> <br/>
      <button className="next-button" onClick={() => sliderRef.current.slickNext()}>
        Next
      </button>
    </div>

<br/> <br/>
{/* <Slider1 /> */}

<PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={400}
      height={200}
    />



{/* <Sidebar 
        // pageWrapId={'page-wrap'} 
        // outerContainerId={'App'} 
        width={'24em'}
        //menu={'left'}
        /> */}
    </>
  )
}

export default TestPage