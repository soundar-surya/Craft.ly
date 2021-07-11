import { useState } from "react";

import FilterDataFields from "./filterDataFields";
import ChartCustomization from "./chartCustomization";

function CreateChart({data}) {

    let [filter, setFilter] = useState(false);
    let [filteredFields, setFilteredFields] = useState([]);

    const renderContent = () => {
        if(!filter) {
            return <FilterDataFields data={data} setFilteredFields={setFilteredFields} setFilter={setFilter}/>
        } else {
            return <ChartCustomization dataFields={filteredFields} dataSet={data}/>
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
  