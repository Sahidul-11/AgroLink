import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa'; // Checkmark icon
import { FiArrowRight } from 'react-icons/fi';
import { GiFarmer } from 'react-icons/gi'; // Farmer icon
import { GiChicken } from 'react-icons/gi'; // Livestock icon
import { MdArrowForward } from 'react-icons/md'; // Arrow icon

const AgricultureSection = () => {
    return (
        <section className="w-full">

            <div className=" grid grid-cols-1 lg:grid-cols-5 gap-8 w-10/12 mx-auto ">
                {/* Header Section */}
                <div className=" col-span-3">
                    <div className="text-center md:text-left">
                        <p className="text-green-600 font-semibold text-sm md:text-base">
                            We have 30 years of agriculture & eco farming experience
                        </p>
                        <h1 className="text-3xl md:text-5xl font-bold mt-3 leading-snug">
                            Providing The Finest Products To <br className="hidden md:block" />
                            The Best Feed Suppliers.
                        </h1>
                        <p className="text-gray-600 mt-5 text-sm md:text-base">
                            Elders is headquartered in Adelaide, South Australia, where our story began in 1839, but our expansive network now reaches every corner of Australia.
                        </p>
                        <p className="text-gray-600 mt-3 text-sm md:text-base">
                            At Mycorrhizal Applications (MA), we are dedicated to sustainability by providing the agriculture, horticulture, landscaping, and forestry industries with efficient and effective microbial-based biorational solutions. As the world's leading manufacturer and supplier of mycorrhizal soil inoculants, MA researches, produces, and markets mycorrhizal fungi which accelerate plant performance.
                        </p>
                        <div className="mt-6">
                            <Link href="/about" >
                                <button
                                    className="relative flex items-center px-6 py-3 bg-green-800 text-white rounded-full group hover:bg-green-900 transition-all duration-300 shadow-lg overflow-hidden"
                                >
                                    {/* Button Text */}
                                    <span className="mr-3 text-sm font-medium transition-all duration-300 group-hover:tracking-widest">
                                        More About Us
                                    </span>

                                    {/* Icon Wrapper */}
                                    <span
                                        className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-yellow-300 group-hover:scale-110"
                                    >
                                        <FiArrowRight
                                            className="text-gray-200 transition-transform duration-300 group-hover:translate-x-2"
                                            size={22} // Adjusted size for better visibility
                                        />
                                    </span>

                                    {/* Ripple Effect */}
                                    <span className="absolute inset-0 bg-yellow-500 opacity-0 rounded-full group-hover:opacity-10 group-hover:scale-150 transition-transform duration-500"></span>
                                </button>
                            </Link>
                            <div className="flex ">

                            </div>

                        </div>
                    </div>
                    <div>
                        <Image
                            src="https://res.cloudinary.com/ddrzrekyg/image/upload/v1734611486/h1-img1_yat13z.webp"
                            alt="Farm Image"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                </div>

                <div className="col-span-2 w-full mt-12 ">
                    {/* Info Cards */}
                    <div className="space-y-6">
                        <div className="bg-yellow-100 p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold text-yellow-600">
                                Trust By Clients
                            </h3>
                            <p className="text-4xl font-bold text-gray-800">12,980+</p>
                            <p className="text-gray-600 mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non porttitor felis.
                            </p>
                        </div>

                        <div className="bg-green-100 p-6 rounded-lg shadow-md">
                            <ul className="space-y-2 text-green-800">
                                <li className="flex items-center">
                                    <FaCheckCircle className="mr-2 text-green-600" /> Modern Agriculture Equipment
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="mr-2 text-green-600" /> Awesome Harvest of Wheat
                                </li>
                                <li className="flex items-center">
                                    <FaCheckCircle className="mr-2 text-green-600" /> Fresh Fruits & Vegetables
                                </li>
                            </ul>
                            <div className="mt-6 space-y-4">
                                <div className="flex items-center">
                                    <GiFarmer className="text-2xl text-green-800 mr-3" />
                                    <h4 className="text-lg font-bold">
                                        Highly Qualified & Specialized Farmers
                                    </h4>
                                </div>
                                <div className="flex items-center">
                                    <GiChicken className="text-2xl text-green-800 mr-3" />
                                    <h4 className="text-lg font-bold">Fruit, Vegetables, and Livestock</h4>
                                </div>
                            </div>
                            <Link href="/services" className="mt-4 inline-block text-green-600 font-semibold hover:underline">

                                Read More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AgricultureSection;
