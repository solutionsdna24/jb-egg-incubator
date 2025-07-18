import { ChevronRight, Star, Shield, Truck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import redIncubator from "@/assets/red-incubator-original.png";
import woodIncubator from "@/assets/wood-incubator-original.png";
import interiorIncubator from "@/assets/interior-incubator.png";
import compactIncubator from "@/assets/compact-incubator-original.png";

const HeroSection = () => {
  return (
    <section
      className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(16,23,42,0.7), rgba(16,23,42,0.7)), url('/lovable-uploads/chick-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <img 
            src="/lovable-uploads/jb-logo.png" 
            alt="JB Egg Incubator Brand Logo" 
            className="h-20 w-auto object-contain bg-white rounded shadow"
          />
          <img 
            src={redIncubator} 
            alt="Professional Incubator" 
            className="h-20 w-auto object-contain bg-white rounded shadow"
          />
          <img 
            src={woodIncubator} 
            alt="Premium Wood Design" 
            className="h-20 w-auto object-contain bg-white rounded shadow"
          />
          <img 
            src={interiorIncubator} 
            alt="Advanced Interior Setup" 
            className="h-20 w-auto object-contain bg-white rounded shadow"
          />
          <img 
            src={compactIncubator} 
            alt="Compact Design" 
            className="h-20 w-auto object-contain bg-white rounded shadow"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Hero Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Professional
                <span className="block text-flipkart-yellow">EGG INCUBATOR</span>
                <span className="block text-2xl md:text-3xl font-normal">for Success</span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed">
                Premium quality incubators with advanced temperature control and 
                high hatching success rates. Trusted by poultry farmers across India.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-flipkart-yellow" />
                <span>1 Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-flipkart-yellow" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-flipkart-yellow" />
                <span>98% Hatch Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-flipkart-yellow" />
                <span>ISO Certified</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="flipkart"
                size="lg" 
                className="px-8"
              >
                Shop Incubators
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-primary font-semibold px-8"
              >
                Call to Order: +91-XXXXXXXXX
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-400/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-flipkart-yellow">10K+</div>
                <div className="text-sm text-blue-100">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-flipkart-yellow">50+</div>
                <div className="text-sm text-blue-100">Models Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-flipkart-yellow">98%</div>
                <div className="text-sm text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-hero transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <CardContent className="p-0">
                <img 
                  src="/src/assets/red-incubator.jpg" 
                  alt="JB Professional Egg Incubator"
                  className="w-full h-96 object-cover"
                />
              </CardContent>
            </Card>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-flipkart-orange text-white p-3 rounded-full shadow-lg animate-bounce">
              <Star className="h-6 w-6 fill-current" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-success text-white p-3 rounded-full shadow-lg">
              <Shield className="h-6 w-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;