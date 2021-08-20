import { withStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';


const CustomSwitch = withStyles({
  switchBase: {
    color: 'red',
    '&$checked': {
      color: 'red',
    },
    '&$checked + $track': {
      backgroundColor: 'red',
      color: 'blue'
    },
  },
  checked: {},
  track: {},
})(Switch);

export default function CustomizedSwitch({sheet, setSheet}) {

  const handleChange = () => setSheet(!sheet)

  return (
    <div>
      <FormControlLabel
        control={<CustomSwitch checked={sheet} onChange={handleChange}/>}
        label={sheet ? 'Google Sheet' : 'Default'}
      />
     </div>
  );
}
