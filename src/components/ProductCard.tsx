import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
  rating: number;
  reviews: number;
  features: string[];
}

const ProductCard = ({ 
  image, 
  title, 
  price, 
  originalPrice, 
  discount, 
  rating, 
  reviews, 
  features 
}: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden shadow-product hover:shadow-card transition-all duration-300 hover:-translate-y-1">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <Button 
          variant="ghost" 
          size="sm" 
          className="absolute top-2 right-2 bg-white/80 hover:bg-white shadow-sm h-8 w-8 p-0"
        >
          <Heart className="h-4 w-4 text-gray-600" />
        </Button>
        {discount && (
          <Badge className="absolute top-2 left-2 bg-success text-white">
            {discount}% OFF
          </Badge>
        )}
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-sm md:text-base line-clamp-2 mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center gap-2 mb-2">
          <div className="flex items-center gap-1">
            <div className="flex items-center bg-success text-white text-xs px-1.5 py-0.5 rounded">
              <span>{rating}</span>
              <Star className="h-3 w-3 ml-1 fill-current" />
            </div>
            <span className="text-xs text-gray-600">({reviews})</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-gray-900">₹{price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
          )}
        </div>

        <div className="mb-4">
          {features.slice(0, 2).map((feature, index) => (
            <div key={index} className="text-xs text-gray-600 mb-1">
              • {feature}
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-white"
          >
            <ShoppingCart className="h-4 w-4 mr-1" />
            Add to Cart
          </Button>
          <Button 
            variant="flipkart"
            size="sm" 
            className="flex-1"
          >
            Buy Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;