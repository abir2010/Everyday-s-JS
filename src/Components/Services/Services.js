import React from "react";
import useServices from "../../hooks/useServices";
import ServiceCart from "../ServiceCart/ServiceCart";

const Services = () => {
  const [services] = useServices();
  return (
    <div>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            All Our services
          </h2>
          {/* all services */}
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {/* single service */}
            {services.map((service) => (
              <ServiceCart key={service.rating} service={service}></ServiceCart>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
