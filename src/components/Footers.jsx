import React from "react";
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import img1 from "../assets/balu.jpeg";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
  BsTelephoneFill,
  BsEnvelopeFill,
  BsGeoAltFill,
  BsArrowRight,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <Footer container className="bg-white text-yellow-600 py-10 shadow-lg border-t-2 border-gray-200">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
        <div className="space-y-4">
          <img src={img1} alt="Company Logo" className="h-12 sm:h-20 rounded full" />
          <p>We believe that construction is a man-made wonder.</p>
          <p>
            <strong>Sarvadnya Group Of Construction, Nanded</strong>
          </p>
          <p>
            Rated <span className="text-yellow-400">4.7/5</span> based on 3832
            customer ratings
          </p>
        </div>
        <div className="space-y-4">
          <FooterTitle title="Our Services" />
          <FooterLinkGroup col>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Link
                  to="/about"
                  className="flex items-center text-black hover:text-yellow-500 focus:text-yellow-500 transition-colors"
                >
                  <BsArrowRight className="mr-2" />
                  <FooterLink>About Us</FooterLink>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/portfolio"
                  className="flex items-center text-black hover:text-yellow-500 focus:text-yellow-500 transition-colors"
                >
                  <BsArrowRight className="mr-2" />
                  <FooterLink>Our Services</FooterLink>
                </Link>
              </li>
              <li className="flex items-center">
                <Link
                  to="/contact"
                  className="flex items-center text-black hover:text-yellow-500 focus:text-yellow-500 transition-colors"
                >
                  <BsArrowRight className="mr-2" />
                  <FooterLink>Contact Us</FooterLink>
                </Link>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center text-black hover:text-yellow-500 focus:text-yellow-500 transition-colors"
                >
                  <BsArrowRight className="mr-2" />
                  <FooterLink>Terms & Conditions</FooterLink>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#"
                  className="flex items-center text-black hover:text-yellow-500 focus:text-yellow-500 transition-colors"
                >
                  <BsArrowRight className="mr-2" />
                  <FooterLink>Privacy Policy</FooterLink>
                </a>
              </li>
            </ul>
          </FooterLinkGroup>
        </div>
        <div className="space-y-4">
          <FooterTitle title="Contact Info" />
          <p>
            <BsGeoAltFill className="inline-block mr-2" />
            1325, SY NO; 103/6 Anand NAGAR, Nanded, Maharashtra 431601
          </p>
          <p>
            <a
              href="tel:+919595250999"
              className="flex items-center text-yellow hover:text-green-600 focus:text-green-600 transition-colors"
            >
              <BsTelephoneFill className="inline-block mr-2" />
              +91 9595250999
            </a>
          </p>
          <p>
            <a
              href="mailto:balajimungal785@gmail.com"
              className="flex items-center text-yellow-600 hover:text-pink-600 focus:text-pink-600 transition-colors"
            >
              <BsEnvelopeFill className="inline-block mr-2" />
              balajimungal785@gmail.com
            </a>
          </p>
        </div>
        <div className="space-y-4">
          <FooterTitle title="Follow Us" />
          <div className="flex space-x-4">
            <FooterIcon
              href="#"
              icon={BsFacebook}
              className="hover:text-blue-600 focus:text-blue-600 hover:scale-110 focus:scale-110 transition-transform"
            />
            <FooterIcon
              href="#"
              icon={BsInstagram}
              className="hover:text-pink-600 focus:text-pink-600 hover:scale-110 focus:scale-110 transition-transform"
            />
            <FooterIcon
              href="#"
              icon={BsLinkedin}
              className="hover:text-blue-500 focus:text-blue-500 hover:scale-110 focus:scale-110 transition-transform"
            />
            <FooterIcon
              href="#"
              icon={BsYoutube}
              className="hover:text-red-600 focus:text-red-600 hover:scale-110 focus:scale-110 transition-transform"
            />
          </div>
        </div>
      </div>
      <FooterDivider />
      <div className="w-full text-center py-4 ">
        <FooterCopyright
          href="#"
          by="Sarvadnya Group Of Construction, Nanded"
          year={2024}
          className="text-gray-500"
        />
      </div>
    </Footer>
  );
};

export default Footers;
