import './Forum.css'

const articles = [
  {
    img: '/forum-1.png',
    title: 'Какие цветы под запретом: что нельзя дарить',
    desc: 'Осведомленность в сфере новых трендов цветочного дизайна и знакомство с работами...',
  },
  {
    img: '/forum-2.png',
    title: 'Как сохранить букет свежим: советы и рекомендации',
    desc: 'Осведомленность в сфере новых трендов цветочного дизайна и знакомство с работами...',
  },
  {
    img: '/forum-3.png',
    title: 'Цветочный этикет: как правильно дарить цветы',
    desc: 'Осведомленность в сфере новых трендов цветочного дизайна и знакомство с работами...',
  },
]

function Forum() {
  return (
    <section className="forum">
      <div className="forum-inner">
        <div className="forum-header">
          <h2 className="forum-title">Форум</h2>
          <a href="#" className="forum-all forum-all-desktop">Все новости »</a>
        </div>

        <div className="forum-grid">
          {articles.map((article) => (
            <div key={article.title} className="forum-card">
              <img src={article.img} alt={article.title} className="forum-img" />
              <div className="forum-overlay">
                <h3 className="forum-card-title">{article.title}</h3>
                <p className="forum-card-desc">{article.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="forum-dots" aria-hidden="true">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <a href="#" className="forum-all forum-all-mobile">Все новости</a>
      </div>
    </section>
  )
}

export default Forum
