import { React, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogsListDisplay from "./DogList.jsx";
import Dog from "./Dog.jsx";
// import Dog2 from "./Dog2.jsx";

const API_URL = "http://localhost:5001/dogs";

/** Show list of dogs.
 *
 * Props: Dogs
 * State: the current list of dogs
 *
 * App -> Routes -> [ Dog, ... ]
 */
function RoutesList() {
  // console.log("DogsList");
  //when /dogs is reached, i want to call getDogs fn immediately

  const [dogs, setDogs] = useState(null);

  async function getDogs() {
    const response = await fetch(API_URL);
    const data = await response.json();
    //data is array of dog objects
    setDogs(data);

  }

  if (!dogs) {
    console.log("help1");
    getDogs();
    return <div>Loading...</div>;
  } else {
    console.log("help");
    return (
      <Routes>
        <Route path="/dogs" element={<DogsListDisplay dogs={dogs} />} />
        <Route path="/dogs/:name" element={<Dog dogs={dogs} />} />
        <Route path="*" element={<Navigate to="/dogs" />} />
      </Routes>
    );
  }

}

export default RoutesList;