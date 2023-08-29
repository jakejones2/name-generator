import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import List from "./components/List";
import NameInterface from "./components/NameInterface";

function App() {
  const [names, setNames] = useState([]);
  return (
    <div className="container">
      <Header />
      <NameInterface names={names} setNames={setNames} />
      <List names={names} />
    </div>
  );
}

// https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/datasets/babynamesenglandandwalestop100babynameshistoricaldata

export default App;
