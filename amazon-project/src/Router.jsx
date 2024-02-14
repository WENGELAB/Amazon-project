import React from 'react'
import Landing from './pages/Landing/Landing'
import SignIn from './pages/Auth/Signup'
import Payment from'./pages/Payment/Payment'
import Orders from './pages/Orders/Orders'
import Cart from './pages/cart/Cart'

import{Router, Route, Routes} from 'react-router-dom'
import Results from './pages/Results/Results'
import ProductDetails from './pages/ProductDetail/ProductDetail'

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//      <Route>path="/" element={<Landing/>}</Route>
//       <Route>path="/auth"element={<SignUp/>}</Route>
//       <Route>path="/payment" element={<Payment/>}</Route>
//       <Route>path="Orders "element={<Orders/>}</Route>
//       <Route>path="/Cart"element={<Cart/>} </Route>
//       </Routes>
//     </Router>
//   )
// }

// export default Routing
function Routings() {
    return (
      <Router>
        <Routes>
          <Route path = "/" element = {<Landing/>}/>
          <Route path = "/auth" element ={<SignIn/>} />
          <Route path = "/payments" element ={<Payment/>} />
          <Route path = "/order" element = {<Orders/>}/>
          <Route path = "/category/:catagoryName" element = {<Results/>}/>
          <Route path='/products/:productId' element = {<ProductDetails/>}/>
          <Route path = "/Cart" element = {<Cart/>}/>
        </Routes>
      </Router>
    )
  }
  
  export default Routings