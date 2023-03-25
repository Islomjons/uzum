import React from 'react'
import HeaderMiddle from '../../components/headerMiddle/HeaderMiddle'
import Hero from '../../components/hero/Hero'
import ProductBottom from '../../components/productBottom/ProductBottom'
import ProductCards from '../../components/productCards/ProductCards'
import ProductMain from '../../components/productMain/ProductMain'
import Products from '../../components/products/Products'
import SeeAll from '../../components/seeAll/SeeAll'

const Home = () => {
  return (
    <div>
        <HeaderMiddle />
        <Hero />
        <ProductCards />
        <Products />
        <ProductBottom />
        <ProductMain />
        <SeeAll />
    </div>
  )
}

export default Home