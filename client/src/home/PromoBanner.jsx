import React from "react";
import {Link} from 'react-router-dom';

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            2023 National National Art Award
          </h2>
          <Link to="/shop" className="mt-12 block">
            <button className="bg-blue-700 text-white font-semibold px-5 py-2 roundedhover:bg-black transition-all duration-300">
              Explore More
            </button>
          </Link>
        </div>

        <div>
            <img src="./awardbooks.png" alt="" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
