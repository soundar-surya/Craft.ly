import DataTable from './dataTable'

function renderTable({state}) {
    let tableHead = state.length > 0 ? [state[0].xAxisLabelName, state[0].yAxisLabelName] : []
    let tableBody = state.map(({xAxisLabelNames, yAxisLabelData}) => ({xAxisLabelNames, yAxisLabelData}) )

    const renderContent = () => (
        // style={{margin: '0vh 0vw 0vh 0vw', width: '100%'}}
        tableBody.map((body, i) => (
            <div >
            <DataTable 
            tableHead={tableHead}
            tableBody={body}
            name={state[i].name}
            key={state[i].name}
            />
            </div>
        ))
    )
    
    return(
        <div>
            {renderContent()}
        </div>
    )

}

export default renderTable