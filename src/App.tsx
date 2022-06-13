import './index.css'

import DiceContainer from './components/containers/DiceContainer'
import Footer from './components/Footer'
import Header from './components/Header'

export default function App () {
  return (
    <div className='container'>
      <Header />

      <DiceContainer />

      <Footer />
    </div>
  )
}
