import React from 'react'
import { Link } from 'react-router-dom'
// import logo from "../../Assets/Images/a.png";
import acce_a from "../Assets/images/a.png";
import acce_b from "../Assets/images/aa.png";
import acce_c from "../Assets/images/aaa.png";
import logo from "../Assets/images/logo.png";
import TopMenu from './TopMenu';
import { BASE_URL } from '../routes/config';
import {Detector, Online, Offline} from "react-detect-offline"
import { useNavigate } from 'react-router-dom';
import Sidebar from './sidebar';

function HeaderTop() {
const navigation = useNavigate();

var default_siz = 14;
var min = 12;
var max = 32;

let active = false

const toggle = () => {
    let toggle = document.querySelector('.toggle')
    let text = document.querySelector('.text')
    active = !active
    if (active) {
        toggle.classList.add('active')
		// $("body").addClass("black_White");
		document.body.classList.add('black_White');
		
    } else {
        toggle.classList.remove('active')
		// $("body").removeClass("black_White");
		document.body.classList.remove('black_White');
    }
}




const increaseFontSize = () => {
    var p = document.querySelectorAll('p');

	console.log('p.length')
	
    for (var i = 0; i < p.length; i++) {
        if (p[i].style.fontSize) {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        } else {

            var s = 14;
        }
        if (s != max) {
            s += 1;
        }
        p[i].style.fontSize = s + "px"
    }
	
	
}

const decreaseFontSize = () => {
	var p = document.querySelectorAll('p');

    for (var i = 0; i < p.length; i++) {

        if (p[i].style.fontSize) {
            var s = parseInt(p[i].style.fontSize.replace("px", ""));
        } else {
            var s = 12;
        }
        if (s != min) {
            s -= 1;
        }
        p[i].style.fontSize = s + "px"
    }
}

const defaiultFontSize = () => {
	var p = document.querySelectorAll('p');
    for (var i = 0; i < p.length; i++) {
        p[i].style.fontSize = default_siz + "px"
    }
}




  return (
    <>

    <div class="topBar">
    <div class="wrapper">
    <div class="leftNav">
    <ul>
    <li><i class="fa fa-phone" aria-hidden="true"></i> +91 33 2441 4366/67</li>
    <li><i class="fa fa-envelope" aria-hidden="true"></i> <a href="mailto:info@benfed.org">info@benfed.org</a></li>
    </ul>
    </div>
    <div class="rightNav">
    <div class="language">
    <ul>
    <li><a href="#main_info_content">Skip to Main Content</a></li> 
    <li>
    <a href="javascript:void(0)" onClick={() => decreaseFontSize()}><img src={`${acce_a}`} alt=""/></a> 
    <a href="javascript:void(0)" onClick={() => defaiultFontSize()}><img src={`${acce_b}`} alt=""/></a>
    <a href="javascript:void(0)" onClick={() => increaseFontSize()}><img src={`${acce_c}`} alt=""/></a>
    </li>	
    </ul>
    </div>
    </div>

    </div>
    </div>

    <div class="wrapper logosection">
    <div class="logoArea">
    <Link to="/"><img src={`${logo}`} alt=""/></Link>
    </div>

    <div className='top_right_sec'>

    {/* <div class="right_Nav_sec_2">
    <ul>
    <li><a href="#main_info_content">Skip to Main Content</a></li> 
    <li>
    <a href="javascript:void(0)" onClick={() => decreaseFontSize()}><img src={`${acce_a}`} alt=""/></a> 
    <a href="javascript:void(0)" onClick={() => defaiultFontSize()}><img src={`${acce_b}`} alt=""/></a>
    <a href="javascript:void(0)" onClick={() => increaseFontSize()}><img src={`${acce_c}`} alt=""/></a>
    </li>	
    </ul>
    </div> */}

    <div class="right_Nav_sec_1">
    <div class="search_sec"><input type="search" placeholder="Search" /> 
		<i class="fa fa-search serach_cus" aria-hidden="true"></i>
</div>
    </div>

    

    </div>
    {/* <div class="login">
    <ul>
    <li><Link to="#" target="_blank">Login</Link></li>	
    </ul>
    </div> */}
    </div>

    <div class="topNavmain">
	<div class="wrapper navArea">
	<TopMenu/>
		
	{/* <div class="search_sec"><input type="search" placeholder="Search" /> 
		<i class="fa fa-search serach_cus" aria-hidden="true"></i>
</div> */}
	</div>	
</div>


        
        </>
  )
}

export default HeaderTop