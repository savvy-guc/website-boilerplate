import React, { useState } from 'react'
import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from '../pages/styles.module.css'
import Board from './Board'

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
  content: {
    position: 'absolute',
    top: '25%',
    left: 0,
    right: 0,
    margin: 'auto',
    zIndex: 1,
    color: 'black'
  }
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

function Hero({ siteConfig, type }) {
  switch (type) {
    case 'board':
      return <BoardHero siteConfig={siteConfig} />
    case 'colorful':
      return <ColorHero siteConfig={siteConfig} />
    default:
      return <ColorHero siteConfig={siteConfig} />
  }
}

export default Hero
