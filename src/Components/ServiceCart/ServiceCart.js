import React from "react";

const ServiceCart = (props) => {
  const { title, instructor, details, price, rating, image } = props.service;
  return (
    <div>
      <div className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={image}
            alt="Front of men&#039;s Basic Tee in black."
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="font-bold text-yellow-400">
              <a href="/">
                <span aria-hidden="true" className="absolute inset-0"></span>
                {title}
              </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{details}</p>
          </div>
        </div>
        <div>
          <p className="text-sm mt-2">
            rating : <span className="text-yellow-500">{rating}</span>
          </p>
          <h3 className="font-bold text-gray-600">{instructor}</h3>
          <p className="text-sm font-medium text-yellow-600">taka: {price}</p>
        </div>
        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCart;
