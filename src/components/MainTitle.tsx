import { Phone, Truck, Shield } from "lucide-react";

const MainTitle = () => {
  return (
    <div className="text-center py-12 px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-6">
        JB EGG INCUBATOR
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-gray-600">
        <div className="flex items-center">
          <Phone className="h-5 w-5 mr-2" />
          <span>Call/DM to Order</span>
        </div>
        <div className="hidden md:block text-gray-400">|</div>
        <div className="flex items-center">
          <Truck className="h-5 w-5 mr-2" />
          <span>Fast Shipping Across India</span>
        </div>
        <div className="hidden md:block text-gray-400">|</div>
        <div className="flex items-center">
          <Shield className="h-5 w-5 mr-2" />
          <span>1 Year Warranty</span>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;