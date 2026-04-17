import { Route, Routes } from 'react-router-dom'
import Layout from '../Components/Layout'
import App from '../App'
import About from "../Pages/About"
import Order from "../Pages/Order"
import Franchise from "../Pages/Franchise"
import Outlets from "../Pages/Outlets"
import Contact from '../Pages/Contact'
import Cart from '../Pages/Cart'

const Routing = () => {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        {/* Home page */}
        <Route index element={<App />} />

        <Route path="about" element={<About />} />
        <Route path="order" element={<Order />} />
        <Route path="franchise" element={<Franchise />} />
        <Route path="outlets" element={<Outlets />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />

      </Route>

    </Routes>
  )
}

export default Routing