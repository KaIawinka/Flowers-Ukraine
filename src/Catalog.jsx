import { useState } from 'react'
import ProductCard from './ProductCard'
import './Catalog.css'

const categories = [
  {
    label: 'Букеты',
    sub: [
      'Букеты из роз',
      'Букеты из хризантем',
      'Букеты из альтромерии',
      'Букеты из гербер',
      'Букеты из ирисов',
      'Букеты из пионов',
      'Букеты из зустомы',
      'Букеты из тюльпонов',
      'Букеты из фрезий',
      'Букеты из орхидей',
      'Букеты из гортензии',
      'Букеты из лилий',
      'Букеты из гвоздик',
      'Дизайнерские букеты',
      'Бизнес букеты',
      'Букеты любимой',
      'Букеты для мужчины',
      'Весенние букеты',
      'Летние букеты',
    ],
  },
  { label: 'Розы', sub: [] },
  { label: 'Цветы в коробке', sub: [] },
  { label: 'Композиции', sub: [] },
  { label: 'Подарки', sub: [] },
  { label: 'Подарочные корзины', sub: [] },
  { label: 'Букеты невесты', sub: [] },
  { label: 'Вкусные букеты', sub: [] },
]

const allProducts = [
  { id: 1, img: '/product-1.png', title: '101 красная роза', price: 2280, oldPrice: 2800, discount: 19, isTop: true },
  { id: 2, img: '/product-2.png', title: '25 розовых пионовидных роз', price: 1680, oldPrice: 2800, discount: 10, isTop: true },
  { id: 3, img: '/product-3.png', title: 'Влюбленность', price: 1270, oldPrice: 2800, discount: 19, isTop: true },
  { id: 4, img: '/product-4.png', title: 'Корзина все для тебя', price: 2020, oldPrice: 2800, discount: 19, isTop: true },
  { id: 5, img: '/product-5.png', title: 'Мечтательница', price: 2280, isTop: true },
  { id: 6, img: '/product-6.png', title: 'Корзина солнечного настроения', price: 1680, isTop: true },
  { id: 7, img: '/product-7.png', title: 'Цветочная клумба', price: 1270, isTop: true },
  { id: 8, img: '/product-8.png', title: 'Корзина Дюймовочка', price: 2020, isTop: true },
  { id: 9, img: '/product-9.png', title: 'Торт Наполеон', price: 2280, isTop: true },
  { id: 10, img: '/product-10.png', title: 'Киевский торт', price: 1680, isTop: true },
  { id: 11, img: '/product-11.png', title: 'Торт Левантинер', price: 1270, isTop: true },
  { id: 12, img: '/product-12.png', title: 'Торт на день рождения', price: 2020, isTop: true },
  { id: 13, img: '/product-1.png', title: '51 красная роза', price: 1580, oldPrice: 1900, discount: 17, isTop: false },
  { id: 14, img: '/product-2.png', title: '15 розовых пионов', price: 980, isTop: false },
  { id: 15, img: '/product-3.png', title: 'Весенний букет', price: 870, isTop: false },
  { id: 16, img: '/product-4.png', title: 'Корзина радости', price: 1520, isTop: true },
  { id: 17, img: '/product-5.png', title: 'Нежность', price: 1100, isTop: false },
  { id: 18, img: '/product-6.png', title: 'Летний букет', price: 940, isTop: false },
]

const SORT_OPTIONS = ['Популярность', 'Цена: по возрастанию', 'Цена: по убыванию', 'Новинки']
const FILTERS_KEM = ['Маме', 'Папе', 'Подруге', 'Любимой', 'Ребенку']
const FILTERS_COLOR = ['Розовые букеты', 'Красные букеты', 'Белые букеты', 'Желтые букеты']
const FILTERS_POVOD = ['8 марта', 'День рождения', 'Свадьба', 'Юбилей']

const PER_PAGE = 6

function Catalog({ onNavigate }) {
  const [openCat, setOpenCat] = useState(0)
  const [activeSubCat, setActiveSubCat] = useState(null)
  const [sortOpen, setSortOpen] = useState(false)
  const [sort, setSort] = useState('Популярность')
  const [filterKem, setFilterKem] = useState(null)
  const [filterColor, setFilterColor] = useState(null)
  const [filterPovod, setFilterPovod] = useState(null)
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(allProducts.length / PER_PAGE)
  const visible = allProducts.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <div className="catalog">
      <div className="catalog-breadcrumb">
        <span className="catalog-breadcrumb-link" onClick={() => onNavigate('home')}>Главная</span>
        <span className="catalog-breadcrumb-sep">›</span>
        <span>Каталог</span>
      </div>

      <h1 className="catalog-heading">Каталог товаров</h1>

      <div className="catalog-layout">
        <aside className="catalog-sidebar">
          {categories.map((cat, i) => (
            <div key={cat.label} className="catalog-sidebar-group">
              <div
                className={`catalog-sidebar-cat${openCat === i ? ' catalog-sidebar-cat--open' : ''}`}
                onClick={() => setOpenCat(openCat === i ? -1 : i)}
              >
                <span>{cat.label}</span>
                {cat.sub.length > 0 && (
                  <span className="catalog-sidebar-arrow">{openCat === i ? '∧' : '∨'}</span>
                )}
              </div>
              {openCat === i && cat.sub.length > 0 && (
                <ul className="catalog-sidebar-sub">
                  {cat.sub.map((sub) => (
                    <li
                      key={sub}
                      className={`catalog-sidebar-sub-item${activeSubCat === sub ? ' active' : ''}`}
                      onClick={() => setActiveSubCat(activeSubCat === sub ? null : sub)}
                    >
                      {activeSubCat === sub && <span className="catalog-sidebar-check">✓</span>}
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </aside>

        <div className="catalog-main">
          <div className="catalog-filters">
            <div className="catalog-filter-group">
              {FILTERS_KEM.map((f) => (
                <button
                  key={f}
                  className={`catalog-filter-btn${filterKem === f ? ' active' : ''}`}
                  onClick={() => setFilterKem(filterKem === f ? null : f)}
                >
                  {f} <span className="catalog-filter-arrow">▼</span>
                </button>
              ))}
            </div>
            <div className="catalog-filter-group">
              {FILTERS_COLOR.map((f) => (
                <button
                  key={f}
                  className={`catalog-filter-btn${filterColor === f ? ' active' : ''}`}
                  onClick={() => setFilterColor(filterColor === f ? null : f)}
                >
                  {f} <span className="catalog-filter-arrow">▼</span>
                </button>
              ))}
            </div>
            <div className="catalog-filter-group">
              {FILTERS_POVOD.map((f) => (
                <button
                  key={f}
                  className={`catalog-filter-btn${filterPovod === f ? ' active' : ''}`}
                  onClick={() => setFilterPovod(filterPovod === f ? null : f)}
                >
                  {f} <span className="catalog-filter-arrow">▼</span>
                </button>
              ))}
            </div>
            <div className="catalog-sort">
              <span className="catalog-sort-label">Сортировка</span>
              <div className="catalog-sort-select" onClick={() => setSortOpen(!sortOpen)}>
                <span>{sort}</span>
                <span className="catalog-filter-arrow">▼</span>
                {sortOpen && (
                  <ul className="catalog-sort-dropdown">
                    {SORT_OPTIONS.map((o) => (
                      <li
                        key={o}
                        className={sort === o ? 'active' : ''}
                        onClick={(e) => { e.stopPropagation(); setSort(o); setSortOpen(false) }}
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          <div className="catalog-grid">
            {visible.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="catalog-load-more">
            <button className="catalog-load-btn">Еще 16 товаров</button>
          </div>

          <div className="catalog-pagination">
            <button
              className="catalog-page-arrow"
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
            >‹</button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                className={`catalog-page-btn${page === p ? ' active' : ''}`}
                onClick={() => setPage(p)}
              >
                {p}
              </button>
            ))}
            <button
              className="catalog-page-arrow"
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            >›</button>
          </div>

          <div className="catalog-seo">
            <p>Как же прекрасна роза! Несмотря на существование огромного количества сортов декоративных растений, «королева» остаётся самой востребованной и любимой. Букет из роз – однозначно беспроигрышный вариант. Он покорит сердце как девушки, так и зрелой женщины. Чем больше единиц в композиции, тем сильнее эмоции у представительниц прекрасного пола! Оформление и внешний вид растений играют тоже не последнюю роль. Всегда чувствуется, когда букет составлен профессионально и с любовью. Хотите сделать приятный сюрприз и вызвать бурный восторг? Смело заказывайте букет из роз с доставкой к порогу любимой женщины. Наши флористы с любовью создают композиции, вкладывая частичку своего сердца и души. Цветочный подарок от компании Flowers-Ukraine состоит только из свежесрезанных растений и излучает положительную энергетику.</p>
            <h2 className="catalog-seo-title">Когда уместно заказать букет роз?</h2>
            <p>то может быть лучше момента, когда курьер стоит у порога с огромным букетом роз? В такой ситуации на лице возникает удивление, а в голове – вопрос: «Кто не заказал на дом эти прекрасные цветы?». Радость – вот внутреннее состояние получателя. Заказать букет роз с доставкой на конкретный адрес в том или ином городе Украины можно с поводом или без.</p>
            <a href="#" className="catalog-seo-more">Читать далее</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Catalog
