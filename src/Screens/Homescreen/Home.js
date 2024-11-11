import React, { useEffect, useState, useRef } from 'react'
import BannerSlider from '../../Components/BannerSlider'
import Anouncement from '../../Components/Anouncement'
import StatisticBox from '../../Components/StatisticBox'
import map_img from "../../Assets/images/map_real.png";
import gallery_ben from "../../Assets/images/gallery_ben.png";
import WelcomeHomeText from '../../Components/WelcomeHomeText';
import FaqPage from '../../Components/FaqPage';
import HomeThreeBox from '../../Components/HomeThreeBox';
import scroll_top from "../../Assets/images/scroll_top.png";
import FooterCus from '../../Components/FooterCus';
import { Link } from 'react-router-dom';
import { BASE_BENFED_URL, BASE_URL } from '../../routes/config';
import axios from 'axios';
import Loader from '../../Components/Loader';
// import Faq from '../../Components/Faq';
import img_ben from "../../Assets/images/img_ben.png";
import img_2_ben from "../../Assets/images/img_2_ben.png";
import img_3_ben from "../../Assets/images/ben_img_3.png";
import available from "../../Assets/images/available.jpg";

import ben_icon_a from "../../Assets/images/ben_icon_a.png";
import ben_icon_b from "../../Assets/images/ben_icon_b.png";
import ben_icon_c from "../../Assets/images/ben_icon_c.png";
import ben_icon_d from "../../Assets/images/ben_icon_d.png";

import img_ben_a from "../../Assets/images/img_ben_a.png";
import img_ben_b from "../../Assets/images/img_ben_b.png";
import img_ben_c from "../../Assets/images/img_ben_c.png";
import footer_slide from "../../Assets/images/footer_slide.png";

import award_a from "../../Assets/images/award_a.png";
import award_b from "../../Assets/images/award_b.png";
import award_c from "../../Assets/images/award_c.png";

import HomeBlueCounter from '../../Components/HomeBlueCounter';
import TabContentHome_Network from '../../Components/TabContentHome_Network';
import TabContentHome_Graph from '../../Components/TabContentHome_Graph';
import Slider from 'react-slick';


function Home() {

	const [getGalleryImage, setGalleryImage] = useState([]);
    const [getGalleryFolder, setGalleryFolder] = useState('');
    const [loading, setLoading] = useState(true);
	const [loading_statis, setLoading_statis] = useState(true);
	const [getCounterData, setCounterData] = useState('');


	const sliderRef = useRef(null); 
	var settings = {
	dots: false,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	};


	const bottomThreeBox = [
		{
			title: 'Marketing Procurement',
			description: 'The marketing division of BENFED is mainly engaged in procurement of paddy from different farmers of the state of West Bengal through various societies enlisted with BENFED.',
			image: img_ben,
			pageLink: '',
		},
		{
			title: 'Engineering',
			description: 'The Engineering Division of BENFED renders technical consultancy in execution of engineering projects sanctioned under different Govt. Schemes like RKVY, RIDF, State Plan, NCDC etc.',
			image: img_2_ben,
			pageLink: '',
		},
		{
			title: 'Fertilizer',
			description: 'This apex Marketing Society plays a pivotal role in supply and distribution of different chemical fertilizers at the lowest market price throughout the state of West Bengal.',
			image: img_3_ben,
			pageLink: '',
		}
	]

	const counterBox = [
		{
			title: 'Established',
			counter: '1995',
			counterImg: ben_icon_a
		},
		{
			title: 'Branch Offices',
			counter: getCounterData.tot_branch,
			counterImg: ben_icon_b
		},
		{
			title: 'Registered Societies',
			counter: getCounterData.tot_soc,
			counterImg: ben_icon_c
		},
		{
			title: 'Vendors',
			counter: getCounterData.tot_vendor,
			counterImg: ben_icon_d
		}
	]

	const fetchGallerydata = ()=>{
	axios.post(`${BASE_URL}/wapi/gallimglist`,
	{
		auth_key:"xxxxx",
	}
	// ,
	// {
	//     headers: {
	//         Authorization: loginData.token,
	//     },
	// }
	).then(res => {

		if(res.status == '200'){
		
		if(res.data.suc > 0){
		setGalleryImage(res?.data?.msg);
		setGalleryFolder(res?.data?.folder);
		// setPageTitle(res?.data?.title);
		setLoading(false);
			// setFolderLocation()
			console.log(res , 'gggggggg', res?.data?.msg);

			// pageDataCheck = res.data.status;
		} else {
		setGalleryImage([])
			// pageDataCheck = res.data.status;
		}

		}

	}) 

	}

	const fetchCounterData = ()=>{
		axios.post(`${BASE_BENFED_URL}/f_getvendor`,
		// axios.post(`https://benfed.in/benfed_godown/index.php/api/f_getvendor`,	
		{
			auth_key:"xxxxx",
		}
		// ,
		// {
		//     headers: {
		//         Authorization: loginData.token,
		//     },
		// }
		).then(res => {
	
			

			if(res.status == '200'){

			console.log(res.data.value[0] , 'ddddddddddddd');
			setCounterData(res?.data?.value[0])
			if(res.data.suc > 0){
			// set here
			setLoading(false);

			} else {
			// setCounterData([])
			// pageDataCheck = res.data.status;
			}
	
			}
	
		}) 
	
		}
	
	


	useEffect(()=>{
	fetchGallerydata();
	fetchCounterData();
	},[])


	return (
		<>
			<BannerSlider />

			

			<div className="banner_botSec_ben" id="main_info_content">
	<div className="wrapper_sm">
	
	{bottomThreeBox.map(item =>
			<HomeThreeBox
			image_thum={item.image}
			title={item.title}
			description={item.description}
			pageLink={item.pageLink}
			/>
			)}

	</div>
	</div>

	<div className="welcomeSec">
	<div className="wrapper">
		<div className="welcomeSecLeft">
		<WelcomeHomeText />
			
		</div>
		<div className="welcomeSecRight">
		
		<div className="scroll_sec_ben_home">
			<h2><i className="fa fa-cube" aria-hidden="true"></i>  Available Product  </h2>
			<img src={available} alt=""/>
			{/* <br/><br/>
			<h2><i className="fa fa-gavel" aria-hidden="true"></i> Announcement</h2>
			<Anouncement/>
			<a href="#">View All</a> */}
		</div>	
		
		</div>
	</div>
</div>

<div class="blue_sec">
	<div class="wrapper_sm">

	
	{counterBox.map((item, index) => (
	<HomeBlueCounter
		key={index} // add the index as a key
		counter_img={item.counterImg}
		counter={item.counter}
		title={item.title}
		class_cus = {index} 
	/>
))}

	</div>
</div>

<div class="gallery_sec">
<div class="wrapper gallery_sec_wrap">
	<div class="event_ben">
	<div class="event_scroll_ben">
			<h2><i class="fa fa-gavel" aria-hidden="true"></i> Notice Board / Tender
			</h2>
			<ul>
			<li>
			<h3>MIC, Cooperation, Govt. of West Bengal visited BENFED</h3>
			<div class="img_box_main">
			<div class="img_box"><img src={img_ben_a} alt=""/></div>	
			<div class="img_box_content">
			<p>Shri H. A. Safwi, Hon’ble Minister-In-Charge, Department of Co-operation & Inland Water Transport, Govt. of West Bengal paid a visit to BENFED Head Office on 20th July, 2012 to inaugurate “Conference on Annual Business Review”.</p>	
			</div>	
			</div>
			</li>
				
			<li>
			<h3>MIC, Cooperation, Govt. of West Bengal visited BENFED</h3>
			<div class="img_box_main">
			<div class="img_box"><img src={img_ben_b} alt=""/></div>	
			<div class="img_box_content">
			<p>It was indeed a pleasure for BENFED management & staffs to welcome, Shri Arup Roy, Hon’ble Minister in charge, Department of Co-operation, Govt of West Bengal on 16th February, 2017....</p>	
			</div>	
			</div>
			</li>
				
			<li>
			<h3>59th Anniversary Celebration</h3>
			<div class="img_box_main">
			<div class="img_box"><img src={img_ben_c} alt=""/></div>	
			<div class="img_box_content">
			<p>There is something special about the day; the birds chirping in the wee hours of the morning had a musical note. The sun possibly was beaming with golden rays which didn’t have a scorching effect during the day sailing through.</p>	
			</div>	
			</div>
			</li>
			
			</ul>
			<Link to="/notificationsorders">View All</Link>
		</div>
	</div>
	
	<div class="gallery_sec_ben">
	<h2>Our Gallery  <Link to="/gallery">View Gallery</Link> </h2>
	<div class="gallery_sec_main">
		<div class="gallery_sec_sub">
		{loading ?(
		<Loader align = {'center'} gap = {'middle'} size = {'large'} />
		):(
		<>
		<div className='homeGallery'>
		<ul>
		{getGalleryImage.slice(0, 6).map(item =>
		<li><img src={`${BASE_URL}/${getGalleryFolder}/${item.gal_img}`} alt="" /></li>
		)}
		</ul>
		</div>
		</>
		)}
	    {/* <img src="images/gallery_ben.png" alt=""/> */}
		</div>
	</div>
		
	</div>
</div>
	
</div>


<div class="slide_text_sec_ben">
	<div class="wrapper">
	<div class="slide_text_sec_ben_sub">
	<Slider ref={sliderRef} {...settings}>
	<div class="slide_text_list">
		<div class="col-sm-9 slide_img float-left"><img src={footer_slide} alt=""/></div>
		<div class="col-sm-3 float-left">
		<div class="slide_txt">
		<h2>Title 1</h2>	
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
			
		<div class="button_text">
		<button className="prev-button" onClick={() => sliderRef.current.slickPrev()}><i class="fa fa-angle-left" aria-hidden="true"></i></button>
		<button className="next-button" onClick={() => sliderRef.current.slickNext()}><i class="fa fa-angle-right" aria-hidden="true"></i></button>
		</div>
		</div>
		</div>
	</div>
	<div class="slide_text_list">
		<div class="col-sm-9 slide_img float-left"><img src={footer_slide} alt=""/></div>
		<div class="col-sm-3 float-left">
		<div class="slide_txt">
		<h2>Title 2</h2>	
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
			
		<div class="button_text">
		<button className="prev-button" onClick={() => sliderRef.current.slickPrev()}><i class="fa fa-angle-left" aria-hidden="true"></i></button>
		<button className="next-button" onClick={() => sliderRef.current.slickNext()}><i class="fa fa-angle-right" aria-hidden="true"></i></button>
		</div>
		</div>
		</div>
	</div>	
	</Slider>

	
	</div>
  </div>
</div>


<div class="award_sec_ben">
	<div class="award_sec_ben_left_img">
	<div class="award_sec_ben_left_img_sub">
	  <div class="wrapper_sm">
		<h2>Achievement &amp; Awards </h2>
		  
		 <div class="col-sm-4 float-left">
		  	<div class="award_box">
		    <img src={award_a} alt=""/> </div>
		   <h3>Institutional Agency Award</h3>
		 </div>
		  
		 <div class="col-sm-4 float-left">
		  	<div class="award_box">
		    <img src={award_b} alt=""/> </div>
			 <h3>PPL Award</h3>
		 </div>
		  
		 <div class="col-sm-4 float-left">
		  	<div class="award_box">
		    <img src={award_c} alt=""/> </div>
			 <h3>Aspee Award</h3>
		 </div>
		  
	  </div>
	</div>
	</div>
</div>



	<TabContentHome_Network/>


<div className="faqSec">

<div className="section-header text-center">

	<h2 className="title">FAQs</h2>
</div>

<div className="faqs-section">
	<div className="container">
		<div className="row d-flex justify-content-center">
			<div className="col-sm-10">
				<FaqPage iconPosition={'end'} faqMax_item= {3} SlNO_need= {false}/>

				<div className="btn_sec"><Link to="/faq">View All</Link></div>

			</div>
		</div>
	</div>
</div>

</div>


<TabContentHome_Graph/>


{/* <FooterCus /> */}


		</>
	)
}

export default Home