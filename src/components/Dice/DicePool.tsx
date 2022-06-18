import React, { useState } from 'react'


type DicePoolProps = {
    groupedDice: () => void
    pool: number
    resetAndSave?: () => {}

}
const DicePool = ({ pool, groupedDice, resetAndSave }: DicePoolProps) => {


    return (
        <div className='die-actions'>
            <button className='btn-die-action' onClick={ groupedDice }>Roll Your Dice</button>

            { pool > 0 &&
                <>       <h4>Total Roll: { '' }{ pool }</h4>
                </> }
            <button className='btn-die-actions' onClick={ resetAndSave }>Reset and Save</button>
        </div>

    )
}

export default DicePool