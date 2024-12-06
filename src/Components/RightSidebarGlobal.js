import React from 'react'
import Tenders from './Tenders'
import { Link } from 'react-router-dom'

function RightSidebarGlobal() {

    const _tender_WordCount= 5;
    
  return (
    <>
    <div class="right_sec">
        {/* <QuickLinkRight/> */}
        {/* <SearchBox/> */}

        <div className="scroll_sec_ben">
			<h2>Notice / Tender</h2>
            <div className="listNotice">
		    <div className="noticeScrollMainSub">
			<marquee className="marq" height="370px" direction="up" scrollamount="4" loop="">
            {/* <Tenders wordCount={_tender_WordCount}/> */}
            <p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>59th Anniversary Celebration </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>59th Anniversary Celebration </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
    <p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>59th Anniversary Celebration </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>59th Anniversary Celebration </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
		<p>MIC, Cooperation, Govt. of West Bengal visited BENFED </p>
            </marquee>
            </div>
            </div>
			{/* <a href="#">View All</a> */}
      <Link to="/importantannouncement" className="view-all-link"> View All </Link>
		</div>
    </div>
    </>
  )
}

export default RightSidebarGlobal