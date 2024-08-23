import React from "react";
import {
  Footer,
  FooterTitle,
  FooterLinkGroup,
  FooterLink,
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
    <Footer
      container
      className="bg-white text-yellow-600 py-6 md:py-10 shadow-lg border-t-2 border-gray-200"
    >
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 px-4 md:px-8">
        {/* Company Info Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <img
            src={img1}
            alt="Company Logo"
            className="h-12 sm:h-16 md:h-20 rounded-full border-2 border-yellow-600 shadow-lg"
          />
          <div className="text-center md:text-left space-y-2">
            <p className="text-xs sm:text-sm md:text-base">
              We believe that construction is a man-made wonder.
            </p>
            <p>
              <strong>Sarvadnya Group Of Construction, Nanded</strong>
            </p>
            <p className="text-xs sm:text-sm md:text-base">
              Rated <span className="text-yellow-400">4.7/5</span> based on 3832
              customer ratings
            </p>
          </div>
        </div>

        {/* Services Section */}
        <div className="space-y-4">
          <FooterTitle title="Our Services" />
          <FooterLinkGroup col>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                { to: "/about", label: "About Us" },
                { to: "/portfolio", label: "Our Services" },
                { to: "/contact", label: "Contact Us" },
                { to: "/", label: "Terms & Conditions" },
                { to: "/", label: "Privacy Policy" },
              ].map(({ to, href, label }) => (
                <li className="flex items-center" key={label}>
                  {to ? (
                    <Link
                      to={to}
                      className="flex items-center text-black hover:text-yellow-500 focus:text-yellow-500 transition-colors"
                    >
                      <BsArrowRight className="mr-2" />
                      <FooterLink>{label}</FooterLink>
                    </Link>
                  ) : (
                    <a
                      href={href}
                      className="flex items-center text-black hover:text-yellow-500 focus:text-yellow-500 transition-colors"
                    >
                      <BsArrowRight className="mr-2" />
                      <FooterLink>{label}</FooterLink>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </FooterLinkGroup>
        </div>

        {/* Contact Info Section */}
        <div className="space-y-4">
          <FooterTitle title="Contact Info" />
          <p className="flex items-center text-sm sm:text-base">
            <BsGeoAltFill className="inline-block mr-2 text-yellow-600" />
            1325, SY NO; 103/6 Anand NAGAR, Nanded, Maharashtra 431601
          </p>
          <p className="flex items-center text-sm sm:text-base">
            <a
              href="tel:+919595250999"
              className="flex items-center text-yellow-600 hover:text-green-600 focus:text-green-600 transition-colors"
            >
              <BsTelephoneFill className="inline-block mr-2" />
              +91 9595250999
            </a>
          </p>
          <p className="flex items-center text-sm sm:text-base">
            <a
              href="mailto:balajimungal785@gmail.com"
              className="flex items-center text-yellow-600 hover:text-pink-600 focus:text-pink-600 transition-colors"
            >
              <BsEnvelopeFill className="inline-block mr-2" />
              balajimungal785@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media Links Section */}
        <div className="space-y-4">
          <FooterTitle title="Follow Us" />
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/nagesh02/" aria-label="Facebook">
              <BsFacebook className="text-black hover:text-yellow-600 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/nagesh02/" aria-label="Instagram">
              <BsInstagram className="text-black hover:text-yellow-600 transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/nagesh02/" aria-label="LinkedIn">
              <BsLinkedin className="text-black hover:text-yellow-600 transition-colors" />
            </a>
            
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
