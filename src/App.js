import React from 'react'
import Weather from './Pages/Weather'
import Days from './Pages/Days'
import './App.css'

const App = () => {
  return (
    <div className='flex flex-col h-[100vh] lg:flex-row lg:h-[100vh]' id='main-background'>
      <Weather/>
      <Days/>
    </div>
  )
}

export default App