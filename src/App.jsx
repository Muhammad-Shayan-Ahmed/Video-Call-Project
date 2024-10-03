import React from 'react' 
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Vedio_Room from './Vedio_Room'
import ZegoCloude from './ZegoCloude'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<ZegoCloude />} />
        <Route path='/room/:id' element ={<Vedio_Room />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
