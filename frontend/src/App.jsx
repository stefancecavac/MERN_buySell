import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from "./components/header/navbar"
import Home from './pages/home'
import ProductDetailPage from './pages/productDetailPage'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/:id' element={<ProductDetailPage></ProductDetailPage>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
