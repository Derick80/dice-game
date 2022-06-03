import React, { useState } from 'react'
import Button from '../common/Button'
import DicePool from './DicePool'
import { v4 as uuidv4 } from 'uuid'
import d6_die from '../../assets/images/d6_die.jpeg'
import Die from '../common/Die'
let nextId = 0

export type InitialDiceInterface = Array<{
    id: string | null
    numberSides: number | null
}>

type initialDiceState = Array<{
    id: string
    numberSides: null
}>

const initialDice = [
    {
        id: '',
        numberSides: 6
    }
]

let initialDiceTypes = [

    { id: 1, name: 'D6', times: 1 },

    { id: 2, name: 'D8', times: 1 },

    { id: 3, name: 'D10', times: 1 },

    { id: 4, name: 'D12', times: 1 },
    { id: 5, name: 'D20', times: 1 }


]
export default function DiceContainer () {
    const [dicePools, setDicePools] = useState([])
    const [pool, setPool] = useState([])
    const [times, setTimes] = useState(0)
    const [diceSides, setDiceSides] = useState('')
    const [dSix, setDSix] = useState(0)
    const dieTypes = ['4', '6', '8', '10', '12', '20']
    const [dieSides, setDieSides] = useState(0)
    const [dice, setDice] = useState(initialDiceTypes)
    const diceNumbers = [1, 6, 8, 10, 12, 20]

    const dsix = 6
    const dten = 10

    function increaseRoll () {
        const dicePool =
            setTimes(t => t + 1)
    }

    const handleIncrease = (event: React.ChangeEvent<HTMLInputElement>) => {

        setDice(dice.map(die => {
            if (die.name === event.target.value) {
                return { ...die, times: die.times + 1 }
            } else {
                return die
            }
        })


        )
    }

    const handleDie = (e: any) => {
        setDiceSides(e.target.value)
        console.log(diceSides);

    }

    return (
        <>



            { dice.map((di: any) => (

                <Die key={ di.id } { ...di } onClick={ handleDie } />


            )) }


        </>




    )
}


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