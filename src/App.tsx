import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/Button/Button'
import { ButtonSizes } from './enums/component-enums'
import Card from './components/Card/Card'

function App() {

  return (
    <>
      <h1>Test of font styles</h1>
      <div>
        <div>
          {/* <Card size='default'/> */}
          <Card size='small-wide'/>
        </div>
        </div>
    </>
  )
}

export default App
