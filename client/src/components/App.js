import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './home'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='*'  component={() => <div>404 not found</div>} />
        </Switch>
      </Router>
    </div> 
  )
}

export default App;

//#FF5757