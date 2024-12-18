import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[calc(100vh-70px)] md:h-[calc(100vh-80px)] py-3"
      style={{
        backgroundImage: 'url(https://res.cloudinary.com/ddrzrekyg/image/upload/v1734508970/corp_gucmqs.jpg)',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 opacity-60"></div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10 h-full">
        {/* Left Content */}
        <div className="w-full md:w-2/3 lg:w-1/2 h-full py-8 text-center md:text-left flex flex-col justify-start md:justify-center ">
          <p className="text-green-700 text-lg font-semibold mb-2">
            The Perfect Choice For Your Agriculture & Farming Website
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug mb-4">
            Agriculture & Organic Farm <br /> Elementor WordPress Theme.
          </h1>
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <div className="bg-orange-300 p-4 rounded-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/WordPress_blue_logo.svg/512px-WordPress_blue_logo.svg.png"
                alt="WordPress"
                className="w-8 h-8"
              />
            </div>
            <div className="bg-orange-300 p-4 rounded-full">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Elementor_logo.svg"
                alt="Elementor"
                className="w-8 h-8"
              />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className=" hidden md:block absolute md:-bottom-4 lg:-bottom-6 right-4 w-1/3 lg:w-2/5 h-1/2 lg:h-full z-10 mt-6 md:mt-0 md:order-2 justify-center items-center">
          <Image
            src="https://res.cloudinary.com/ddrzrekyg/image/upload/v1734507691/ld-banner-1_lzsqjn.webp"
            alt="Farmer Holding Vegetables"
            className="rounded-lg h-full w-full "
            width={1000}
            height={1000}
          />
        </div>
      </div>

      {/* Floating Image for Small Devices */}
      <div className="absolute bottom-0 right-6 md:hidden z-20">
        <Image
          src="https://res.cloudinary.com/ddrzrekyg/image/upload/v1734507691/ld-banner-1_lzsqjn.webp"
          alt="Farmer Holding Vegetables"
          className="rounded-lg w-full h-full "
          width={528}
          height={528}
        />
      </div>
    </div>
  );
};

export default HeroSection;
