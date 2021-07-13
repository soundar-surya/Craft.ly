import Button from '@material-ui/core/Button'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import KeyboardBackspaceRoundedIcon from '@material-ui/icons/KeyboardBackspaceRounded'

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      background: 'green'
    },
}))

const ColorButton = withStyles((theme) => ({
    root: {
      color: theme.palette.getContrastText('#FF5757'),
      backgroundColor: '#FF5757',
      "&:hover": {
        backgroundColor: '#ed6363'
      }
    }
  }))(Button)

function ResizeChart({chartObject, setPws}) {
    const classes = useStyles()

    const handleClick = () => setPws('')
    
    return (
        <div>
            <ColorButton
                variant='contained'
                className={classes.button}
                startIcon={<KeyboardBackspaceRoundedIcon />}
                onClick={handleClick}
            >
                Back
            </ColorButton>
            Resizable Component
        </div>
    )
}

export default ResizeChart
