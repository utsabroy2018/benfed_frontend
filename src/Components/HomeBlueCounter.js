import React from 'react'

function HomeBlueCounter(
    {
        title,
        counter,
        counter_img,
        class_cus
    }
) {
  return (
    <>

    <div class="col-sm-3 float-left blue_sec_box">
    <div class="icon_box icon_see_Grn"  className={`icon_box icon_see_${class_cus}`}>
    <img src={counter_img} alt=""/>
    </div>
    <h2>{counter}</h2>
    <p>{title}</p>
    </div>

  {/* <div class="col-sm-4 float-left">
	<div class="box_sec">
    <div class="imgSec"><img src={image_thum} alt=""/></div>
		<h2>{title}</h2>
		<p>{description}</p>
    <Link to={pageLink}>read more  &gt;&gt;</Link>
	</div>
  </div> */}
    </>
  )
}

export default HomeBlueCounter