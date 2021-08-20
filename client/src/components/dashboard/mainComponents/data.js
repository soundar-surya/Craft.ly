import { useState } from 'react'
import { useSelector } from 'react-redux'

import PreLoader from './preLoader'
import RenderTable from './tables/renderTable'
import Switch from './tables/switch'
import GSheets from './tables/renderGSheets'

function Data() {
    let state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)
    const [sheet, setSheet] = useState(true);

    const renderContent = () => {
        if(state.length == 0) {
            return <div style={{display: 'flex', justifyContent: 'center', marginTop: '35vh'}}><PreLoader /></div>
        } else {
            if(sheet) {
                return <GSheets state={state}/>
            }
            return <RenderTable state={state}/>
        }
    }

    return(
        <>
            <Switch state={state} sheet={sheet} setSheet={setSheet}/>
            {renderContent()}
        </>
    );
}


export default Data