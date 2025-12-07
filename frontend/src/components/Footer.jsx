import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">

          {/* About */}
          <div>
            <h2 className="text-xl font-bold mb-4">TravelGo</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              We empower modern explorers to discover destinations across the globe with confidence and convenience. 
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#">Destinations</a></li>
              <li><a href="#">Tours</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt /> Dhaka, Bangladesh
              </li>
              <li className="flex items-center gap-2">
                <FaPhone /> +880 1234 567890
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope /> support@travelgo.com
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4 text-xl">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} TravelGo. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
