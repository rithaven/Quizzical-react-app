import { useState } from 'react'

import './index.css'

import Welcome from './components/Welcome'
import StartGame from './components/StartGame'

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false)
  const startNewGame = () => {
    setIsGameStarted(true)
  }
  const returnToWelcomePage = () => {
    setIsGameStarted(false)
  }

  return (
    <div className="relative flex items-center justify-center App">
      <img src="/yellow-blob.svg" className="absolute top-0 right-0" />
      <img src="/blue-blob.svg"className="absolute bottom-0 left-0" />
   
      <div className="z-10 flex main-content">
        { isGameStarted ? <StartGame returnToWelcomePage={returnToWelcomePage} /> : <Welcome startNewGame={startNewGame} />  }
      </div>
      
    </div>
  )
}

export default App
