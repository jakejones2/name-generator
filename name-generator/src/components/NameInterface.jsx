import { useState } from "react";
import getNamesByDecade from "../data/names";
import surnames from "../data/surnames.js";

import soundFx1 from "../sound-fx/1.mp3";
import soundFx2 from "../sound-fx/2.mp3";
import soundFx3 from "../sound-fx/3.mp3";
import soundFx4 from "../sound-fx/4.mp3";

const sounds = [
  new Audio(soundFx1),
  new Audio(soundFx2),
  new Audio(soundFx3),
  new Audio(soundFx4),
];

function NameInterface({ names, setNames }) {
  const [decade, setDecade] = useState(0);
  const [sex, setSex] = useState("girls");
  const [useSound, setUseSound] = useState(false);
  const [useTwins, setUseTwins] = useState(false);

  function generateName() {
    if (useSound) {
      const randInt = Math.floor(Math.random() * 4);
      sounds[randInt].play();
      if (useTwins) {
        const randInt = Math.floor(Math.random() * 4);
        sounds[randInt].play();
      }
    }
    const allNames = getNamesByDecade(decade, sex);
    const firstName = allNames[Math.floor(Math.random() * 99)];
    const secondName = surnames[Math.floor(Math.random() * 99)];
    const firstCamelCase = firstName[0] + firstName.slice(1).toLowerCase();
    const secondCamelCase = secondName[0] + secondName.slice(1).toLowerCase();
    let name = firstCamelCase + " " + secondCamelCase;
    if (useTwins) {
      const twinName = allNames[Math.floor(Math.random() * 99)];
      const twinCamelCase = twinName[0] + twinName.slice(1).toLowerCase();
      name += ", " + twinCamelCase + " " + secondCamelCase;
    }
    setNames([name, ...names]);
  }

  function changeDecade(event) {
    const newDecade = +event.target.value;
    setDecade(newDecade);
  }

  function changeSex(event) {
    const sex = event.target.value;
    setSex(sex);
  }
  function clearNames() {
    setNames([]);
  }

  function changeSound() {
    setUseSound((bool) => !bool);
  }

  function changeTwins() {
    setUseTwins((bool) => !bool);
  }

  return (
    <article className="name-interface">
      <p>
        Welcome! This app generates historical names from the UK based on a
        given <i>decade</i> and <i>sex</i>. See the full data{" "}
        <a href="https://www.ons.gov.uk/peoplepopulationandcommunity/birthsdeathsandmarriages/livebirths/datasets/babynamesenglandandwalestop100babynameshistoricaldata">
          here
        </a>
        .
      </p>
      <div id="options">
        <div id="decade">
          <label htmlFor="decade">Decade</label>
          <select
            name="decade"
            id="decade"
            value={decade}
            onChange={changeDecade}
          >
            <option value="0">1900&#8217;s</option>
            <option value="1">1910&#8217;s</option>
            <option value="2">1920&#8217;s</option>
            <option value="3">1930&#8217;s</option>
            <option value="4">1940&#8217;s</option>
            <option value="5">1950&#8217;s</option>
            <option value="6">1960&#8217;s</option>
            <option value="7">1970&#8217;s</option>
            <option value="8">1980&#8217;s</option>
            <option value="9">1990&#8217;s</option>
          </select>
        </div>
        <div id="sex">
          <label htmlFor="sex">Sex</label>
          <select name="sex" id="sex" value={sex} onChange={changeSex}>
            <option value="girls">girl</option>
            <option value="boys">boy</option>
          </select>
        </div>
        <div id="sound-options">
          <label htmlFor="use-sound">SFX</label>
          <input
            type="checkbox"
            id="use-sound"
            value={useSound}
            onChange={changeSound}
          />
        </div>
        <div id="twin-options">
          <label htmlFor="twins">Twins</label>
          <input
            type="checkbox"
            id="twins"
            value={useTwins}
            onChange={changeTwins}
          />
        </div>
      </div>
      <button id="generate" onClick={generateName}>
        Generate Names
      </button>
      <button id="clear" onClick={clearNames}>
        Clear Names
      </button>
    </article>
  );
}

export default NameInterface;
