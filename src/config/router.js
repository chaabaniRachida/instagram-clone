import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

import Connexion from '../components/Connexion'
import Post from '../components/Post'
import Header from '../components/Header'

const Routes = () => {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Connexion} />
        <Route path='/post' component={Post} />
        <Route path='/header' component={Header} />
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
