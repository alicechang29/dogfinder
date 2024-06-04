import './App.css';
// import Nav from "./Nav.jsx";
import RoutesList from './RoutesList';
import { React, useState } from "react";
import { BrowserRouter } from 'react-router-dom';

const API_URL = "http://localhost:5001/dogs";

function App() {
  const [dogs, setDogs] = useState({
    data: null,
    isLoading: true
  });

  async function getDogs() {
    const response = await fetch(API_URL);
    const data = await response.json();
    //data is array of dog objects
    setDogs({
      data,
      isLoading: false
    });
  }

  if (dogs.isLoading === true) {
    console.log("help1");
    getDogs();
    return (
      <div>
        <h1>Dog Finder</h1>
        Loading...
      </div>
    );
  } else {
    return (
      <div className="App">
        <BrowserRouter>
          {/* <Nav /> */}
          <RoutesList dogs={dogs.data} />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
