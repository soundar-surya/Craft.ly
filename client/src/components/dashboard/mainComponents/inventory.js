import { Fragment, useEffect } from 'react'
import Chart from './charts/chart';
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'

import { GET_CHARTS_REQUESTED } from '../../../redux/actions/index'

function Inventory({getCharts}) {

    // useEffect( () => {
    //     getCharts()
    // }, [])

    
    return(
        <div>
            <Chart />
        </div>
    );
}

// const mapDispatchToProps = dispatch => ({
//     getCharts: () => dispatch({type: GET_CHARTS_REQUESTED}),
//   })

export default Inventory;