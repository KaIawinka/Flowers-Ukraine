import './Hero.css'

const categories = [
  { title: 'Розы',              img: '/cat-roses.png' },
  { title: 'Подарки',           img: '/cat-gifts.png' },
  { title: 'Подарочные корзины',img: '/cat-baskets.png',  yellow: true },
  { title: 'Цветы в коробке',   img: '/cat-box.png' },
]

function Hero() {
  return (
    <section className="hero">

      <div className="hero-banner">
        <img src="/hero-banner.jpg" alt="баннер" className="hero-banner-img" />
        <div className="hero-banner-text">
          <p className="hero-title">
            Скидки <span className="hero-accent">-6%</span> на все<br />
            букеты <span className="hero-accent">по предзаказу</span><br />
            на 8 марта
          </p>
        </div>
      </div>

      <div className="hero-grid">
        {categories.map((cat) => (
          <div
            key={cat.title}
            className={`hero-cat${cat.yellow ? ' hero-cat--yellow' : ''}`}
          >
            <img src={cat.img} alt={cat.title} className="hero-cat-img" />
            <span className="hero-cat-title">{cat.title}</span>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Hero
