import React from 'react'
import { Route } from 'react-router-dom'
import Cart from './cart/Cart'
import Home from './home/Home'
import Like from './like/Like'
import Login from './login/Login'
import Pdp from './pdp/Pdp'
import Signin from './signin/Signin'

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
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signin">
          <Signin />
        </Route>
    </div>
  )
}

export default index