import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'

const options = ["resize", "edit", "embed"]

const ITEM_HEIGHT = 48

export default function LongMenu({ setPws, setChartObject, chartObject }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const classes = useStyles()
  const [openModal, setOpen] = useState(false)
  let embedWidgetName =  `<iframe src="${window.location.host === 'localhost:3000' ? 'http://localhost:3000' : 'https://craft-ly.netlify.app'}/embdwgt/${chartObject.name.replace(' ', '_')}" 
    scrolling="no"  style="height:50vh;width:50vw;border:none;overflow:hidden;margin: 10px;box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;"></iframe>`

  let [message, setMessage] = useState('')

  const handleOpenModal = () => {
    console.log(window.location.host)
    setOpen(true)
  };

  const handleCloseModal = () => {
    setOpen(false)
    setMessage('')
  };

  const handleClick = event => setAnchorEl(event.currentTarget)
  
  const handleClose = e => {
    if(e.target.innerText === options[0]) {
        setPws(options[0])
        setChartObject(chartObject)
    } else if(e.target.innerText === options[1]) {
        setPws(options[1])
        setChartObject(chartObject)
    } else if(e.target.innerText === options[2]) {
        // setPws(options[2])
        handleOpenModal()
        // setChartObject(chartObject)
    }
    setAnchorEl(null)
  }

  const clickToCopy = () => {
    navigator.clipboard.writeText(embedWidgetName)
    setMessage('Link Copied.')
  }

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
         anchorEl={anchorEl}
         keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch"
          }
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <div className={classes.paper}>
            <h4 id="transition-modal-title" className={classes.modalHeader}>Click to copy</h4>
            <p id="transition-modal-description" onClick={clickToCopy}>{embedWidgetName}</p>
            <p className={classes.copy}>{message ? message : null}</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}


// styles
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid rgba(99, 99, 99, 0.2) ',
    boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
    padding: theme.spacing(2, 4, 3),
    borderRadius: '5px'
  },
  copy: {
    color: '#FF5757',
    textAlign: 'center'
  },
  modalHeader: {
    textAlign: 'center'
  }
}));
