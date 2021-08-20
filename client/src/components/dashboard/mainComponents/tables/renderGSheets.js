export default function GSheets({state}) {
    
    const renderContent = () => (state.map(({gs: {url}}, i) => 
        (<div >
            <iframe src={url} title="gSheet" style={{height: '85vh', width: '100%', border: 'none', margin: i > 0 ? '5vh 0 0 0' : null}}/>
        </div>)))

    
    console.log(state)
    return(
        <div>
            {renderContent()}
        </div>
    )
}