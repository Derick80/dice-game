// @ts-nocheck

import React, { useState } from 'react'
import Button from '../common/Button'
import DicePool from './DicePool'
import { v4 as uuidv4 } from 'uuid'
import d6_die from '../../assets/images/d6_die.jpeg'
import Die from '../common/Die'
import { useImmer } from "use-immer";
import initialDiceTypes from '../../utils/dataSource'
import { isFunction } from 'util'
let nextId = 0

export type InitialDiceInterface = Array<{
    id: string | null
    numberSides: number | null
}>



export default function DiceContainer () {
    const [isReady, setIsReady] = useState(false)
    const [diceTypes, setDiceTypes] = useState(initialDiceTypes)
    const [pool, setPool] = useState([])
    const [dPool, setDPool] = useState([])



    function updateDie (dieId: number, modify: boolean) {
        setDiceTypes(diceTypes.map((dType => {
            if (dType.id === dieId && modify === true) {
                return {
                    ...dType,
                    times: dType.times + 1,
                }

            } if (dType.id === dieId && modify === false) {

                return {
                    ...dType,
                    times: Math.max(0, dType.times - 1)
                }
            } else {
                return dType
            }
        })))
    }



    function fixPool () {


    }
    const groupedDice = () => {
        var filtered = diceTypes.filter((dice) => {
            return dice.times > 0;
        });
        setIsReady(true)
        let diceBucket = []
        Array.from(filtered).map((el) => {
            return diceBucket.push([el.times, el.sides])


        })
        console.log("diceBucket", diceBucket);
        dicePools(diceBucket)


    }

    function d (x: number) {
        console.log(x);

        let roll = Math.floor(Math.random() * x) + 1
        return roll
    }
    function YdX (y: number, x: number) {
        let results = []
        do {
            results.push(d(x));

        } while (results.length < y)
        return results
    }
    function dicePools (obj) {
        let results = [];
        for (let [y, x] of Object.values(obj)) {
            console.log("x", x, "y", y);

            results[x] = YdX(y, x)

        }

        let firstRound = results.map((day, index) => {
            return day.reduce(function (a, b) {
                return a + b;
            });
        });

        const sum = firstRound.reduce((accumulator, value) => {
            return accumulator + value;
        }, 0);
        console.log(results);

        console.log(firstRound);
        console.log(sum);

        return results


    }
    return (
        <div className="dice-menu">
            { diceTypes.map((die => (
                <div className="dice-box" key={ die.id }>
                    <img className="dice-image" key={ die.id } src={ die.diceImage } alt={ die.name } />
                    <h4> { die.times }{ die.name }{ '' }</h4>
                    <div className="dice-button-box">

                        <button className="button-dice-type-selection" onClick={ () => {
                            updateDie(die.id, true)
                        } }>+</button>
                        <button className="button-dice-type-selection" onClick={ () => {
                            updateDie(die.id, false)
                        } }>-</button>
                    </div>

                </div>
            ))) }

            <button onClick={ groupedDice }>Generate pool</button>
            { isReady &&
                <DicePool pool={ pool } />
            }
        </div>




    )
}


// {
//     allDice.map((di: any) => (

//         <Die key={ di.id } { ...di } onClick={ updateDie(di.id) } />


//     ))
// }

// function DieInfo (dice: any) {
//     ; <ul>
//         { dice.map((die: any) => (
//             <li key={ die.id }>{ dice.name }</li>
//         )) }
//     </ul>
// }


// {
//     diceNumbers.map((dieNumber, index) => (
//         <Button
//             key={ index }
//             className={ dieNumber + `-sided-die` }
//             value={ dieNumber.toString() }
//             onClick={ handleClick }
//         >
//             { dieNumber + ` sided die` }
//         </Button>
//     ))
// }
// import React, { useState } from 'react'
// import Button from '../common/Button';

// export interface IDiceSelection {
//     onClick: any
// }
// export default function DiceSelection ({ onClick }: IDiceSelection) {
//     const dieTypes = [4, 6, 8, 10, 12, 20, 100]

//     return (
//         <div className="die-selection"> { dieTypes.map((dieType, index) => <Button key={ index } className={ dieType.toString() + `-sided-die` } value={ dieType } onClick={ onClick }>{ dieType + ` sided die` }</Button>) }</div>
//     )
// }
// const handleClick = () => { };

// export interface IDicePool {
//     type: number
// }
// export const DicePool = ({ type }: IDicePool) => {
//     const [dsix, setDsix] = useState(1)
//     console.log("dicePool Type:", type);

//     function rolldie () {
//         let result = Math.floor(Math.random() * (6 - 1 + 1) + 1);
//         setDsix(result);
//     }
//     return (

//         <div className="die-selection">
//             <button onClick={ rolldie } >
//                 <div className="die">
//                     <div className="first-face">
//                         <div className="dot"></div>
//                     </div>
//                 </div>
//             </button>
//         </div>)
// }
// const handleClick = (e: any) => {


//     setDieSides(Number(e.target.value))
//     console.log('die Value', Number(e.target.value))
//     dice.push({
//         id: uuidv4(),
//         numberSides: dieSides
//     })
//     console.log(dice)
// }