import ProductCard from "./ProductCard";

const ProductGrid = () => {
  const products = [
    {
      image: "/src/assets/red-incubator.jpg",
      title: "JB Professional Incubator - Red Model (50 Eggs)",
      price: "12,999",
      originalPrice: "15,999",
      discount: "19",
      rating: 4.5,
      reviews: 324,
      features: [
        "Automatic egg turning",
        "Digital temperature control",
        "High hatching success rate",
        "Energy efficient operation"
      ]
    },
    {
      image: "/src/assets/wood-incubator.jpg",
      title: "JB Premium Wood Design Incubator (100 Eggs)",
      price: "18,999",
      originalPrice: "22,999",
      discount: "17",
      rating: 4.7,
      reviews: 189,
      features: [
        "Premium wood finish",
        "Advanced humidity control",
        "LED display panel",
        "Multiple egg capacity trays"
      ]
    },
    {
      image: "/src/assets/compact-incubator.jpg",
      title: "JB Compact Desktop Incubator (24 Eggs)",
      price: "7,999",
      originalPrice: "9,999",
      discount: "20",
      rating: 4.3,
      reviews: 567,
      features: [
        "Perfect for beginners",
        "Transparent viewing window",
        "Easy to clean design",
        "Compact desktop size"
      ]
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      title: "JB Industrial Grade Incubator (200 Eggs)",
      price: "35,999",
      originalPrice: "42,999",
      discount: "16",
      rating: 4.8,
      reviews: 78,
      features: [
        "Commercial grade build",
        "Dual temperature sensors",
        "Backup power support",
        "Professional warranty"
      ]
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      title: "JB Semi-Automatic Incubator (75 Eggs)",
      price: "14,999",
      originalPrice: "17,999",
      discount: "17",
      rating: 4.4,
      reviews: 298,
      features: [
        "Semi-automatic turning",
        "Precise temperature control",
        "Durable construction",
        "Easy maintenance"
      ]
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      title: "JB Smart WiFi Incubator (60 Eggs)",
      price: "21,999",
      originalPrice: "26,999",
      discount: "19",
      rating: 4.6,
      reviews: 145,
      features: [
        "WiFi connectivity",
        "Mobile app control",
        "Real-time monitoring",
        "Smart notifications"
      ]
    }
  ];

  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Our Best Selling Incubators
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our wide range of professional egg incubators designed for different needs and budgets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-primary font-medium hover:underline">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;