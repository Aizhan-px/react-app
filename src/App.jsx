import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const result = 'Super project'
  const array = [1, 2, 3]
  return (
<>
<div className='video-container'>
  <div className='video'>
    <img className='video-img' src = {reactLogo} alt='video image' />
    <p> Видео 1</p>
    <p> Jana JS</p>
    <div className='video-footer'>
      <p> Лайк: 0</p>
      <button>Лайк</button>
    </div>
    
   </div>
</div>
 </>
  )
}

export default App
