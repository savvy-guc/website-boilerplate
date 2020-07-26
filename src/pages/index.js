import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import CanvasDraw from 'react-canvas-draw'
import Button from '@material-ui/core/Button'
import BrushIcon from '@material-ui/icons/Brush'
import { CirclePicker } from 'react-color'
import { useMediaQuery } from 'react-responsive'
import { Popover, Slider, Typography } from '@material-ui/core'

const classes = {
  buttonContainer: {
    position: 'absolute',
    left: '50%',
    right: '50%',
    zIndex: 100
  },
  button: {
    color: 'black'
  },
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
  },
  content: {
    position: 'absolute',
    top: '25%',
    left: 0,
    right: 0,
    margin: 'auto',
    zIndex: 1,
    color: 'black'
  },
  footer: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    zIndex: 100
  },
  footerContainer: {
    width: '100vw',
    padding: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  popover: {
    padding: 16
  }
}

function BrushMenu({ brushRadius, lazyRadius, onChange }) {
  const minValue = 1
  const maxValue = 50

  const handleBrushChange = (event, value) => onChange(value, lazyRadius)
  const handleLazyChange = (event, value) => onChange(brushRadius, value)

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

function Board({ onDraw, onClear }) {
  const canvasRef = useRef(null)

  const [brushRadius, setBrushRadius] = useState(10)
  const [lazyRadius, setLazyRadius] = useState(12)
  const [brushColor, setBrushColor] = useState('#444')

  const [brushEl, setBrushEl] = useState(null)

  const handleColorChange = (color) => setBrushColor(color.hex)
  const handleDrawing = () => !!onDraw && onDraw()
  const handleClear = () => {
    canvasRef.current.clear()
    if (!!onClear) onClear()
  }

  const handleBrushClick = (event) => setBrushEl(event.currentTarget)
  const handleBrushClose = () => setBrushEl(null)
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
      <div style={classes.footer}>
        <div style={classes.footerContainer}>
          <div style={classes.brushContainer}>
            <Button
              variant='outlined'
              style={classes.footerItem}
              onClick={handleClear}
            >
              Clear
            </Button>
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
              <BrushMenu
                brushRadius={brushRadius}
                lazyRadius={lazyRadius}
                onChange={handleBrushChange}
              />
            </Popover>
          </div>
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
      </div>
    </React.Fragment>
  )
}

const HeroContent = ({ siteConfig }) => (
  <div className='container'>
    <h1 className='hero__title'>{siteConfig.title}</h1>
    <p className='hero__subtitle'>{siteConfig.tagline}</p>
  </div>
)

const GetStartedButton = () => (
  <div className={styles.buttons}>
    <Link
      className={clsx(
        'button button--outline button--secondary button--lg',
        styles.getStarted
      )}
      to={useBaseUrl('docs/')}
    >
      <div style={classes.button}>Get Started</div>
    </Link>
  </div>
)

function BoardHero({ siteConfig }) {
  const [hideContent, setHideContent] = useState(false)

  const onClear = () => setHideContent(true)

  return (
    <React.Fragment>
      {!hideContent && (
        <React.Fragment>
          <div style={classes.content}>
            <HeroContent siteConfig={siteConfig} />
          </div>
          <div style={classes.buttonContainer}>
            <GetStartedButton />
          </div>
        </React.Fragment>
      )}
      <Board onClear={onClear} />
    </React.Fragment>
  )
}

function ColorHero({ siteConfig }) {
  return (
    <React.Fragment>
      <div style={classes.content}>
        <HeroContent siteConfig={siteConfig} />
        <GetStartedButton />
      </div>
    </React.Fragment>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  const notMobile = useMediaQuery({ query: '(min-width: 481px)' })

  const Hero = notMobile ? BoardHero : ColorHero

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <Hero siteConfig={siteConfig} />
      </header>
    </Layout>
  )
}

export default Home
