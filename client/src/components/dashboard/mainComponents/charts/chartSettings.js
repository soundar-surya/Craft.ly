import { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const options = ["resize", "edit", "embed"]

const ITEM_HEIGHT = 48

export default function LongMenu({ setPws, setChartObject, chartObject }) {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl);

  const handleClick = event => setAnchorEl(event.currentTarget)
  
  const handleClose = e => {
    if(e.target.innerText === options[0]) {
        setPws(options[0])
        setChartObject(chartObject)
    } else if(e.target.innerText === options[1]) {
        setPws(options[1])
        setChartObject(chartObject)
    } else if(e.target.innerText === options[2]) {
        setPws(options[2])
        setChartObject(chartObject)
    }
    setAnchorEl(null);
  };

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
    </div>
  );
}
