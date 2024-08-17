import { useState } from 'react'
import './App.css'
import Gallery from './components/Gallery'
import * as Hooks from './components/Hooks'

function App() {

  return (
    <>
      <Gallery cards={Hooks.HooksComponents} />
    </>
  )
}

export default App
