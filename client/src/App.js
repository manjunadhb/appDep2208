import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  let [asianCountries, setAsianCountries] = useState([]);

  let getAsianCountriesList = async () => {
    let response = await axios.get("/asianCountries");

    setAsianCountries(response.data);
  };

  return (
    <div className="App">
      <h1>App Deployment thru Cyclic</h1>
      <button
        onClick={() => {
          getAsianCountriesList();
        }}
      >
        Get Asian Coutries List
      </button>
      {asianCountries.map((countryName) => {
        return <h1>{countryName}</h1>;
      })}
    </div>
  );
}

export default App;
