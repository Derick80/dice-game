import './index.css'

import DiceContainer from './components/DiceContainer'
import Footer from './components/Footer'
import Header from './components/Header'
import SideBar from './components/SideBar'

export default function App () {
  return (
    <div className='container'>
      <Header />

      <DiceContainer />
      <SideBar />
      <Footer />
    </div>
  )
}
