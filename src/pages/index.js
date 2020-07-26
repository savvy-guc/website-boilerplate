import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import CanvasDraw from 'react-canvas-draw'
import { Button } from '@material-ui/core'
import { CirclePicker } from 'react-color'
import { useMediaQuery } from 'react-responsive'

const classes = {
  content: {
    position: 'absolute',
    top: '25%',
    left: 0,
    right: 0,
    margin: 'auto',
    color: 'black'
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
  }
}

function Board({ onDraw, onClear }) {
  const [brushColor, setBrushColor] = useState('#444')
  const handleColorChange = (color) => setBrushColor(color.hex)

  const canvasRef = useRef(null)

  const handleDrawing = () => onDraw()
  const handleClear = () => {
    canvasRef.current.clear()
    onClear()
  }

  return (
    <React.Fragment>
      <div style={classes.board}>
        <CanvasDraw
          ref={canvasRef}
          brushColor={brushColor}
          canvasWidth='100vw'
          canvasHeight='100vh'
          onChange={handleDrawing}
        />
      </div>
      <div style={classes.footer}>
        <div style={classes.footerContainer}>
          <Button
            variant='outlined'
            style={classes.footerItem}
            onClick={handleClear}
          >
            Clear
          </Button>
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

function HeroContent({ siteConfig }) {
  return (
    <div className='container'>
      <h1 className='hero__title'>{siteConfig.title}</h1>
      <p className='hero__subtitle'>{siteConfig.tagline}</p>
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
    </div>
  )
}

function BoardHero({ children }) {
  const [contentZIndex, setContentZIndex] = useState(100)
  const [hideContent, setHideContent] = useState(false)

  const onDraw = () => setContentZIndex(1)
  const onClear = () => setHideContent(true)

  return (
    <React.Fragment>
      {!hideContent && (
        <div style={{ ...classes.content, zIndex: contentZIndex }}>
          {children}
        </div>
      )}
      <Board onDraw={onDraw} onClear={onClear} />
    </React.Fragment>
  )
}

function ColorHero({ children }) {
  return <React.Fragment>{children}</React.Fragment>
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  const notMobile = useMediaQuery({ query: '(min-width: 481px)' })

  const Hero = notMobile ? BoardHero : ColorHero

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <Hero>
          <HeroContent siteConfig={siteConfig} />
        </Hero>
      </header>
    </Layout>
  )
}

export default Home
