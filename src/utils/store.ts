import create from 'zustand'
import shallow from 'zustand/shallow'

import { devtools, persist } from 'zustand/middleware'

const initialScore: Partial<ScoreState> = {
  totalTurns: 0,
  totalScore: 0
}
interface ScoreState {
  totalTurns: number
  totalScore: number
  pastTurn?: number
  singleTurnScore?: number
  increase: () => void
  tallyScore: (by: number) => void
  decrease?: (by: number) => void
  reset: () => void
}

export const useStore = create<ScoreState>()(
  devtools(
    persist((set) => ({
      totalTurns: 0,
      increase: () => set((state) => ({ totalTurns: state.totalTurns + 1 })),
      totalScore: 0,
      tallyScore: (by) =>
        set((state) => ({ totalScore: state.totalScore + by })),
      reset: () => set({ totalTurns: 0, totalScore: 0 })
    }))
  )
)

export interface TotalState {
  score?: number
  pool: number
  totalScore: number
  turn: number
  computeTurns: (pool: number) => void
  computeTotalScore?: () => void
}
export const useTurn = create<TotalState>()(
  devtools((set) => ({
    pool: 0,
    turn: 0,
    totalScore: 0,
    computeTurns: (pool) =>
      set((state) => ({
        turn: state.turn + 1,
        totalScore: state.totalScore + pool
      }))
  }))
)

//create a subscriber
const unsubscribe = useTurn.subscribe((newValue, oldValue) => {
  console.log('new Value ' + newValue.turn + ', old Value:' + oldValue.turn)
})
