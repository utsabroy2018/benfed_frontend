import React, { useState } from 'react';
import { AppstoreOutlined, DownCircleOutlined, DownOutlined, LeftOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import  { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function TopMenu() {

// type MenuItem = Required<MenuProps>['items'][number];
const navigate = useNavigate();

const items = [
  {
    label: 'Home',
    // label: <Link to={"/about"}>Home</Link>,
    key: '/',
    // icon: <MailOutlined />,
  },
  {
    label: 'About Us',
    key: '/about',
    icon: <DownCircleOutlined />,
    children: [
    { label: 'About Us', key: 'about' },
    { label: 'Who We Are', key: 'who-we-are' },
    { label: 'Our Mission', key: 'our-mission' },
    { label: 'Organizational Structure', key: 'organizational-structure' },
    { label: 'Members', key: 'members' },
    
    ]
  },
  {
    label: 'Department',
    key: 'department',
    icon: <DownCircleOutlined />,
    children: [
    { label: 'Department', key: 'department' },
    { label: 'Marketing Procurement', key: 'marketing-procurement' },
    { label: 'Fertilizer', key: 'fertilizer' },
    { label: 'Inputs', key: 'inputs' },
    { label: 'Engineering', key: 'engineering' },
    ]
  },
 
  // {
  //   label: 'Projects',
  //   key: '/projects',
  //   // icon: <LeftOutlined />,
  //   // children: [
  //   // { label: 'Important Announcement', key: '/importantannouncement' },  
  //   // { label: 'Option 1', key: 'setting_3:1' },
  //   // { label: 'Option 1', key: 'setting_3:2' }
  //   // ],
  // },
  {
    label: 'Tenders',
    key: '/tenders',
    // icon: <SettingOutlined />,
    // children: [
    // { label: 'Option 1', key: 'setting_5:1' },
    // { label: 'Option 1', key: 'setting_5:2' }
    // ],
  },
  {
    label: 'RTI',
    key: '/rti',
  },
  {
    label: 'Download Forms',
    key: '/downloads-forms',
  },
  // {
  //   label: 'FAQ ',
  //   key: '/faq',
  //   // icon: <SettingOutlined />,
  //   // children: [
  //   // { label: 'Option 1', key: 'setting_5:1' },
  //   // { label: 'Option 1', key: 'setting_5:2' }
  //   // ],
  // },
  {
    label: 'Important Links',
    key: '/importantLinks',
  },
  // {
  //   label: 'Notifications & Orders',
  //   key: '/notificationsorders',
  //   // icon: <SettingOutlined />,
  //   // children: [
  //   // { label: 'Option 1', key: 'setting_4:1' },
  //   // { label: 'Option 1', key: 'setting_4:2' }
  //   // ],
  // },
  // {
  //   label: 'Gallery',
  //   key: '/gallery',
  //   // icon: <SettingOutlined />,
  //   // children: [
  //   // { label: 'Option 1', key: 'setting_7:1' },
  //   // { label: 'Option 1', key: 'setting_7:2' }
  //   // ],
  // },
  {
    label: 'Contact Us',
    key: '/contact-us',
    // icon: <SettingOutlined />,
    // children: [
    // { label: 'Option 1', key: 'setting_8:1' },
    // { label: 'Option 1', key: 'setting_8:2' }
    // ],
  },
  // {
  //   label: 'Test',
  //   key: '/test',
  // },
  // {
  //   label: 'Map',
  //   key: '/map',
  // }
//   {
//     label: 'Navigation Two',
//     key: 'app',
//     icon: <AppstoreOutlined />,
//     // disabled: true,
//   },
//   {
//     label: 'Navigation Three - Submenu',
//     key: 'SubMenu',
//     icon: <SettingOutlined />,
//     children: [
//       {
//         type: 'group',
//         label: 'Item 1',
//         children: [
//           { label: 'Option 1', key: 'setting:1' },
//           { label: 'Option 2', key: 'setting:2' },
//         ],
//       },
//       {
//         type: 'group',
//         label: 'Item 2',
//         children: [
//           { label: 'Option 3', key: 'setting:3' },
//           { label: 'Option 4', key: 'setting:4' },
//         ],
//       },
//     ],
//   },
//   {
//     key: 'alipay',
//     label: (
//       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//         Navigation Four - Link
//       </a>
//     ),
//   },
];

const [current, setCurrent] = useState('home');
  
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
      navigate(e.key); // Navigate to the clicked route
    };

  return (
    
    <><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /></>
  )
}

export default TopMenu