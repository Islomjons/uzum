import React from 'react'
import Darhol from '../../components/darhol/Darhol'
import HeaderMiddle from '../../components/headerMiddle/HeaderMiddle'
import Hero from '../../components/hero/Hero'
import HomeProductCards from '../../components/homeProductCards/HomeProductCards'
import Keshbek from '../../components/keshbek/Keshbek'
import ProductBottom from '../../components/productBottom/ProductBottom'
import ProductCards from '../../components/productCards/ProductCards'
import ProductMain from '../../components/productMain/ProductMain'
import Products from '../../components/products/Products'
import Rent from '../../components/rent/Rent'
import SeeAll from '../../components/seeAll/SeeAll'
import Uzauto from '../../components/uzauto/Uzauto'

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
        <Darhol />
        <HomeProductCards />
        <Rent />
        <Keshbek />
        <Uzauto />
    </div>
  )
}

export default Home