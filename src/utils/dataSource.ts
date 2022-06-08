import d4 from '../images/d4.png'
import d6 from '../images/d6.png'
import d8 from '../images/d8.png'
import d10 from '../images/d10.png'
import d12 from '../images/d12.png'
import d20 from '../images/d20.png'
import d100 from '../images/d100.png'

const initialDiceTypes = [
  { id: 0, sides: 4, diceImage: d4, times: 1, type: 'D4' },
  { id: 1, sides: 6, diceImage: d6, times: 1, type: 'D6' },
  { id: 2, sides: 8, diceImage: d8, times: 1, type: 'D8' },

  {
    id: 3,
    sides: 10,
    diceImage: d10,
    times: 1,
    type: 'D10'
  },

  {
    id: 4,
    sides: 12,
    diceImage: d12,
    times: 1,
    type: 'D12'
  },
  { id: 5, sides: 20, diceImage: d20, times: 1, type: 'D20' },
  { id: 6, sides: 100, diceImage: d100, times: 1, type: 'D100' }
]
export default initialDiceTypes
