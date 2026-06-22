import './Forum.css'

const articles = [
  {
    img: '/forum-1.png',
    title: 'Какие цветы под запретом: что нельзя дарить',
    desc: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...',
  },
  {
    img: '/forum-2.png',
    title: 'Как сохранить букет свежим: советы и рекомендации',
    desc: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...',
  },
  {
    img: '/forum-3.png',
    title: 'Цветочный этикет — как правильно дарить цветы',
    desc: 'Осведомленности в сфере новых трендов цветочного дизайна и знакомства с работами...',
  },
]

function Forum() {
  return (
    <section className="forum">
      <div className="forum-inner">
        <div className="forum-header">
          <h2 className="forum-title">Форум</h2>
          <a href="#" className="forum-all">Все новости »</a>
        </div>

        <div className="forum-grid">
          {articles.map((a) => (
            <div key={a.title} className="forum-card">
              <img src={a.img} alt={a.title} className="forum-img" />
              <div className="forum-overlay">
                <h3 className="forum-card-title">{a.title}</h3>
                <p className="forum-card-desc">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Forum
