import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Homepage from './components/Homepage/Homepage'
import RouteSelection from './components/RouteSelection/RouteSelection'
import Login from './components/Login/LogOrsign'

import Reset from './components/Reset/ResetData'
import './App.css'
import ViewOpened from './components/ViewOpened/ViewOpened'
import AdminPage from './components/AdminPage/AdminPage'

function App () {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact render={props => <Homepage {...props} />} />

          <Route path="/Admin" exact render={props => <Login {...props} />} />
         <Route path="/Admin/home" render={props => <AdminPage {...props}/>} />
          <Route path="/book" exact render={props => <RouteSelection {...props} />} />

          <Route path="/Admin/reset" exact render={props => <Reset {...props}/>}/>
          <Route path="/Admin/viewOpen" exact render={props => <ViewOpened {...props}/>}/>

        </Switch>
      </Router>
    </div>

  )
}

export default App
