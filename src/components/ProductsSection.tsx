import { useState } from "react";
import { Button } from "@/components/ui/button";
import jbw100 from "@/assets/jbw100.png";
import jbst100 from "@/assets/jbst100.png";
import jbin100a from "@/assets/jbin100a.png";
import { Settings, Eye, Egg, Zap } from "lucide-react";

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLSfN9z4X80WO-V_qXBl8mHs8ObkZMK4ko4o5xWkMXLK7znPC8w/formResponse";

const ProductsSection = () => {
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showGoogleForm, setShowGoogleForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("");
  const [form, setForm] = useState({
    email: "",
    name: "",
    phone: "",
    address: "",
    model: "",
    quantity: "",
    note: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const products = [
    {
      id: "JBW100",
      name: "JBW100",
      price: "₹ 2,700.00",
      image: jbw100,
      features: {
        control: "Manual Control",
        monitoring: "Manual Monitoring",
        capacity: "100 eggs",
        power: "120 Watt"
      },
      keyFeatures: [
        "Thermocol Body Material",
        "High quality controller",
        "Single fan cooling system",
        "2 bulbs heating system",
        "2 Holder included",
        "6-month warranty on controller & adapter",
        "80%+ hatch rate performance",
        "Branded & long lasting parts"
      ]
    },
    {
      id: "JBST100",
      name: "JBST100",
      price: "₹ 4,999.00",
      image: jbst100,
      features: {
        control: "Mercury Thermometer",
        monitoring: "Digital Hygrometer",
        capacity: "100 eggs",
        power: "120 Watt"
      },
      keyFeatures: [
        "Fiber Body Material",
        "High quality controller",
        "Double Fan cooling system",
        "2 bulbs heating system",
        "Double Holder included",
        "Digital Hygrometer included",
        "Mercury Thermometer included",
        "6-month warranty on controller & adapter",
        "85%+ hatch rate performance"
      ]
    },
    {
      id: "JBIN100A",
      name: "JBIN100A",
      price: "₹ 9,499.00",
      image: jbin100a,
      features: {
        control: "Auto Control",
        monitoring: "Digital Monitor",
        capacity: "120 eggs",
        power: "120 Watt"
      },
      keyFeatures: [
        "Fiber Body Material",
        "High quality controller with automatic rotation",
        "Dual Fan cooling system",
        "2 bulbs heating system",
        "Double Holder included",
        "Digital Hygrometer included",
        "Mercury Thermometer included",
        "Made in India Adapter",
        "Additional fuse & battery backup",
        "85%+ hatch rate performance",
        "Fully Automatic operation"
      ]
    }
  ];

  // Google Form field names (entry.xxxxx...)
  const FIELD_EMAIL = "entry.1045781291";
  const FIELD_NAME = "entry.2005620554";
  const FIELD_PHONE = "entry.1166974658";
  const FIELD_ADDRESS = "entry.1065046570";
  const FIELD_MODEL = "entry.839337160";
  const FIELD_QUANTITY = "entry.839337162";
  const FIELD_NOTE = "entry.839337161";

  const handleOrderClick = (productName) => {
    setSelectedProduct(productName);
    setShowOrderForm(true);
    setForm({
      email: "",
      name: "",
      phone: "",
      address: "",
      model: productName,
      quantity: "",
      note: ""
    });
    setSubmitted(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowGoogleForm(true);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Egg Incubators</h2>
          <p className="text-gray-600 mb-2">Reliable Egg Incubators with High Hatch Rates</p>
          <p className="text-gray-600">From Manual to Fully Automatic Models – Built for Precision, Durability, and Success.</p>
        </div>
        {/* Order Form Modal */}
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
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 text-center">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-40 h-40 sm:w-72 sm:h-72 object-contain mx-auto mb-4"
                />
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                  <p className="text-2xl font-bold text-blue-600">{product.price}</p>
                </div>
                <Button className="w-full mb-6 bg-blue-600 hover:bg-blue-700 text-white" onClick={() => handleOrderClick(product.name)}>
                  Order Now
                </Button>
                
                <div className="grid grid-cols-2 gap-4 text-sm mb-6">
                  <div className="bg-gray-50 p-3 rounded flex items-center gap-2">
                    <Settings className="h-5 w-5 text-blue-500" />
                    <div className="font-medium text-gray-800">{product.features.control}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center gap-2">
                    <Eye className="h-5 w-5 text-green-500" />
                    <div className="font-medium text-gray-800">{product.features.monitoring}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center gap-2">
                    <Egg className="h-5 w-5 text-yellow-500" />
                    <div className="font-medium text-gray-800">{product.features.capacity}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded flex items-center gap-2">
                    <Zap className="h-5 w-5 text-purple-500" />
                    <div className="font-medium text-gray-800">{product.features.power}</div>
                  </div>
                </div>
                
                <div className="text-left">
                  <h4 className="font-bold text-gray-800 mb-3">Key Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">-</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white" onClick={() => handleOrderClick(product.name)}>
                  Order Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;