import './Footer.css'

const nav = [
  {
    heading: 'Информация',
    links: ['О нас', 'Доставка и оплата', 'Политика конфиденциальности'],
  },
  {
    heading: 'Служба поддержки',
    links: ['Карта сайта', 'Возврат товара', 'Связаться с нами', 'Для сотрудничества'],
  },
  {
    heading: 'Личный кабинет',
    links: ['Личный кабинет', 'История заказа', 'Закладки', 'Список новостей'],
  },
  {
    heading: 'Дополнительно',
    links: ['Подарочные', 'Сертификаты', 'Акции', 'Цветы в офис'],
  },
]

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-map">
        <div className="footer-map-card">
          <img src="/Flowers-Ukraine.png" alt="Flowers Ukraine" />
        </div>
      </div>

      <div className="footer-inner">
        <div className="footer-logo">
          <img src="/Flowers-Ukraine.png" alt="Flowers Ukraine" className="footer-logo-img" />
        </div>

        {nav.map((col) => (
          <div key={col.heading} className="footer-col">
            <h4 className="footer-col-heading">{col.heading}</h4>
            <ul className="footer-col-list">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="footer-link">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="footer-pay footer-pay-mobile">
          <img src="/pay-mastercard.png" alt="Mastercard" className="footer-pay-icon" />
          <img src="/pay-maestro.png" alt="Maestro" className="footer-pay-icon" />
          <img src="/pay-visa-electron.png" alt="Visa Electron" className="footer-pay-icon" />
          <img src="/pay-visa.png" alt="Visa" className="footer-pay-icon" />
          <img src="/pay-liqpay-logo.png" alt="LiqPay" className="footer-pay-icon pay-liqpay-logo" />
          <img src="/pay-liqpay.png" alt="LiqPay" className="footer-pay-icon pay-liqpay" />
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span className="footer-copy">Copyright © 2021. Все права защищены</span>
          <div className="footer-pay footer-pay-desktop">
            <span className="footer-pay-label">Способы оплаты:</span>
            <img src="/pay-liqpay-logo.png" alt="LiqPay" className="footer-pay-icon pay-liqpay-logo" />
            <img src="/pay-liqpay.png" alt="LiqPay" className="footer-pay-icon pay-liqpay" />
            <img src="/pay-mastercard.png" alt="Mastercard" className="footer-pay-icon" />
            <img src="/pay-maestro.png" alt="Maestro" className="footer-pay-icon" />
            <img src="/pay-visa-electron.png" alt="Visa Electron" className="footer-pay-icon" />
            <img src="/pay-visa.png" alt="Visa" className="footer-pay-icon" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
