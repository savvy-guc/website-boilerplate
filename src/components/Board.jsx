import React, { useRef, useState } from 'react'
import CanvasDraw from 'react-canvas-draw'
import Button from '@material-ui/core/Button'
import { CirclePicker } from 'react-color'
import BrushMenu from './BrushMenu'

const classes = {
  board: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh'
  },
  brushContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  brush: {
    marginRight: 4
  },
  leftFooter: {
    position: 'absolute',
    padding: 16,
    left: 0,
    bottom: 0,
    zIndex: 100
  },
  rightFooter: {
    position: 'absolute',
    padding: 16,
    right: 0,
    bottom: 0,
    zIndex: 100
  }
}

function Board({ onDraw, onClear }) {
  const canvasRef = useRef(null)

  const [brushRadius, setBrushRadius] = useState(10)
  const [lazyRadius, setLazyRadius] = useState(12)
  const [brushColor, setBrushColor] = useState('#444')

  const handleColorChange = (color) => setBrushColor(color.hex)
  const handleDrawing = () => !!onDraw && onDraw()
  const handleClear = () => {
    canvasRef.current.clear()
    if (!!onClear) onClear()
  }

  const handleBrushChange = (brushRadius, lazyRadius) => {
    setBrushRadius(brushRadius)
    setLazyRadius(lazyRadius)
  }

  return (
    <React.Fragment>
      <div style={classes.board}>
        <CanvasDraw
          ref={canvasRef}
          brushRadius={brushRadius}
          lazyRadius={lazyRadius}
          brushColor={brushColor}
          canvasWidth='100vw'
          canvasHeight='100vh'
          onChange={handleDrawing}
        />
      </div>
      <div style={classes.leftFooter}>
        <div style={classes.brushContainer}>
          <Button
            variant='outlined'
            style={classes.footerItem}
            onClick={handleClear}
          >
            Clear
          </Button>
          <BrushMenu
            brushRadius={brushRadius}
            lazyRadius={lazyRadius}
            onChange={handleBrushChange}
          />
        </div>
      </div>
      <div style={classes.rightFooter}>
        <CirclePicker
          color={brushColor}
          onChangeComplete={handleColorChange}
          colors={[
            '#444444',
            '#e91e63',
            '#ffeb3b',
            '#673ab7',
            '#3f51b5',
            '#4caf50'
          ]}
        />
      </div>
    </React.Fragment>
  )
}

export default Board
