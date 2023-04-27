import React from 'react'
import Active from '../../components/active/Active'
import CleanHome from '../../components/cleanHome/CleanHome'
import Darhol from '../../components/darhol/Darhol'
import HeaderMiddle from '../../components/headerMiddle/HeaderMiddle'
import Hero from '../../components/hero/Hero'
import HomeProductCards from '../../components/homeProductCards/HomeProductCards'
import Keshbek from '../../components/keshbek/Keshbek'
import Phones from '../../components/phones/Phones'
import ProductBottom from '../../components/productBottom/ProductBottom'
import ProductCards from '../../components/productCards/ProductCards'
import ProductMain from '../../components/productMain/ProductMain'
import Products from '../../components/products/Products'
import Rent from '../../components/rent/Rent'
import SeasonSpring from '../../components/seasonSpring/SeasonSpring'
import SeeAll from '../../components/seeAll/SeeAll'
import SportsWear from '../../components/sportsWear/SportsWear'
import Techno from '../../components/techno/Techno'
import Uzauto from '../../components/uzauto/Uzauto'
import Wears from '../../components/wears/Wears'

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
        <SportsWear />
        <Wears />
        <Active />
        <CleanHome />
        <SeasonSpring />
        <Techno />
        <Phones />
    </div>
  )
}

export default Home