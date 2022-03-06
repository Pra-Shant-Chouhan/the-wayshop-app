import Head from 'next/head'
import Crouserlslider from '../components/HeroSlider/Crouserlslider'
import ShopCategories from '../components/ShopCategories/ShopCategories'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Crouserlslider />
      <ShopCategories/>
    </>
  )
}
