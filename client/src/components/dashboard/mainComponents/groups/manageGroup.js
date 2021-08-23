import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import DisplayGroup from './displayGroup'
import CreateGroup from './createGroup'

import PreLoader from '../preLoader'

function ManageGroupComponent({ primary, setPrimary, selectGroup}) {

    let state = useSelector(({chartReducer}) => chartReducer)


    const renderContent = () => {
        if(state.loading) {
            return <div style={{display: 'flex', justifyContent: 'center', marginTop: '35vh'}}><PreLoader /></div>
        } else if(!state.loading && state.arrayOfChartObjects.length > 0) {
            if(primary) {
                return <DisplayGroup selectGroup={selectGroup}/>
            }
            return <CreateGroup setPrimary={setPrimary} />
        } else {
            return <div style={{display: 'flex', justifyContent: 'center', marginTop: '35vh'}}><PreLoader /></div>
        }
    }

    return(
        <Fragment>
            { renderContent() }
        </Fragment>    
    )  

}

export default ManageGroupComponent