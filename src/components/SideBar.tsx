import React, { useState } from 'react'
import shallow from 'zustand/shallow'
import { useTurn } from '../utils/store'


export const initialScores = [{
  id: 0, turn: 0, score: 0
}]

type SideBarProps = {
  pool?: number

}
export default function SideBar ({ pool }: SideBarProps) {
  const [data, setData] = useState(initialScores)
  const { turn, totalScore } = useTurn((state) => ({ turn: state.turn, totalScore: state.totalScore }), shallow)
  const computeTurns = useTurn((state) => state.computeTurns);





  return (
    <>

      <div className="sidebar" >SideBar
        <ul>

          <li>current Turn</li>
          <li>Previous Turn Score</li>

          <li></li>



        </ul>
        <h1> Current Turn:{ turn } </h1>
        <h1> Total Score{ totalScore } </h1>


        { pool && <button className='btn-icon' onClick={ () => computeTurns(pool) }>Next Turn </button> }
      </div>

    </>

  )
}
