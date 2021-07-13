import { useState } from "react";

import FilterDataFields from "./filterDataFields";
import ChartCustomization from "./chartCustomization";

function CreateChart({data, setChartObject}) {

    let [filter, setFilter] = useState(false);
    let [filteredFields, setFilteredFields] = useState([]);

    const renderContent = () => {
        if(!filter) {
            return <FilterDataFields data={data.dataSet} setFilteredFields={setFilteredFields} setFilter={setFilter}/>
        } else {
            return <ChartCustomization dataFields={filteredFields} data={data} setChartObject={setChartObject}/>
        }
    }

    return(
        <div>
            {renderContent()}
        </div>
    );
}

export default CreateChart;






// var useStyles = makeStyles((theme) => ({
//     root: {
//       "& .MuiTextField-root": {
//         margin: theme.spacing(10),
//       },
//       input: {
//         color: 'red'
//       }
//     }
//   }));
  