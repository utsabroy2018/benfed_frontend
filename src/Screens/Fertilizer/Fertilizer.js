import React from "react";
import RightSidebarGlobal from "../../Components/RightSidebarGlobal";
import fertilizer_1 from "../../Assets/images/fertilizer_1.jpg";
import fertilizer_2 from "../../Assets/images/fertilizer_2.jpg";


function Fertilizer(){
    return (
        <>
    <div class="wrapper">
    <div class="inner_page_Sec">
    <div class="col-sm-8 float-left left_sec searchPageTop">

    <h1>Fertilizer</h1>

    <p>Fertilizer business is one of the most important businesses of West Bengal State Cooperative Marketing Federation Ltd (BENFED). </p>
  <p>This apex Marketing Society plays a pivotal role in supply and distribution of different chemical fertilizers at the lowest market price throughout the state of West Bengal through Primary Agricultural Marketing Co-operative Societies (PAMS) , Primary Agricultural Credit Co-operative Societies (PACS) and other Primary Co-operative Societies situated all over West Bengal. </p>
  <p>BENFED deals with the matter of procurement, supply and distribution of different chemical, S&D, Bio, Organic fertilizers & Insecticides/Pesticides with the support of the national giants like IFFCO, JCF, IPL, CIL, KRIBHCO, IFFCO-MC, MATIX, MOSAIC, CHAMBAL etc. , who are legally contracted to perform business with BENFED. </p>
  <p>BENFED is currently organizing an &lsquo;Integrated Nutrient Management Course&rsquo; with the help of Co-operation Department, Govt. of West Bengal, through FAI-ER (Fertilizer Association of India, Eastern Region) to educate and certify Co-operative Society Employees&rsquo; to obtain fertilizer license which is mandatory to perform fertilizer business in West Bengal. In FY 2024-25, the targeted societies for this Integrated Course are 520. Among these, 275 societies have already finalized their participation. The rest will be incorporated soon. The purpose of arranging this course is to educate societies about fertilizer business and also to obtain fertilizer license which will end up in increase of fertilizer sales through Co-operative Societies and result in supplying more fertilizers to the farmers at minimum price to maintain social justice. </p>

  <p><img src={`${fertilizer_1}`} alt="" /></p>

  <h2 style={{ textAlign: 'center'}}>FARMERS</h2>
  <p><img src={`${fertilizer_2}`} alt="" /></p>

    </div>
    <div class="col-sm-4 float-left">
    <RightSidebarGlobal/>
    </div>

    </div>
    </div>

    </>
    )
}

export default Fertilizer