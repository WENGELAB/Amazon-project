import React from 'react'
import LayOut from '../../components/LayOut/LayOut'
import Carousel from '../../components/Carousel/Carousel'
import Category from '../../components/category/Category'
// import Product from '../../components/product/product'
function Landing() {
  return (
    <div>
     <Carousel/>
     <Category/>
     {/* <Product/> */}
     <LayOut/>
    </div>
  )
}

export default Landing
