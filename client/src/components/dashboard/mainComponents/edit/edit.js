import Modify from "./modify"

function editChart({chartObject}) {

    const renderContent = () => {
        if(chartObject === null) {
            return <>Choose edit option in chartsettings</>
        } else if(chartObject !== null) {
            return <Modify chartObject={chartObject}/>
        } 
    }

    return (
        <div>
            {renderContent()}
        </div>
    )
}

export default editChart