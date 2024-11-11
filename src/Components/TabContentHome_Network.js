// import React from 'react'
import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import { Tabs } from "antd";
import { TabsProps } from 'antd';
import GodownNetwork from './GodownNetwork';
import BranchNetwork from './BranchNetwork';

function TabContentHome_Network() {


    const onChange = (key) => {
      console.log(key);
    };

    const _tender_WordCount= 20;
    const _importantLinks_WordCount = 20;

    const items = [
      {
        key: '1',
        label: 'Branch Network',
        children:<BranchNetwork/>,
      },
      {
        key: '2',
        label: 'Godown Network',
        children: <GodownNetwork/>,
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

export default TabContentHome_Network