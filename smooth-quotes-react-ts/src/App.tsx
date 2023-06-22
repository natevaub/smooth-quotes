import { useState } from 'react'
import './App.css'
import {RandomQuote} from './components/RandomQuote'

function App() {

  return (
    <>
      <div className='Quote'>
        <h1>
          <RandomQuote />
        </h1>
      </div>
    </>
  )
}

export default App
