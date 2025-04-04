import "./ProductList.css"

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "Product One",
      description: "High-quality product with premium features.",
      image: "https://placehold.co/300x200",
    },
    {
      id: 2,
      name: "Product Two",
      description: "Affordable solution for everyday needs.",
      image: "https://placehold.co/300x200",
    },
    {
      id: 3,
      name: "Product Three",
      description: "Advanced features for professional use.",
      image: "https://placehold.co/300x200",
    },
    {
      id: 4,
      name: "Product Four",
      description: "Innovative design for maximum efficiency.",
      image: "https://placehold.co/300x200",
    },
    {
      id: 5,
      name: "Product Five",
      description: "Eco-friendly option with sustainable materials.",
      image: "https://placehold.co/300x200",
    },
    {
      id: 6,
      name: "Product Six",
      description: "Budget-friendly with essential features.",
      image: "https://placehold.co/300x200",
    },
    {
      id: 7,
      name: "Product Seven",
      description: "Premium option with extended warranty.",
      image: "https://placehold.co/300x200",
    },
    {
      id: 8,
      name: "Product Eight",
      description: "Compact design for space-saving installation.",
      image: "https://placehold.co/300x200",
    },
  ]

  return (
    <section id="products" className="product-section">
      <div className="container">
        <div className="product-header">
          <h2 className="product-title">Our Products</h2>
          <p className="product-description">We offer a range of high-quality products to meet your needs.</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
              </div>
              <div className="product-content">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>
              </div>
              <div className="product-footer">
                <button className="button">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

