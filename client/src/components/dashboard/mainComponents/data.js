import { useState } from 'react'
import { useSelector } from 'react-redux'

import PreLoader from './preLoader'
import RenderTable from './tables/renderTable'
import Switch from './tables/switch'
import GSheets from './tables/renderGSheets'

function Data() {
    let state = useSelector(({chartReducer}) => chartReducer)
    // let state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)
    const [sheet, setSheet] = useState(true);

    const renderContent = () => {
        if(state.loading) {
            return <div style={{display: 'flex', justifyContent: 'center', marginTop: '35vh'}}><PreLoader /></div>
        } else if(!state.loading && state.arrayOfChartObjects.length > 0){
            if(sheet) {
                return <GSheets state={state.arrayOfChartObjects}/>
            }
            return <RenderTable state={state.arrayOfChartObjects}/>
        } else {
            return <div style={{display: 'flex', justifyContent: 'center', marginTop: '35vh'}}><PreLoader /></div>
        }
    }

    return(
        <>
            <Switch state={state.arrayOfChartObjects} sheet={sheet} setSheet={setSheet}/>
            {renderContent()}
        </>
    );
}


export default Data