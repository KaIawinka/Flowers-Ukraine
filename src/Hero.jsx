import './Hero.css'

const categories = [
  { title: 'Розы',              img: '/cat-roses.jpg' },
  { title: 'Подарки',           img: '/cat-gifts.jpg' },
  { title: 'Подарочные корзины',img: '/cat-baskets.jpg',  yellow: true },
  { title: 'Цветы в коробке',   img: '/cat-box.jpg' },
]

function Hero() {
  return (
    <section className="hero">

      {/* Left — main banner */}
      <div className="hero-banner">
        {/* ЗАМЕНИ: src="/hero-banner.jpg" — большое фото цветов */}
        <img src="/hero-banner.jpg" alt="баннер" className="hero-banner-img" />
        <div className="hero-banner-text">
          <p className="hero-title">
            Скидки <span className="hero-accent">-6%</span> на все<br />
            букеты <span className="hero-accent">по предзаказу</span><br />
            на 8 марта
          </p>
        </div>
      </div>

      {/* Right — 2x2 category grid */}
      <div className="hero-grid">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`hero-cat${cat.yellow ? ' hero-cat--yellow' : ''}`}
          >
            {/* ЗАМЕНИ: src={cat.img} — фото категории */}
            <img src={cat.img} alt={cat.title} className="hero-cat-img" />
            <span className="hero-cat-title">{cat.title}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Hero
