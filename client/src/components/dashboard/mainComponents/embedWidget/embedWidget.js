import { useSelector } from 'react-redux'


function EmbedWidget({name}) {
    
    let state = useSelector(({chartReducer: {arrayOfChartObjects}}) => arrayOfChartObjects)

}