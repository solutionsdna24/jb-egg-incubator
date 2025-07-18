import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import redIncubator from "@/assets/red-incubator-original.png";
import woodIncubator from "@/assets/wood-incubator-original.png";
import interiorIncubator from "@/assets/interior-incubator.png";
import compactIncubator from "@/assets/compact-incubator-original.png";

const GallerySection = ({ onOrderNowClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const galleryItems = [
    { image: "/lovable-uploads/jb-logo.png", title: "JB Egg Incubator Brand" },
    { image: redIncubator, title: "Professional Incubator" },
    { image: woodIncubator, title: "Premium Wood Design" },
    { image: interiorIncubator, title: "Advanced Interior Setup" },
    { image: compactIncubator, title: "Compact Design" },
    { image: "/lovable-uploads/eggs-tray.jpg", title: "Eggs in Tray" },
    { image: "/lovable-uploads/parcel-box.jpg", title: "Parcel Ready for Delivery" },
    { image: "/lovable-uploads/chicks-hatched.jpg", title: "Chicks Hatched in Incubator" },
  ];

  const itemsPerView = 4;
  const maxIndex = Math.max(0, galleryItems.length - itemsPerView);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const scrollRef = useRef(null);
  const scrollBy = (amount) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="container mx-auto relative">
        {/* Buttons before gallery */}
        <div className="flex justify-center mb-6 space-x-4">
          <button onClick={onOrderNowClick} className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded transition-colors">Order Now</button>
          <a href="tel:+918767189437" className="bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded transition-colors">Call Now</a>
        </div>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Gallery</h2>
          <p className="text-gray-600">Explore our JB incubator setups and success stories</p>
        </div>
        <div className="relative">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
            onClick={() => scrollBy(-250)}
            aria-label="Scroll Left"
            style={{ left: '-24px' }}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          <div ref={scrollRef} className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {galleryItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center min-w-[220px] max-w-xs">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 sm:h-56 object-cover rounded-t-lg"
                  />
                  <div className="p-4 w-full text-center">
                    <h3 className="font-semibold text-gray-800 text-base">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100"
            onClick={() => scrollBy(250)}
            aria-label="Scroll Right"
            style={{ right: '-24px' }}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;