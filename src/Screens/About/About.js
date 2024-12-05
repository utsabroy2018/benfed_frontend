import React, { useState, useRef } from 'react'
import axios from 'axios';
import { useEffect } from 'react'
import DefaultPage from '../../Components/DefaultPage';
import { Button } from 'antd';
import RightSidebarGlobal from '../../Components/RightSidebarGlobal';
import FooterCus from '../../Components/FooterCus';
import table_1 from "../../Assets/images/table_1.jpg";
import table_2 from "../../Assets/images/table_2.jpg";
import table_3 from "../../Assets/images/table_3.jpg";

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

    <p>The West Bengal State Cooperative Marketing Federation Ltd, popularly known as <strong >BENFED</strong>, is a state-level apex cooperative marketing society which was organized and registered in 1958, tinder W.B.C.S. Acts, 1940, by the Department of Cooperation, Government of West Bengal.</p>
<p>  BENFED plays a pivotal role in supporting the agricultural sector through a variety of engineering works aimed at augmentation of productivity, efficiency, and sustainability. From engaging in a range of projects, BENFED contributes to the overall development of the agricultural landscape in the state of West Bengal. BENFED has worked as a Project Implementing Agency (PIA) under various schemes such as, National Cooperative Development Cooperation (NCDC), state Plan, Rural Infrastructure Development Fund (RIDF XV, XVII, XXI, XXII, XXIV), Warehouse Infrastructure Fund (WIF 22, 23, 24), Raskhtriya Krishi Vikash Yojna - Remunerative Approaches for Agriculture and Allied sector Rejuvenation (RRVY-RAAFTAR 2023-24, 2024-25) for execution of rural infrastructure projects aimed at establishing potential for income and employment generation in rural areas.</p>
<p>  BENFED is also entrusted with the execution of projects under State Plan such as, G+5 Institute Building at CCM Jhargram, G+6 Commercial Building at B.B.Ganguly Street, Kolkata and a Multipurpose Cold Storage of capacity 1000MT -a Flagship Project of our Honourable Chief Minister at Bhangar, South 24 Pgns.</p>
<p>  BENFED has the technical expertise for repair and renovation work of Rice Mill including execution of different ancillary works as installation of Weigh Bridge and construction of Flexible and Rigid pavement for smooth execution of work. </p>
    <h3>BENFED undertakes following activities:-</h3>

    <p><strong>(I) <u>Cold Storage Facilities:</u></strong><u></u> To address post-harvest challenges, BENFED has worked as Project Implementing Agency (PIA) to the Government of West Bengal for the construction and maintenance work (RIDF XVI) of cold preserve their
produce, reducing post-harvest losses and ensuring a steady supply of agricultural products throughout the year. </p>
<p><img src={`${table_1}`} alt=""/></p>
<p><strong>(II) <u>Warehouse Construction:</u></strong><u> </u>Efficient storage is crucial for maintaining the quality of agricultural commodities. BENFED undertakes engineering projects for different capacities (100MT to 10000MT) and preservation technologies along with other renovation works. This ensures that farmers have access to proper storage facilities, preventing spoilage and ensuring market readiness.</p>

<p><img src={`${table_2}`} alt=""/></p>

<p><strong >(III)</strong> <strong ><u>Installation of Oil Mill (Mustard):</u></strong> Establishment of a refinery plant encourages the cultivation of oilseed crops which includes mechanization and diversification of agricultural activities. Currently we've been entrusted for the installation of Oil Mill under RKVY.</p>
<p><strong >(IV) Seed Processing Unit: Establishment of Seed Processing Unit</strong> involves keeping and human/ animal consumption by keeping physical purity intact with an increased shelf life. BENFED has established such SPU's at different parts of West Bengal for different approved Cooperative Societies registered under Seed Certification Agencies of Govt. WB. BENFED is also responsible for e-procurement of tender, vetted drawing, estimation for different engineering projects under Cooperative sector on request from concerned cooperative societies and order from Directorate of Cooperation, Gov. WB against admissible fees. 
</p>

<p><img src={`${table_3}`} alt="" className='about_img_last'/></p>


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