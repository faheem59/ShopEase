
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Cart from './components/Pages/Cart'
import Navbar from './components/commonNavbar/Navbar'

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/cart' element={<Cart />} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App