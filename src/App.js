import {Route, Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Products from './components/Products'
import Cart from './components/Cart'
import Home from './components/Home'
import NotFound from './components/NotFound'

import './App.css'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <Route exact path="/login" component={LoginForm} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/products" component={Products} />
    <ProtectedRoute exact path="/cart" component={Cart} />
    <Route component={NotFound} />
  </Switch>
)

export default App
