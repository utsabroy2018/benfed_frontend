import React, { useEffect } from 'react';
// import "./Assets/css_elec/apps.css"
// import "./Assets/css_elec/bootstrap.css"
// import "./Assets/css_elec/font-awesome.css"
// import "./Assets/css_elec/res.css"

import "./Assets/css/apps.css"
import "./Assets/css/apps_inner.css"
import "./Assets/css/bootstrap.css"
import "./Assets/css/font-awesome.css"
import "./Assets/css/res.css"

// import "./Assets/js/bootstrap.min.js"

import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Screens/Homescreen/Home';
import About from './Screens/About/About';
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import NotificationsOrders from './Screens/Notifications Orders/NotificationsOrders';
import TendersPage from './Screens/TendersPage/TendersPage';
import DownloadPage from './Screens/DownloadPage/DownloadPage';
import GalleryPage from './Screens/GalleryPage/GalleryPage';
import ContactUs from './Screens/ContactUs/ContactUs';
import TestPage from './Screens/TestPage/TestPage';
import SearchPage from './Screens/SearchPage/SearchPage';
import Faq from './Screens/Faq/Faq';
import ImportantLinks from './Screens/ImportantLinks/ImportantLinks';
import Services from './Screens/Services/Services';
import Projects from './Screens/Projects/Projects';
import Circulars from './Screens/Circulars/Circulars';
import RTI from './Screens/RTI/RTI';
import Department from './Screens/Department/Department';
import PublicationReports from './Screens/Publication & Reports/PublicationReports';
import SocietyCorner from './Screens/Society\'s Corner/SocietyCorner';
import Events from './Screens/Events/Events';
import MarketingProcurement from './Screens/MarketingProcurement/MarketingProcurement';
import Fertilizer from './Screens/Fertilizer/Fertilizer';
import Inputs from './Screens/Inputs/Inputs';
import Engineering from './Screens/Engineering/Engineering';
import WhoWeAre from './Screens/WhoWeAre/WhoWeAre';
import OurMission from './Screens/OurMission/OurMission';
import OrganizationalStructure from './Screens/OrganizationalStructure/OrganizationalStructure';
import Members from './Screens/Members/Members';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"services",
        element:<Services/>
      },
      {
        path:"projects",
        element:<Projects/>
      },
      {
        path:"notificationsorders",
        element:<NotificationsOrders/>
      },
      {
        path:"tenders",
        element:<TendersPage/>
      },
      {
        path:"downloads-forms",
        element:<DownloadPage/>
      },
      {
        path:"gallery",
        element:<GalleryPage/>
      },
      {
        path:"contact-us",
        element:<ContactUs/>
      },
      {
        path:"search",
        element:<SearchPage/>
      },
      {
        path:"test",
        element:<TestPage/>
      },
      {
        path:"faq",
        element:<Faq/>
      },
      {
        path:"importantLinks",
        element:<ImportantLinks/>
      },
      {
        path:"circulars",
        element:<Circulars/>
      },
      {
        path:"rti",
        element:<RTI/>
      },
      {
        path:"department",
        element:<Department/>
      },
      {
        path:"publication-reports",
        element:<PublicationReports/>
      },
      {
        path:"society-corner",
        element:<SocietyCorner/>
      },
      {
        path:"events",
        element:<Events/>
      },
      {
        path:"marketing-procurement",
        element:<MarketingProcurement/>
      },
      {
        path:"fertilizer",
        element:<Fertilizer/>
      },
      {
        path:"inputs",
        element:<Inputs/>
      },
      {
        path:"engineering",
        element:<Engineering/>
      },
      {
        path:"who-we-are",
        element:<WhoWeAre/>
      },
      {
        path:"our-mission",
        element:<OurMission/>
      },
      {
        path:"organizational-structure",
        element:<OrganizationalStructure/>
      },
      {
        path:"members",
        element:<Members/>
      }

    ]
  },
  // {
  //   path: "bill/:id",
  //   element: <Bill />,
  // },
  // {
  //   path: "noresult/:code/:msg",
  //   element: <Noresult />,
  // },
  // {
  //   path: "*",
  //   element: <Notfound />,
  // },
]);

root.render(
  <React.StrictMode>
    {/* <PrimeReactProvider> */}
      <RouterProvider router={router} />
      {/* </PrimeReactProvider> */}
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
