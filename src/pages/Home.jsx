import { useEffect, useState } from "react";

import { getShuttleUser } from "../services/shuttleUsers";
import { useNavigate } from "react-router-dom";
import Clock from "../components/utils/HumanClock";

// import GoogleMapReact from 'google-map-react';
// import LoadScript from 'google-map-react'
// import Marker from 'google-map-react'

export const Home = ({token, setToken}) => {
  
const [shuttleUser, setShuttleUser] = useState({user: {}});
const [visitCount, setVisitCount] = useState(0);

let navigate = useNavigate();

useEffect(() => {
  const getAndSetShuttleUser = async () => {
    const shuttleUser = await getShuttleUser();
    setShuttleUser(shuttleUser);
  };

  getAndSetShuttleUser();
}, []);



// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: 36.1245, // Replace with the actual latitude of BNA, Nashville Airport
//   lng: -86.6784, // Replace with the actual longitude of BNA, Nashville Airport
// };


useEffect(() => {
  // Get the visit count from localStorage
  const storedCount = localStorage.getItem('visitCount');
  if (storedCount) {
    setVisitCount(parseInt(storedCount, 10));
  } else {
    setVisitCount(0);
  }

  // Increment the visit count
  setVisitCount((prevCount) => prevCount + 1);

  // Save the updated visit count to localStorage
  localStorage.setItem('visitCount', visitCount.toString());

  // Fetch and set tech user
}, []);

  return (
    <main className="flex flex-col items-center h-screen bg-gray-100">
  <div className="text-center my-8">
    <h1 className="text-5xl font-semibold mb-4 text-blue-500">Welcome to Shuttle Fun</h1>
{/* 
    <p className="text-gray-700 mb-4">Number of people visited: {visitCount}</p> */}
    

    <div className="user-info-container bg-gray-300 p-6 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-blue-800">
        {shuttleUser.user.first_name} {shuttleUser.user.last_name}
      </h2>

      <button className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={() => navigate(`/edit-user/${shuttleUser.user.id}`)}
      >Edit Profile</button>
    </div>

    
    <Clock />
  </div>

  {/* <LoadScript
        googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY"
      >
        <GoogleMapReact
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        > */}
          {/* Add a marker for BNA, Nashville Airport */}
          {/* <Marker position={center} />
        </GoogleMapReact> */}
      {/* </LoadScript> */}

</main>

  );
}