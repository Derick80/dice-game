// @ts-nocheck

import { useState } from 'react'
import initialDiceTypes from '../utils/dataSource'

export type InitialDiceInterface = Array<{
    id: string | null
    numberSides: number | null
}>

const DiceContainer = () => {
    const [isReady, setIsReady] = useState(false)
    const [diceTypes, setDiceTypes] = useState(initialDiceTypes)
    const [pool, setPool] = useState([])
    const [dPool, setDPool] = useState([])

    function updateDie (dieId: number, modify: boolean) {
        setDiceTypes(
            diceTypes.map((dType) => {
                if (dType.id === dieId && modify === true) {
                    return {
                        ...dType,
                        times: dType.times + 1
                    }
                }
                if (dType.id === dieId && modify === false) {
                    return {
                        ...dType,
                        times: Math.max(0, dType.times - 1)
                    }
                } else {
                    return dType
                }
            })
        )
    }

    const groupedDice = () => {
        var filtered = diceTypes.filter((dice) => {
            return dice.times > 0
        })
        setIsReady(true)
        let diceBucket = []
        Array.from(filtered).map((el) => {
            return diceBucket.push([el.times, el.sides])
        })
        console.log('diceBucket', diceBucket)
        dicePools(diceBucket)
    }

    function d (x: number) {
        console.log(x)

        let roll = Math.floor(Math.random() * x) + 1
        return roll
    }
    function YdX (y: number, x: number) {
        let results = []
        do {
            results.push(d(x))
        } while (results.length < y)
        return results
    }
    function dicePools (obj) {
        let results = []
        for (let [y, x] of Object.values(obj)) {
            console.log('x', x, 'y', y)

            results[x] = YdX(y, x)
        }

        let firstRound = results.map((day, index) => {
            return day.reduce(function (a, b) {
                return a + b
            })
        })

        const sum = firstRound.reduce((accumulator, value) => {
            return accumulator + value
        }, 0)
        console.log(results)

        console.log(firstRound)
        console.log(sum)
        setPool(sum)
        return results
    }
    return (<>
        <div className='dice-container'>
            { diceTypes.map((die) => (
                <div className='dice-box' key={ die.id }>
                    <div className='die-img-container'>
                        <img

                            key={ die.id }
                            src={ die.diceImage }
                            alt={ die.type }
                        />
                    </div>
                    <div className='text-center'>
                        { die.times }
                        { die.type }
                    </div>
                    <div className='die-actions'>
                        <button className='btn-icon'

                            onClick={ () => {
                                updateDie(die.id, true)
                            } }
                        >
                            <span className='material-icons-outlined'>add</span>
                        </button>
                        <button className='btn-icon'

                            onClick={ () => {
                                updateDie(die.id, false)
                            } }
                        >
                            <span className='material-icons-outlined'>remove</span>
                        </button>
                    </div>
                </div>
            ))
            }


        </div  >
        <div className='dpool-container'>
            <DicePool pool={ pool } groupedDice={ groupedDice } />
        </div>

    </>
    )
}


type DicePoolProps = {
    groupedDice: () => {}
    pool: number
}
const DicePool = ({ pool, groupedDice }: DicePoolProps) => {


    return (
        <div className='die-actions'>
            <button className='btn-die-action' onClick={ groupedDice }>Roll Your Dice</button>

            { pool > 0 &&
                <>       <h4>Total Roll: { '' }{ pool }</h4>
                    <button className='btn-die-actions' onClick={ resetAndSave }>Reset and Save</button></> }
        </div>
    )
}

const resetAndSave = () => {

    return (<></>)
}
export default DiceContainer