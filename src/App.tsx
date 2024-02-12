import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import { ButtonSizes } from './enums/component-enums'
import Card from './components/Card/Card'
import MainContainer from './Containers/MainContainer'

function App() {

  return (
    <>
      <div>
        <div>
          <MainContainer/>
        </div>
        </div>
    </>
  )
}

export default App
