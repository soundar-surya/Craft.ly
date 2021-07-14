import Chart from './charts/chart';
import { useSelector } from 'react-redux'

import PreLoader from './preLoader'

function Inventory() {

    let state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)
    const renderContent = () => {
        if(state.length == 0) {
            return <div style={{display: 'flex', justifyContent: 'center', marginTop: '35vh'}}><PreLoader /></div>
        } else {
            return <Chart />
        }
    }
    return(
        <div>
            {renderContent()}
        </div>
    );
}

export default Inventory
