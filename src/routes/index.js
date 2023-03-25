import React from 'react'
import { Route } from 'react-router-dom'
import Cart from './cart/Cart'
import Home from './home/Home'
import Like from './like/Like'
import Pdp from './pdp/Pdp'

const index = () => {
  return (
    <div>
        <Route exact path="/">
           <Home />
        </Route>
        <Route path="/pdp/:id">
          <Pdp />
        </Route>
        <Route path="/cart">
            <Cart />
        </Route>
        <Route path="/like">
          <Like />
        </Route>
    </div>
  )
}

export default index