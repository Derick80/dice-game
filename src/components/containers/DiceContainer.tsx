import React, { useState } from 'react'
import initialDiceTypes from '../../utils/dataSource'
import DicePool from '../Dice/DicePool'
import DiceSelection from '../DiceSelection'
import SideBar from '../SideBar'

export default function DiceContainer () {
    const [diceTypes, setDiceTypes] = useState(initialDiceTypes)
    const [pool, setPool] = useState(0)


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
        let diceBucket: any = []
        Array.from(filtered).map((el) => {
            return diceBucket.push([el.times, el.sides])
        })
        console.log('diceBucket', diceBucket)
        dicePools(diceBucket)
    }

    function dieRoll (x: number) {
        console.log(x)

        let roll = Math.floor(Math.random() * x) + 1
        return roll
    }

    function YdieX (y: number, x: number): Array<number> {
        let results = []
        do {
            results.push(dieRoll(x))
        } while (results.length < y)
        return results
    }

    function dicePools (obj: any) {
        let results = []
        // @ts-ignore
        for (let [y, x] of Object.values(obj)) {
            console.log('x', x, 'y', y)

            results[x] = YdieX(y, x)
        }

        let reduceDieTypeRolls = results.map((day, index) => {
            return day.reduce(function (a, b) {
                return a + b
            })
        })

        const sum = reduceDieTypeRolls.reduce((accumulator, value) => {
            return accumulator + value
        }, 0)
        console.log("results", results)

        console.log(reduceDieTypeRolls)
        console.log("sum", sum)
        setPool(sum)
        return sum
    }

    return (
        <div className="dice-container">
            <SideBar pool={ pool } />
            { diceTypes.map((die) => (
                <DiceSelection key={ die.id } props={ die } updateDie={ updateDie } />)) }
            <DicePool pool={ pool } groupedDice={ groupedDice } />
        </div>
    )
}
