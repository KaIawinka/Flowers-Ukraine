import Header from './Header'
import Hero from './Hero'
import Benefits from './Benefits'
import ProductSection from './ProductSection'
import Forum from './Forum'
import Footer from './Footer'

const sales = [
  { id: 1, img: '/product-1.png', title: '101 красная роза', price: 2280, oldPrice: 2800, discount: 19, isTop: true },
  { id: 2, img: '/product-2.png', title: '25 розовых пионовидных роз', price: 1680, oldPrice: 2800, discount: 10, isTop: true },
  { id: 3, img: '/product-3.png', title: 'Влюбленность', price: 1270, oldPrice: 2800, discount: 19, isTop: true },
  { id: 4, img: '/product-4.png', title: 'Корзина все для тебя', price: 2020, oldPrice: 2800, discount: 19, isTop: true },
]

const seasonal = [
  { id: 5, img: '/product-5.png', title: 'Мечтательница', price: 2280, isTop: true },
  { id: 6, img: '/product-6.png', title: 'Корзина солнечного настроения', price: 1680, isTop: true },
  { id: 7, img: '/product-7.png', title: 'Цветочная клумба', price: 1270, isTop: true },
  { id: 8, img: '/product-8.png', title: 'Корзина Дюймовочка', price: 2020, isTop: true },
]

const gifts = [
  { id: 9, img: '/product-9.png', title: 'Торт Наполеон', price: 2280, isTop: true },
  { id: 10, img: '/product-10.png', title: 'Киевский торт', price: 1680, isTop: true },
  { id: 11, img: '/product-11.png', title: 'Торт Левантинер', price: 1270, isTop: true },
  { id: 12, img: '/product-12.png', title: 'Торт на день рождения', price: 2020, isTop: true },
]

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <ProductSection title="Акции" products={sales} />
        <ProductSection title="Сезонные" products={seasonal} />
        <ProductSection title="Подарки" products={gifts} />
        <Forum />
      </main>
      <Footer />
    </>
  )
}

export default App
