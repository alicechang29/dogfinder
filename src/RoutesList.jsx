import { React } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogsListDisplay from "./DogsListDisplay.jsx";
import DogFilter from "./DogFilter.jsx";

// import Dog2 from "./Dog2.jsx";


/** Routes for Dog Finder app
 *
 * Props: Dogs
 *
 * App -> Routes -> { Dogs, DogsListDisplay }
 */
function RoutesList({ dogs }) {

  return (
    <Routes>
      <Route path="/dogs" element={<DogsListDisplay dogs={dogs} />} />
      <Route path="/dogs/:name" element={<DogFilter dogs={dogs} />} />
      <Route path="*" element={<Navigate to="/dogs" />} />
    </Routes>
  );


}

export default RoutesList;