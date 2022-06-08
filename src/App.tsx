import './App.css'

import DiceContainer from './components/Dice/DiceContainer'
import Home from './pages/Home'

export default function App () {
  return (
    <div className='grid md:grid-cols-12 gap-5'>
      <DiceContainer />
      <Home />
    </div>
  )
}
