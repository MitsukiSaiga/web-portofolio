import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import HelloPage from './hello'
const Home: NextPage = () => {
  return (
    <HelloPage />
  )
}
  
export default Home
