import Modify from "./modify"

function editChart({chartObject, setPws}) {

    const renderContent = () => {
        if(chartObject === null) {
            return <>Choose edit option in chartsettings</>
        } else if(chartObject !== null) {
            return <Modify chartObject={chartObject} setPws={setPws}/>
        } 
    }

    return (
        <div>
            {renderContent()}
        </div>
    )
}

export default editChart