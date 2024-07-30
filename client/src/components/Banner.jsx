import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
            <h2 className="text-5xl font-bold leading-snug text-black">Galleria<br /><span className="text-blue-700">Discover Art, Explore Passion</span></h2>
            <p className="md:w-4/5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur error velit harum perspiciatis ut nulla saepe quidem eius. Deleniti quia vero, ipsum ipsam porro eligendi error facilis atque non laboriosam vitae iste voluptates voluptas sequi voluptate quod esse debitis voluptatem quam reiciendis modi tempora maiores repellat laborum! Cumque, vitae deserunt?
            </p>
            <div>
                <input type="text" name="search" id="search" placeholder="Search your Artwork or Creator" className="py-2 px-2 rounded-s-sm outline-none" />
                <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">Search</button>
            </div>
        </div>

        {/* right side */}
        <div><BannerCard/></div>
      </div>
    </div>
  );
};

export default Banner;
