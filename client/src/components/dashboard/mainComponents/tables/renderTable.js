import DataTable from './dataTable'

function renderTable({state}) {
    let tableHead = state.length > 0 ? [state[0].xAxisLabelName, state[0].yAxisLabelName] : []
    let tableBody = state.map(({xAxisLabelNames, yAxisLabelData}) => ({xAxisLabelNames, yAxisLabelData}) )

    const renderContent = () => (

        tableBody.map((body, i) => (
            <div style={{margin: '5vh 6vw 5vh 20vw', width: '50vw'}}>
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
            {/* {renderContent()} */}
        </div>
    )

}

export default renderTable