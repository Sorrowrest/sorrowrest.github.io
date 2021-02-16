import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Profile from './profile'
import Home from './home'
const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/profile" component={Profile}></Route>
    </Switch>
  )
}

export default Routes