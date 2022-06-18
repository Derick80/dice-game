// @ts-nocheck

import { useState } from 'react'
import initialDiceTypes from '../utils/dataSource'


const initialScore = [{
    player: 'player1',
    total: 0
}]

export type initialDataInterface = Array<{
    turn: number | null
    total: number | null
}>

const initialData = [{
    turn: 0,
    total: 0
}]

type DiceSelectionProps = {
    props: {
        id: id
        diceImage: diceImage
        type: type
        times: times
        sides: sides
    }

    updateDie: (id: number, modify: boolean) => void
}
const DiceSelection = ({ props, updateDie }: DiceSelectionProps) => {

    const [data, setData] = useState(initialData)



    return (<>
        <div className='dice-selection'>

            <div className='dice-box' key={ props.id }>
                <div className='props-img-container'>
                    <img

                        key={ props.id }
                        src={ props.diceImage }
                        alt={ props.type }
                    />
                </div>
                <div className='text-center'>
                    { props.times }
                    { props.type }
                </div>
                <div className='die-actions'>
                    <button className='btn-icon'

                        onClick={ () => {
                            updateDie(props.id, true)
                        } }
                    >
                        <span className='material-icons-outlined'>add</span>
                    </button>
                    <button className='btn-icon'

                        onClick={ () => {
                            updateDie(props.id, false)
                        } }
                    >
                        <span className='material-icons-outlined'>remove</span>
                    </button>
                </div>
            </div>


        </div  >
        {/* <div className='dpool-container'>
            <DicePool pool={ pool } groupedDice={ groupedDice } resetAndSave={ resetAndSave } />
        </div> */}

    </>
    )
}




export default DiceSelection