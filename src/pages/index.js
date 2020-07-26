import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './styles.module.css'
import { useMediaQuery } from 'react-responsive'
import Hero from '../components/Hero'


function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  const notMobile = useMediaQuery({ query: '(min-width: 481px)' })

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <Hero siteConfig={siteConfig} type={notMobile ? 'board' : 'colorful'} />
      </header>
    </Layout>
  )
}

export default Home
