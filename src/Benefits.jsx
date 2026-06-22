import './Benefits.css'

const items = [
  {
    icon: '/icon-photo.png',   // иконка рамки/фото
    title: 'Фото доставок\nнаших букетов',
    desc: 'Безупречное качество обслуживания и доставка в любую точку города',
    align: 'left',
  },
  {
    icon: '/icon-video.png',   // иконка камеры
    title: 'Видео отчеты клиентов',
    desc: 'Наши счастливые клиенты с букетами от Flowers-Ukraine',
    align: 'center',
  },
  {
    icon: '/icon-gift.png',    // иконка подарка
    title: 'Подарок\nкаждому клиенту',
    desc: 'К каждому заказу мы прилагаем комплимент от компании в виде маленького презента',
    align: 'right',
  },
]

function Benefits() {
  return (
    <section className="benefits">
      <div className="benefits-inner">
        {items.map((item) => (
          <div key={item.title} className={`benefits-card benefits-card--${item.align}`}>
            {/* ЗАМЕНИ: src={item.icon} — svg/png иконка */}
            <img src={item.icon} alt="" className="benefits-icon" />
            <h3 className="benefits-title">{item.title}</h3>
            {item.desc && <p className="benefits-desc">{item.desc}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
