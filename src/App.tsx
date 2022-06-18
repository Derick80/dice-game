import './index.css'

import DiceContainer from './components/containers/DiceContainer'
import Footer from './components/Footer'
import Header from './components/Header'
import GameContainer from './components/game/GameContainer'
import { GameContext } from './utils/context/gameContext'

export default function App () {
  return (

    <div className='container'>
      <Header />

      <DiceContainer />
      <GameContainer />
      <Footer />
    </div>

  )
}
