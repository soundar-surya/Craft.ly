import { useEffect } from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './home'
import { GET_CHARTS_REQUESTED } from '../redux/actions'

function Routes({getCharts}) {

  useEffect( () => {
      getCharts()
  })


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

const mapDispatchToProps = dispatch => ({
  getCharts: () => dispatch({type: GET_CHARTS_REQUESTED}),
})

export default connect(null, mapDispatchToProps)(Routes);