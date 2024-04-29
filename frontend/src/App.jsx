import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Navbar from "./components/header/navbar"
import Home from './pages/home'
import ProductDetailPage from './pages/productDetailPage'
import Register from './pages/register'
import Login from './pages/login'
import Cart from './pages/cart'
import { UseUserContext } from './hooks/useUserHook'

function App() {
  const {user} = UseUserContext()

  return (
    <div className='bg-gray-100 h-screen'>
      <BrowserRouter>
        <Navbar></Navbar>

        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/:id' element={<ProductDetailPage></ProductDetailPage>}></Route>

            <Route path='/register' element={user ? <Home></Home> : <Register></Register>}></Route>
            <Route path='/login' element={user ? <Home></Home> : <Login></Login>}></Route>

            <Route path='/cart' element={user ? <Cart></Cart> : <Login></Login>}></Route>




        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
