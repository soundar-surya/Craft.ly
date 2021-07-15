import Modify from "./modify"

function editChart({chartObject, setPws}) {

    const renderContent = () => {
        if(chartObject === null) {
            return <div style={{margin: '30vh 0 0 0vw', fontSize: '1.1rem', textAlign: 'center'}}>Choose edit option in chart settings</div>
        } else if(chartObject !== null) {
            return <Modify chartObject={chartObject} setPws={setPws}/>
        } 
    }

    return (
        <div style={{width: '100%'}}>
            {renderContent()}
        </div>
    )
}

export default editChart