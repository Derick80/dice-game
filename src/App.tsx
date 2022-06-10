import './input.css'

import DiceContainer from './components/DiceContainer'
import Home from './pages/Home'

export default function App () {
  return (
    <div className='flex flex-col justify-center content-center'>
      <DiceContainer />
      <Home />
    </div>
  )
}
