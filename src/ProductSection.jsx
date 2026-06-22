import { useState } from 'react'
import ProductCard from './ProductCard'
import './ProductSection.css'

function ProductSection({ title, products }) {
  const [page, setPage] = useState(0)
  const perPage = 4
  const totalPages = Math.ceil(products.length / perPage)
  const visible = products.slice(page * perPage, page * perPage + perPage)

  return (
    <section className="psection">
      <div className="psection-header">
        <h2 className="psection-title">{title}</h2>
        <div className="psection-arrows">
          <button
            className="psection-arrow"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            aria-label="назад"
          >
            ‹
          </button>
          <button
            className="psection-arrow"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            aria-label="вперёд"
          >
            ›
          </button>
        </div>
      </div>

      <div className="psection-grid">
        {visible.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  )
}

export default ProductSection
