import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../routes/config';
import axios from 'axios';
import Item from 'antd/es/list/Item';
import { Link } from 'react-router-dom';


function Anouncement() {

	const [getAnouncement, setAnouncement] = useState([]);


	const fetchdata = ()=>{

		axios.post(`${BASE_URL}/wapi/getdoclist`,
	   {
		 auth_key:"xxxxx",
		 doc_type: 3
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
			setAnouncement(res?.data?.msg);
			   console.log('uuuuuuuuuusdsdsduuuuuuuuuuuu', res?.data?.msg);
	  
			   // pageDataCheck = res.data.status;
		   } else {
			//  setPageData([0])
			setAnouncement([])
			 // pageDataCheck = res.data.status;
		   }
	  
		   }
	  
	   }) 
	  
	  }

	  
	useEffect(()=>{
		fetchdata()
	},[])

	function limitWords(content, wordLimit) {
		const words = content?.split(' ');
		if (words.length > wordLimit) {
		return words.slice(0, wordLimit).join(' ') + '...';
		}
		return content;
		}

  return (
    <>
    <div className="anouncement__">
		<ul>
		<marquee className="marq" height="200px" direction="up" scrollamount="4" loop="">
			{getAnouncement.map(item =>
				<li>
				{/* {limitWords(item?.doc_title, 5)} {getAnouncement.length > 1 ? '\u00A0|\u00A0' :  '' } */}
				{limitWords(item?.doc_title, 5)}
				</li>
			)}
		</marquee>
		</ul>
	</div>
    </>
  )
}

export default Anouncement