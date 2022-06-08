import "./App.css";
import React, { SyntheticEvent, useState } from "react";

import DiceContainer from './components/Dice/DiceContainer';
import { multiDieRoll, oneDieRoll } from './utils/diceRolling';


interface Die {
  dSix?: number
  d10?: number
}

export default function App () {



  // console.log("1D10", oneDieRoll(10))

  // console.log("multi-roll", multiDieRoll(2, 10));



  return (

    <div className="container">

      <DiceContainer />
    </div>
  );
}
