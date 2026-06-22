import './Benefits.css'

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-inner">

        <div className="benefits-card benefits-card--left">
					<img src="/benefits-card--left.png" alt="benefits-card--left" className='img-spas--left'/>
          <div className="benefits-text">
            <h3 className="benefits-title">Фото доставок{'\n'}наших букетов</h3>
            <p className="benefits-desc">Безупречное качество обслуживания и доставка в любую точку города</p>
          </div>
          <div className="benefits-icon-wrap">
            <img src="/Love.png" alt="" className="benefits-icon benefits-icon-left" />
          </div>
        </div>

        <div className="benefits-card benefits-card--center">
          <img src="/Film.png" alt="" className="benefits-icon benefits-icon--center" />
          <div className="benefits-text">
            <h3 className="benefits-title">Видео отчеты клиентов</h3>
            <p className="benefits-desc">Наши счастливые клиенты с букетами от Flowers-Ukraine</p>
          </div>
        </div>

        <div className="benefits-card benefits-card--right">
					<img src="benefits-card--right.png" alt="benefits-card--right" className='img-spas--right'/>
          <div className="benefits-icon-wrap">
            <img src="/Gift.png" alt="" className="benefits-icon" />
          </div>
          <div className="benefits-text benefits-text-right">
            <h3 className="benefits-title">Подарок{'\n'}каждому клиенту</h3>
            <p className="benefits-desc">К каждому заказу мы прилагаем комплимент от компании в виде маленького презента</p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Benefits