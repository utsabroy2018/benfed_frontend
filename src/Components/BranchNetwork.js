import React, { useRef, useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from "../routes/config";
import branch_map from "../Assets/images/map.png";

function BranchNetwork(
    {
    wordCount
    }
) {

  const mapRef = useRef(null);

  const locations = [
    ['<strong>Laser Battle IPOH</strong><br/>IPOH Parade<br/>Jalan Sultan, Abdul Jalil<br/>Ipoh Perak<br/>PH: +60 5-255 9887', 4.595640, 101.090215],
    ['<strong>Laser Battle (JOHOR)</strong><br/>Johor Bahru<br/>PH: +60 7-207 0179', 1.492659, 103.741359],
    ['<strong>Test Battle (JOHOR)</strong><br/>Johor Bahru<br/>PH: +60 7-207 0179', 1.992659, 103.741359],
    ['<strong>Westbengal (JOHOR)</strong><br/>Johor Bahru<br/>PH: +60 7-207 0179', 22.5744, 88.3629]
  ];

  useEffect(() => {

    const GoogleAPI = 'AIzaSyAJXp7-ZjYXdmAkyhlO2Z9Ayd34OMp1FIA';
    const GoogleMapUrl = `https://maps.googleapis.com/maps/api/js?key=`+GoogleAPI+`&callback=initializeMap`;

    // setCounterData('https://maps.googleapis.com/maps/api/js?key=AIzaSyAJXp7-ZjYXdmAkyhlO2Z9Ayd34OMp1FIA&callback=initializeMap');

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = GoogleMapUrl;
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      // Assign the initialize function to the window object so the API can call it
      window.initializeMap = initialize;
    };

    loadScript();
  }, []);

  const initialize = () => {
    if (!window.google) return;  // Ensure Google Maps API is available



    const map = new window.google.maps.Map(mapRef.current, {
      mapTypeId: window.google.maps.MapTypeId.ROADMAP
    });

    const infowindow = new window.google.maps.InfoWindow();
    const bounds = new window.google.maps.LatLngBounds();

    locations.forEach((location) => {
      const marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(location[1], location[2]),
        map
      });

      bounds.extend(marker.position);

      window.google.maps.event.addListener(marker, 'click', () => {
        infowindow.setContent(location[0]);
        infowindow.open(map, marker);
      });
    });

    map.fitBounds(bounds);

    const listener = window.google.maps.event.addListener(map, 'idle', () => {
      map.setZoom(5);
      window.google.maps.event.removeListener(listener);
    });
  };


  return (
    <>

    <div id="map" ref={mapRef} style={{ width: '100%', height: '400px' }}></div>
    {/* {getBranchNetworkData?.map(item=> */}
    
    {/*<p> {limitWords(item?.doc_title, wordCount)} </p>*/}
    
    {/* )} */}
    </>
  )
}

export default BranchNetwork