import React from 'react'
import { Link } from 'react-router-dom'

function HomeThreeBox(
  {
  title,
  description,
  pageLink,
  image_thum
  }
) {
  return (
    <>
  <div class="col-sm-4 float-left">
	<div class="box_sec">
    {/* <div className={`box_sec ${class_cus}`}> */}
    <div class="imgSec"><img src={image_thum} alt=""/></div>
		<h2>{title}</h2>
		<p>{description}</p>
		{/* <a href="">{pageLink} === read more  &gt;&gt;</a> */}
    <Link to={pageLink}>read more  &gt;&gt;</Link>
	</div>
  </div>
    </>
  )
}

export default HomeThreeBox