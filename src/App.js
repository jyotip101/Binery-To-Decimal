import React from 'react' 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
  
import './css/App.css' 
import './fontawesome-free-5.15.2-web/css/all.css'

import Home from './componentes/Home'

function App() {
  return (
  <>  

    <div className="app">
      <Home />
    </div>
    {/* <Router> 
      <div className="App">   
      <Switch>
        <Route path='/' exact component={Home} /> 
        {/* <Route path='/Project' exact component={Project} />
          {/* <Projects /> */}
          {/* </Route> */} 
        {/* <Route path='/' exact component={} /> 
      </Switch>  
      </div>
    </Router> */}
  </>
  )
}

export default App
