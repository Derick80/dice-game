// @ts-nocheck

import React, { useState } from 'react'
import Button from '../common/Button'
import DicePool from './DicePool'
import { v4 as uuidv4 } from 'uuid'
import d6_die from '../../assets/images/d6_die.jpeg'
import Die from '../common/Die'
import { useImmer } from "use-immer";
import initialDiceTypes from '../../utils/dataSource'
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
    function getFilteredArray () {
        var result = Object.keys(diceTypes).map(function (key) {
            return diceTypes[key];
        });
        var filtered = result.filter((dice) => {
            return dice.times > 0;
        });
        console.log("filtered", JSON.stringify(filtered));
        setIsReady(true);
    }
    function groupBy (objectArray, property) {
        return objectArray.reduce(function (acc, obj) {
            var key = obj[property];
            if (!acc[key]) {
                acc[key] = [];
            }
            acc[key].push(obj);
            return acc;
        }, {});
    }

    function fixPool () {


    }
    const groupedDice = () => {

        setPool(groupBy(diceTypes, 'sides'))
        console.log("pool", pool);
        setIsReady(true)
        let diceBucket = []
        Array.from(diceTypes).map((el) => {
            return diceBucket.push([el.times, el.sides])


        })
        console.log("diceBucket", diceBucket);
        dicePools(diceBucket)


    }

    function d (y) {
        return Math.floor(Math.random() * y) + 1
    }
    function XdY (x, y) {
        let results = []
        do {
            results.push(d(y));

        } while (results.length < x)
        return results
    }
    function dicePools (obj) {
        let results = {};
        for (let [y, x] of Object.entries(obj)) {
            results[y] = XdY(x, y)
        }
        console.log("dicePool", results);

        return results

    }
    const groupedDice2 = () => {
        const allowedProps = ['times', 'sides']
        const allKeys = Object.keys(diceTypes)
        const result = allKeys.reduce((next, key) => {
            if (allowedProps.includes(key)) {
                return { ...next, [key]: diceTypes[key] };
            } else {
                return next
            }
        }, {})
        setDPool(result)
        setIsReady(true)
        dicePools(dPool)

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
            <button onClick={ groupedDice2 }>Generate pool2</button>
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