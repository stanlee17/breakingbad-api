import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/ui/Header'
import Characters from './components/characters/Characters'
import MoreInfo from './components/more/MoreInfo'
import './App.css'

const App = () => {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route exact path="/" component={Characters} />
        <Route path="/quotes/:author" component={MoreInfo}></Route>
      </div>
    </Router>
  )
}

export default App
