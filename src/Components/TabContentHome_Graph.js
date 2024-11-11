// import React from 'react'
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Tabs } from "antd";
import { TabsProps } from 'antd';
import Procurement from './Procurement';
import BusinessFinancial from './BusinessFinancial';

function TabContentHome_Graph() {


    const onChange = (key) => {
      console.log(key);
    };

    const _tender_WordCount= 20;
    const _importantLinks_WordCount = 20;

    const items = [
      {
        key: '1',
        label: 'Procurement',
        // children: <marquee className="marq" height="350px" direction="up" scrollamount="4" loop=""><Procurement wordCount={_tender_WordCount}/></marquee>,
        children: <Procurement wordCount={_tender_WordCount}/>,
      },
      {
        key: '2',
        label: 'Business Financial',
        // children: <marquee className="marq" height="350px" direction="up" scrollamount="4" loop=""><BusinessFinancial wordCount={_importantLinks_WordCount}/></marquee>,
        children: <BusinessFinancial wordCount={_importantLinks_WordCount}/>,
      },
    ];
    
  return (
  <>
  
  <div className="wrapper_sm branch_sec">
  <Tabs className='tabContent' defaultActiveKey="1" items={items} onChange={onChange} />
  </div>

  </>
  )
}

export default TabContentHome_Graph