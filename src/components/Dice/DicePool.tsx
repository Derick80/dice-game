import React from 'react'

type DicePoolProps = {
    pool: [{
        id: number,
        type: string,
        times: number
        sides: number
    }]
}
export default function DicePool ({ pool }: DicePoolProps) {





    return (
        <div className="pool-container">DicePool</div>
    )
}
