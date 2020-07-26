import React, { useState } from 'react'
import { Button, Slider, Typography, Popover } from '@material-ui/core'
import BrushIcon from '@material-ui/icons/Brush'

const classes = {
  brush: {
    marginRight: 4
  },
  brushButton: {
    marginLeft: 8
  },
  brushMenu: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: 300,
    height: 200,
    padding: 16
  },
  brushMenuItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
}

function Menu({ brushRadius, lazyRadius, onChange }) {
  const minValue = 1
  const maxValue = 50

  const handleBrushChange = (_, value) => onChange(value, lazyRadius)
  const handleLazyChange = (_, value) => onChange(brushRadius, value)

  return (
    <div style={classes.brushMenu}>
      <div style={classes.brushMenuItem}>
        <Typography>Brush Radius</Typography>
        <Slider
          min={minValue}
          max={maxValue}
          value={brushRadius}
          step={1}
          onChange={handleBrushChange}
          valueLabelDisplay='auto'
        />
      </div>
      <div style={classes.brushMenuItem}>
        <Typography>Lazy Radius</Typography>
        <Slider
          min={minValue}
          max={maxValue}
          value={lazyRadius}
          step={1}
          onChange={handleLazyChange}
          valueLabelDisplay='auto'
        />
      </div>
    </div>
  )
}

function BrushMenu({ brushRadius, lazyRadius, onChange }) {
  const [brushEl, setBrushEl] = useState(null)
  const handleBrushClick = (event) => setBrushEl(event.currentTarget)
  const handleBrushClose = () => setBrushEl(null)
  return (
    <React.Fragment>
      <Button
        aria-label='brush'
        variant='outlined'
        style={classes.brushButton}
        onClick={handleBrushClick}
      >
        <BrushIcon style={classes.brush} />
        Brush
      </Button>
      <Popover
        anchorEl={brushEl}
        open={!!brushEl}
        onClose={handleBrushClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      >
        <Menu
          brushRadius={brushRadius}
          lazyRadius={lazyRadius}
          onChange={onChange}
        />
      </Popover>
    </React.Fragment>
  )
}

export default BrushMenu
