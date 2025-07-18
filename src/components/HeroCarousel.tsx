import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import redIncubator from "@/assets/red-incubator-original.png";
import woodIncubator from "@/assets/wood-incubator-original.png";
import interiorIncubator from "@/assets/interior-incubator.png";
import compactIncubator from "@/assets/compact-incubator-original.png";

const slides = [
  { image: redIncubator, title: "Professional Incubator" },
  { image: woodIncubator, title: "Premium Wood Design" },
  { image: interiorIncubator, title: "Advanced Interior Setup" },
  { image: compactIncubator, title: "Compact Design" },
  { image: "/lovable-uploads/chick-background.jpg", title: "Chick Hatching" },
  { image: "/lovable-uploads/dm.png", title: "JB Egg Incubator Branding" },
  { image: "/lovable-uploads/jb-logo.png", title: "JB Egg Incubator Brand Logo" },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-80 md:h-96 rounded-lg overflow-hidden mx-4 md:mx-8 mt-8">
      <div className="relative w-full h-full">
        <img 
          src={slides[currentSlide].image} 
          alt={slides[currentSlide].title}
          className="w-full h-full object-contain bg-white"
        />
        {/* Added logo image as requested */}
        <img 
          src="/lovable-uploads/JB_LOGO-removebg-preview.png" 
          alt="JB Egg Incubator Logo" 
          className="absolute top-4 left-4 h-16 w-auto z-10 bg-white bg-opacity-80 rounded p-1"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="absolute bottom-6 left-6">
          <span className="bg-black bg-opacity-60 text-white px-3 py-1 rounded text-sm font-medium">
            {slides[currentSlide].title}
          </span>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide 
                ? 'bg-white' 
                : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;