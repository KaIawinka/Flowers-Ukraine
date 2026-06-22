import './ProductCard.css'

function ProductCard({ img, title, price, oldPrice, discount, isTop, isFavorite }) {
  return (
    <div className="pcard">
      <div className="pcard-img-wrap">
        {/* ЗАМЕНИ: src={img} — фото товара */}
        <img src={img} alt={title} className="pcard-img" />

        {discount && (
          <span className="pcard-discount">-{discount}%</span>
        )}

        <button className="pcard-fav" aria-label="в избранное">
          {/* ЗАМЕНИ: иконка сердца */}
          <img src="/heart-icon.png" alt="favourite" />
        </button>

        {isTop && <span className="pcard-top">TOP</span>}
      </div>

      <div className="pcard-body">
        <div className="pcard-stars">★★★★★</div>
        <div className="pcard-info">
          <span className="pcard-title">{title}</span>
          <div className="pcard-prices">
            {oldPrice && <span className="pcard-old">{oldPrice} грн</span>}
            <span className="pcard-price">{price} грн</span>
          </div>
        </div>
      </div>

      <button className="pcard-btn">Заказать</button>
      <a className="pcard-quick" href="#">Быстрый заказ</a>
    </div>
  )
}

export default ProductCard
