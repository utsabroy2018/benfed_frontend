import React, { useState } from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import DefaultPage from '../../Components/DefaultPage';
import RightSidebarGlobal from '../../Components/RightSidebarGlobal';
import FooterCus from '../../Components/FooterCus';

function ContactUs() {

    const [getPageData, setPageData] = useState([]);

  let pageDataStore = [];

  const pageContentData = {
      pageTitle: 'Contact Us',
      pageContent: getPageData?.body
    }
 

  const fetchdata = ()=>{
    return new Promise((resolve, reject) => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1',
    // {},
    // {
    //     headers: {
    //         Authorization: loginData.token,
    //     },
    // }
    ).then(res => {

    if(res.status == '200'){
    pageDataStore = res.data
    setPageData(pageDataStore)
    resolve(res.data);
    console.log(pageDataStore.title, 'ddddddd' , res);
    }
    }).then(() =>{
    pageDataStore = []
    }).catch(err => {
    console.log(err);
    reject(err); 
    });
    });
   }

  

   useEffect(()=>{
    fetchdata();
   },[])

  return (
    <>

<div class="wrapper">
    <div class="inner_page_Sec">
    <div class="col-sm-12 float-left left_sec searchPageTop contactPage">

    <h1>Contact Us</h1>
    <div className='row'>
    <div className='col-sm-8 float-left contact_left'>


<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.7373129775424!2d88.39055197603342!3d22.51403693511285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027152f335ae4b%3A0x469e1b748323d7cb!2stower%20block%203rd%20floor%2C%20KASBA%20NEW%20MARKET%2C%201582%2C%20Rajdanga%20Main%20Rd%2C%20Kasba%20New%20Market%2C%20Sector%20E%2C%20Kasba%2C%20Kolkata%2C%20West%20Bengal%20700107!5e0!3m2!1sen!2sin!4v1731305620576!5m2!1sen!2sin" 
width="100%"
height="420"
style={{ border: 0 }}
allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Maps Embed"></iframe>
    </div>

    <div className='col-sm-4 float-left'>
      <div className='address_1'>
      <h2>Address</h2>
      <p>Southend Conclave, 3rd Floor, 1582 Rajdanga Main Road, Kolkata - 700 107</p>
      </div>

      <div className='address_2'>
      <h2>Phone & Email</h2>
      <p>Email: info@benfed.org</p> 
      <p>Phone: +91 33 2441 4366/67 +91 33 2441-4372 </p>
      </div>

    </div>
    </div>

    </div>
    {/* <div class="col-sm-4 float-left">
    <RightSidebarGlobal/>
    </div> */}

    </div>
    </div>

    {/* <FooterCus/> */}

      {/* <DefaultPage pageTitle={pageContentData.pageTitle} pageContent = {pageContentData.pageContent} /> */}
    </>
  )
}

export default ContactUs