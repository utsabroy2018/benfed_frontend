// import React from 'react'

// function TabContentHome_NetworkMap() {
//   return (
//     <div>TabContentHome_NetworkMap</div>
//   )
// }

// export default TabContentHome_NetworkMap


import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Tabs } from "antd";

const MAPBOX_TOKEN = "pk.eyJ1IjoidXRzYWIyMDIwIiwiYSI6ImNtMTdvajcyYTB4cXoya3I0YWp3bmE2aGcifQ.ed_uttIpJVLQhDWfj7cryw"; // Replace with your Mapbox token

const branchLocations = [
  { id: 1, name: "<strong>Branch 1 </strong><br/>Southend Conclave, 3rd Floor, 1582 Rajdanga Main Road, Kolkata - 700 107", coordinates: [88.3629, 22.5744] },
  { id: 2, name: "<strong>Branch 2 </strong><br/>Southend Conclave, 3rd Floor, 1582 Rajdanga Main Road, Kolkata - 700 107", coordinates: [87.1629, 21.3744] },
];

const godownLocations = [
  { id: 3, name: "<strong>Godown 1 </strong><br/>Southend Conclave, 3rd Floor, 1582 Rajdanga Main Road, Kolkata - 700 107", coordinates: [88.3629, 22.5744] },
  { id: 4, name: "<strong>Godown 2 </strong><br/>Southend Conclave, 3rd Floor, 1582 Rajdanga Main Road, Kolkata - 700 107", coordinates: [87.1629, 21.3744] },
];

function TabContentHome_NetworkMap() {
  const [selectedLocation, setSelectedLocation] = useState(null); // For popup handling
  const [activeTab, setActiveTab] = useState("branch"); // Track active tab

  const locations = activeTab === "branch" ? branchLocations : godownLocations;

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const handleTabChange = (key) => {
    setActiveTab(key);
    setSelectedLocation(null); // Clear selected location when tab changes
  };

  return (
    <div className="wrapper_sm branch_sec">
      <Tabs className='tabContent' defaultActiveKey="branch" onChange={handleTabChange}>
        <Tabs.TabPane tab="Branch Network" key="branch">
          <Map
            initialViewState={{
              longitude: 88.3629,
              latitude: 22.5744,
              zoom: 5,
            }}
            style={{ width: "100%", height: "400px" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            {locations.map((location) => (
              <Marker
                key={location.id}
                longitude={location.coordinates[0]}
                latitude={location.coordinates[1]}
                anchor="bottom"
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMarkerClick(location)}
                >
                  <i class="fa fa-map-marker mapIcon_cus" aria-hidden="true"></i>

                </div>
              </Marker>
            ))}
            {selectedLocation && (
              <Popup
                longitude={selectedLocation.coordinates[0]}
                latitude={selectedLocation.coordinates[1]}
                onClose={() => setSelectedLocation(null)}
                closeOnClick={false}
              >
                {/* <div>{selectedLocation.name}</div> */}
                <div
                  dangerouslySetInnerHTML={{ __html: selectedLocation.name }}
                />
              </Popup>
            )}
          </Map>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Godown Network" key="godown">
          <Map
            initialViewState={{
              longitude: 88.3629,
              latitude: 22.5744,
              zoom: 5,
            }}
            style={{ width: "100%", height: "400px" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={MAPBOX_TOKEN}
          >
            {locations.map((location) => (
              <Marker
                key={location.id}
                longitude={location.coordinates[0]}
                latitude={location.coordinates[1]}
                anchor="bottom"
              >
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => handleMarkerClick(location)}
                >
                
                <i class="fa fa-map-marker mapIcon_cus" aria-hidden="true"></i>

                </div>
              </Marker>
            ))}
            {selectedLocation && (
              <Popup
                longitude={selectedLocation.coordinates[0]}
                latitude={selectedLocation.coordinates[1]}
                onClose={() => setSelectedLocation(null)}
                closeOnClick={false}
              >
                {/* <div>{selectedLocation.name}</div> */}
                <div
                  dangerouslySetInnerHTML={{ __html: selectedLocation.name }}
                />
              </Popup>
            )}
          </Map>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default TabContentHome_NetworkMap;
