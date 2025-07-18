import { Thermometer, RotateCcw, Eye, Zap, Shield, Headphones } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      icon: Thermometer,
      title: "Precise Temperature Control",
      description: "Advanced digital thermostat maintains optimal temperature with ±0.1°C accuracy for maximum hatch rates."
    },
    {
      icon: RotateCcw,
      title: "Automatic Egg Turning",
      description: "Automated turning system rotates eggs every 2 hours to ensure proper embryo development."
    },
    {
      icon: Eye,
      title: "Transparent Viewing",
      description: "Clear viewing window allows you to monitor the hatching process without disturbing the environment."
    },
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "Low power consumption design with superior insulation reduces electricity costs significantly."
    },
    {
      icon: Shield,
      title: "Built to Last",
      description: "Durable construction with high-quality materials ensures years of reliable operation."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you achieve the best hatching results."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose JB Incubators?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our incubators are engineered with cutting-edge technology and precision manufacturing 
            to deliver consistently high hatching success rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-product">
              <CardContent className="p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Success Stats */}
        <div className="mt-16 bg-white rounded-lg shadow-card p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Hatch Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-gray-600">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;