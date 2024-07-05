import React, { useState } from 'react'
import Weather from './Pages/Weather'
import Days from './Pages/Days'
import './App.css'
import { bouncy } from 'ldrs';

const App = () => {
  const [city, setCity] = useState('Delhi');
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className='flex flex-col h-[100vh] lg:flex-row md:h-[100vh] lg:h-[100vh]' id='main-background'>
      <Weather setCity={setCity} setIsLoading={setIsLoading}/>
      <Days city={city} isLoading={isLoading}/>
    </div>
  )
}

export default App