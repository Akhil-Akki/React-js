function Products() {
  const products = [
    {
      icon: "💻",
      name: "Business Dashboard",
      description: "A powerful dashboard for managing business operations.",
    },
    {
      icon: "🛒",
      name: "E-Commerce Platform",
      description: "A complete online shopping solution for businesses.",
    },
    {
      icon: "📊",
      name: "Analytics System",
      description: "Track your business performance using useful analytics.",
    },
  ];

  return (
    <section className="page-section">
      <div className="section-heading">
        <span className="badge">Our Products</span>

        <h1>Digital Products</h1>

        <p>
          Explore some of the digital products developed by our team.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.name}>
            <div className="product-icon">{product.icon}</div>

            <h3>{product.name}</h3>

            <p>{product.description}</p>

            <button>Learn More</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;