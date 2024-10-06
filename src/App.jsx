import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GetUsers from './pages/GetUsers'
import AddUsers from './pages/AddUsers'
import UpdateUsers from './pages/UpdateUsers'

const App = () => {
  return (
    <div>

      <BrowserRouter>
        <Routes>
            <Route path="/" element={<GetUsers/>}></Route>
            <Route path='/add' element={<AddUsers/>}></Route>
            <Route path='/edit/:id' element={<UpdateUsers/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
