import './Header.css'

function Header() {
  return (
    <header>

      <div className="header-top">
        <div className="header-top-inner">

          <div className="header-top-left">

            <div className="header-nav-item">
              <span className="label">Валюта</span>
              <span className="accent">Грн</span>
              <button className="arrow">▼</button>
            </div>

            <div className="header-nav-item">
              <span className="label">Язык</span>
              <span className="accent">RU</span>
              <button className="arrow">▼</button>
            </div>

            <div className="header-nav-item">
              <span className="label">Город</span>
              <span className="accent">Киев</span>
              <button className="arrow">▼</button>
            </div>

            <div className="header-nav-item">
              <div className="header-badge-wrap">
                <img src="/Love-logo.png" alt="закладки" className="header-icon" />
                <div className="badge">2</div>
              </div>
              <span className="label">Закладки</span>
            </div>

            <div className="header-nav-item">
              <img src="/Dostavka.png" alt="доставка" className="header-icon" />
              <span className="label">Доставка и оплата</span>
            </div>

            <div className="header-nav-item">
              <img src="/Call-logo.png" alt="контакты" className="header-icon" />
              <span className="label">Контакты</span>
            </div>

          </div>

          <div className="header-top-right">
            <img src="/People-logo.png" alt="вход" className="header-icon-sm" />
            <span className="label">Вход</span>
            <span className="header-nav-sep">|</span>
            <span className="label">Регистрация</span>
          </div>

        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div className="header-main">

          <div className="header-logo">
            <img src="/Flowers-Ukraine.png" alt="Flowers Ukraine" />
          </div>

          <div className="header-center">
            <div className="header-search-row">
              <div className="header-search-cat">
                <span className="arr">▼</span>
                <span>Поиск по категориям</span>
              </div>
              <div className="header-search-prod">
                <span>Поиск по товарам</span>
                <img src="/Lupa.png" alt="поиск" className="header-icon-sm" />
              </div>
            </div>

            <nav className="header-nav-row">
              <a className="active">Каталог товаров ▾</a>
              <a>Форум</a>
              <a>Отзывы</a>
              <a>Акции</a>
              <a>Новости</a>
              <a>Информация ▾</a>
            </nav>
          </div>

          <div className="header-right">
            <div className="header-social">
              <div className="header-social-icon">
                <img src="/social-vk.png" alt="vk" />
              </div>
              <div className="header-social-icon">
                <img src="/social-instagram.png" alt="instagram" />
              </div>
              <div className="header-social-icon">
                <img src="/social-telegram.png" alt="telegram" />
              </div>
              <div className="header-social-icon">
                <img src="/social-viber.png" alt="viber" />
              </div>
            </div>

            <span className="header-phone">+38 (067) 829 30 30</span>

            <div className="header-cart-row">
              <button className="header-cart-btn">
                <img src="/heart-icon.png" alt="избранное" />
                <span>0</span>
              </button>
              <button className="header-cart-btn">
                <img src="/cart-icon.png" alt="корзина" />
                <span>0</span>
              </button>
              <span className="header-cart-price">₴ 1 520</span>
            </div>
          </div>

        </div>
      </div>

    </header>
  )
}

export default Header
