import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Ganso from '../../02-studio alfa/src/components/Ganso'
import Sarumano from '../../02-studio alfa/src/components/Sarumano'
import MagoPalco from '../../02-studio alfa/src/components/MagoPalco'
import CentroComando from '../../02-studio alfa/src/components/CentroComando'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div className="app">
    <h1> 03 estados e componentes</h1>

    <h2>#0030</h2> 
    <Ganso /> 
    <Sarumano />
    <MagoPalco />
    <CentroComando />
    <hr />

     </div>
  )
}

export default App
