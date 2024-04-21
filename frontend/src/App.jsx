import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from "./components/header/navbar"
import Home from './pages/home'
import ProductDetailPage from './pages/productDetailPage'
import Register from './pages/register'
import Login from './pages/login'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/:id' element={<ProductDetailPage></ProductDetailPage>}></Route>

            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>



        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
