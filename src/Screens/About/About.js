import React, { useState, useRef } from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import DefaultPage from '../../Components/DefaultPage';
import { Button } from 'antd';
import RightSidebarGlobal from '../../Components/RightSidebarGlobal';
import FooterCus from '../../Components/FooterCus';

function About() {

  const [getPageData, setPageData] = useState([]);
  
  

  let pageDataStore = [];

  const pageContentData = {
      pageTitle: 'About Us',
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
    <div class="col-sm-8 float-left left_sec searchPageTop">

    <h1>About Us</h1>

    <p>Coming Soon</p>
    
    {/* {loading ?(
      <Loader align = {'center'} gap = {'middle'} size = {'large'} />
    ):(
      <>
      <h1>{getPageTitle}</h1>
    <Table columns={columns} dataSource={getPageData} scroll={{
    x: 'max-content',
    }} />
      </>
    )} */}

    </div>
    <div class="col-sm-4 float-left">
    <RightSidebarGlobal/>
    </div>

    </div>
    </div>

      {/* <DefaultPage pageTitle={pageContentData.pageTitle} pageContent = {pageContentData.pageContent} /> */}
    </>
  )
}

export default About