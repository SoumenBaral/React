
import './App.css'
import Device from './components/Device/Device';
import React from 'react';
function App() {
  

  return (
    <div className='card'>
     <Device name={'Samsung'} price={100000}></Device>
      <Device  name={'Sunny leone'} price={13000}></Device>
    </div>
  )
}

export default App
