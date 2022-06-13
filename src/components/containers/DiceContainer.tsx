import React from 'react'
import DiceSelection from '../DiceSelection'
import SideBar from '../SideBar'

export default function DiceContainer () {
    return (
        <div className="dice-container"><DiceSelection />
            <SideBar />
        </div>
    )
}
