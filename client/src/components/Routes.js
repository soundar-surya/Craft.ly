import { useEffect } from 'react'
import { connect } from 'react-redux'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './home'
import EmbedWidget from './dashboard/mainComponents/embedWidget/embedWidget'

import { 
  GET_CHARTS_REQUESTED,
  GET_GROUPS_REQUESTED
} from '../redux/actions'

function Routes({getCharts, getGroups}) {

  useEffect( () => {
      getCharts()
      getGroups()
  })

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/embdwgt/:chartName' component={EmbedWidget} />
          <Route path='*'  component={() => <div>404 not found</div>} />
        </Switch>
      </Router>
    </div> 
  )
}

const mapDispatchToProps = dispatch => ({
  getCharts: () => dispatch({type: GET_CHARTS_REQUESTED}),
  getGroups: () => dispatch({type: GET_GROUPS_REQUESTED})
})

export default connect(null, mapDispatchToProps)(Routes);