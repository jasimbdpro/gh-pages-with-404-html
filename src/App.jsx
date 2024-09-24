

import './App.css'
import NewComp from './NewComp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {


  return (
    <BrowserRouter basename='/gh-pages-with-404-html'>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/test' element={<NewComp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
