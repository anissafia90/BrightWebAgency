import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Logo from "../assets/B.png";

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-4 mt-20">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="flex flex-col justify-center">
          <img
            src={Logo}
            alt="Logo"
            width={100}
            height={100}
            className="mx-[55px]"
          />

          <p className="mt-2 text-gray-400">
            Stay connected with BrightWeb for the latest in web development,
            SEO, and digital marketing. Follow us on social media for updates
            and insights!
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-semibold">Our Services</h2>
          <ul className="mt-2">
            <li className="hover:text-gray-300">Web Development</li>
            <li className="hover:text-gray-300">SEO Optimization</li>
            <li className="hover:text-gray-300">Email Marketing</li>
            <li className="hover:text-gray-300">E-Commerce Solutions</li>
            <li className="hover:text-gray-300">Digital Strategy</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-bold">About Us</h2>
          <ul className="mt-2">
            <li className="hover:text-gray-300">
              <a href="#team">Our Team</a>
            </li>
            <li className="hover:text-gray-300">
              <a href="#ourstory">Our Story</a>
            </li>
            {/* <li className="hover:text-gray-300">Careers</li> */}
          </ul>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-lg font-bold">Contact Us</h2>
          <address className="mt-2">Home Office, Tunisia</address>
          {/* <p className="mt-1">Phone: 00000000000</p> */}
          <p>Email: info.brightweb@gmail.com</p>
          <div className="mt-2 flex justify-center">
            <a
              href="https://x.com/BrightWeb29707"
              className="mr-2 text-4xl hover:text-green-300 cursor-pointer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/company/brightweb-it/?viewAsMember=true"
              className="text-4xl hover:text-green-300 cursor-pointer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
