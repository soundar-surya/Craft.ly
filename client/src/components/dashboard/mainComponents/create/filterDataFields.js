import {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormLabel from '@material-ui/core/FormLabel';
import Button from "@material-ui/core/Button";

export default function FilterDataFields({data, setFilteredFields, setFilter}) {
    let schema = Object.keys(data[0]);
    let fieldObject = [];
    
    schema.forEach((field) => {
        fieldObject.push({ name: field, selected: true });
    });

    const classes = useStyles();
    const [state, setState] = useState(fieldObject);

    const handleChange = (event, i) => {
    let temp = [...state];
    temp[i].selected = event.target.checked;
    setState(temp);
    };

    const performFilterOperation = () => {
        let filteredFields = [];
        state.forEach(({name, selected}) => selected ? filteredFields.push(name) : null );
        setFilteredFields(filteredFields);
        setFilter(true);
    }

    const renderContent = () => {
        return (
            <FormGroup>
                {state.map(({ name, selected }, index) => {
                return (
                    <FormControlLabel
                    key={name}
                    control={
                        <Checkbox
                        checked={selected}
                        onChange={e => handleChange(e, index)}
                        name={name}
                        />
                    }
                    label={name}
                    />
                );
                })}
            </FormGroup>
            );
        };

  return (
      <div>
        <FormLabel  component="legend">Please choose your preferred fields</FormLabel>
        <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>{renderContent()}</FormGroup>
        </FormControl>
        </div>
      <Button onClick={performFilterOperation} style={{background: '#FF5757', color: 'white'}}>Filter</Button>
      </div>
  );
}

var useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));
