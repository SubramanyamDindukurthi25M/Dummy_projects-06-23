import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { Cart } from './pages/cart/Cart'
import { Shop } from './pages/shop/Shop'

export const App = () => {
  return (
    <>
      <Router>
        <NavBar/>
        <Routes>
          <Route 
            path='/'
            element={<Shop/>}
          />
          <Route 
            path='/cart'
            element={<Cart/>}
          />
        </Routes>
      </Router>
    </>
  )
}