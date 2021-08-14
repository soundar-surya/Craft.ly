import DataTable from './dataTable'

function renderTable({state}) {
    let tableHead = state.length > 0 ? [state[0].xAxisLabelName, state[0].yAxisLabelName] : []
    let tableBody = state.map(({xAxisLabelNames, yAxisLabelData}) => ({xAxisLabelNames, yAxisLabelData}) )

    const renderContent = () => (
        tableBody.map((body, i) => (
            <div style={{margin: i!== 0 ? '2vh 0vw 0vh 0vw' : ''}}>
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