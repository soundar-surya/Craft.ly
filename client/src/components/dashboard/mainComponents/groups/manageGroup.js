import { Fragment } from 'react'
import DisplayGroup from './displayGroup'
import CreateGroup from './createGroup'

function ManageGroupComponent({ primary, setPrimary, selectGroup}) {

    const renderContent = () => {
        if(primary) {
            return <DisplayGroup selectGroup={selectGroup}/>
        }
        return <CreateGroup setPrimary={setPrimary} />
    }

    return(
        <Fragment>
            { renderContent() }
        </Fragment>    
    )  

}

export default ManageGroupComponent