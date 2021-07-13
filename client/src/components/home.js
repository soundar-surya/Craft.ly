import { useEffect } from 'react'
import { connect, useSelector } from 'react-redux'

import Dashboard from './dashboard/dashboard'
import { UPDATE_STATE_REQUESTED } from '../redux/actions'

function Home() {

    // useEffect(() => updateState(state), [state])

    return(
      <div>
        <Dashboard/>
      </div>
    )
  }

// const mapStateToProps = ({chartReducer: {arrayOfChartObjects}}) => ({
//   state: arrayOfChartObjects
// })

// const mapDispatchToProps = dispatch => ({
//   updateState:  state =>  dispatch({type: UPDATE_STATE_REQUESTED, payload: state}),
// })

export default Home
  