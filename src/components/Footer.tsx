import { Facebook, Instagram, Linkedin, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import MaximumWidthWrapper from './shared/MaximumWidthWrapper';
import ScrollToTop from './ui/ScrollToTop';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <ScrollToTop />
      <MaximumWidthWrapper className="">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Find Us on Social Media</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook />
              </a>
              <a href="#" className="hover:text-blue-400">
                <X />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin />
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/services" className="hover:underline">
                  Services
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/bookings" className="hover:underline">
                  Bookings
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/reviews" className="hover:underline">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Shiny Car Wash</h2>
            <p className="mb-4"> Street 321, NW City, USA </p>
            <p>Email: admin@shinycarwash.com</p>
            <p>Phone: 123 456-7890</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          © {new Date().getFullYear()} All rights reserved@ShinyCarWash
        </div>
      </MaximumWidthWrapper>
    </footer>
  );
};

export default Footer;
