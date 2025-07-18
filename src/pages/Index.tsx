import { useState } from "react";
import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import MainTitle from "@/components/MainTitle";
import GallerySection from "@/components/GallerySection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const handleOrderNowClick = () => setShowOrderForm(true);
  return (
    <div className="min-h-screen bg-gray-100">
      <Header onOrderNowClick={handleOrderNowClick} />
      <HeroCarousel />
      <MainTitle />
      <GallerySection onOrderNowClick={handleOrderNowClick} />
      <div id="products">
        <ProductsSection />
      </div>
      <Footer />
      {showOrderForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full relative pt-12 pb-8 px-4 z-50 overflow-y-auto max-h-[90vh]">
            <button
              className="absolute top-4 right-4 bg-blue-600 text-white border-2 border-white rounded-full w-12 h-12 flex items-center justify-center text-3xl font-bold shadow-lg z-50 focus:outline-none hover:bg-red-600 hover:text-white transition-colors"
              onClick={() => setShowOrderForm(false)}
              aria-label="Close"
            >
              ×
            </button>
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfN9z4X80WO-V_qXBl8mHs8ObkZMK4ko4o5xWkMXLK7znPC8w/viewform?embedded=true"
              width="100%"
              height="1557"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Order Now Form"
              className="w-full rounded"
              style={{ minHeight: 600 }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;