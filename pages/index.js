
import FeturedProducts from '../components/FeturedPorducts/FeturedProducts'
import Crouserlslider from '../components/HeroSlider/Crouserlslider'
import ShopCategories from '../components/ShopCategories/ShopCategories.container'


export default function Home() {
  return (
    <>
      <Crouserlslider />
      <ShopCategories />
      <FeturedProducts/>
    </>
  )
}
