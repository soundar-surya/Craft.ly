import { CSVLink } from 'react-csv'
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded'

export default function ExportAsXlsx({csvData, fileName}) {
    return(
            <CSVLink data={csvData} filename={fileName} style={{color: '#4f4e56'}}>
                <GetAppRoundedIcon />
            </CSVLink>
    )
}