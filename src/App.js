import "./App.css";
import { useState } from "react";
import Data from "./Data.js";
import img from "./arrow.png";
function App() {
  const [collapse, setCollapse] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedCountryName, setSelectedCountryName] = useState("");
  const [selectedCountryImg, setSelectedCountryImg] = useState("");
  const [Country, setCountry] = useState("");
  const [countryData, setCountryData] = useState(Data);

  const handleChange = (e) => {
    setCountryData(Data);

    setCountry(e.target.value);

    {
      Country.length < 1
        ? setCountryData(Data)
        : setCountryData((previousValue) =>
            previousValue.filter((e, i) =>
              e.name.toLowerCase().includes(Country.toLowerCase())
            )
          );
    }
  };
  const handleSelect = (e) => {
    setCollapse((previousValue) => !previousValue);
    setSelectedCountryName((previousValue) => e.target.attributes[1].value);
    setSelectedCountryCode((previousValue) => e.target.attributes[2].value);
    setSelectedCountryImg((previousValue) => e.target.attributes[3].value);
  };
  return (
    <div className="container">
      <h1>Bienvenue sur mydish</h1>
      <p>
        Saisissez votre numéro de téléphone portable, et nous vous enverrons un
        code par SMS.
      </p>
      <div class="dropdown">
        <div class="search-bar">
          <div id="select">
            {selectedCountryName.length > 0 ? (
              <p>
                <img src={selectedCountryImg} />
                {selectedCountryName}
                {selectedCountryCode}
              </p>
            ) : (
              <p>choisit votre pays</p>
            )}
            <img
              src={img}
              onClick={() => {
                setCollapse((e) => !e);
              }}
            />
            <ul class={collapse && "open"}>
              <input
                type="text"
                placeholder="taper le nom de votre pays"
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              {countryData.map((e, i) => (
                <li
                  class="options"
                  datatypename={e.name}
                  datatypecode={e.dialCode}
                  datatypeimg={e.flag}
                  key={i}
                  onClick={(e) => handleSelect(e)}
                >
                  <img src={e.flag} />
                  {e.name}({e.dialCode})
                </li>
              ))}
            </ul>
          </div>
          <input type="tel" placeholder="Numéro de téléphone portable" />
        </div>
      </div>
      <button>suivant</button>
    </div>
  );
}
export default App;
