import { useSelector } from 'react-redux'

import PreLoader from './preLoader'
import RenderTable from './tables/renderTable'

function Data() {
    let state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)

    const renderContent = () => {
        if(state.length == 0) {
            return <div style={{display: 'flex', justifyContent: 'center', marginTop: '35vh'}}><PreLoader /></div>
        } else {
            return <RenderTable state={state}/>
        }
    }

    return(
        <>
            {renderContent()}
        </>
    );
}


export default Data