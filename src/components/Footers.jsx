import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import img1 from "../assets/img1.png";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

const Footers = () => {
  return (
    <Footer container className="bg-white text-yellow-600 py-10 shadow-lg border-t-2 border-gray-200">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 px-8">
        <div className="space-y-4">
          <img src={img1} alt="Company Logo" className="h-12 sm:h-20" />
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
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">Contact Us</FooterLink>
            <FooterLink href="#">Terms & Conditions</FooterLink>
            <FooterLink href="#">Privacy Policy</FooterLink>
          </FooterLinkGroup>
        </div>
        <div className="space-y-4">
          <FooterTitle title="Contact Info" />
          <p>
            1325, SY NO; 103/6 Anand NAGAR, Nanded,
            Maharashtra 431601
          </p>
          <p>+91 9595250999</p>
          <p>balajimungal785@gmail.com</p>
        </div>
        <div className="space-y-4">
          <FooterTitle title="Follow Us" />
          <div className="flex space-x-4">
            <FooterIcon href="#" icon={BsFacebook} className="hover:text-blue-600 focus:text-blue-600 hover:scale-110 focus:scale-110 transition-transform" />
            <FooterIcon href="#" icon={BsInstagram} className="hover:text-pink-600 focus:text-pink-600 hover:scale-110 focus:scale-110 transition-transform" />
            <FooterIcon href="#" icon={BsLinkedin} className="hover:text-blue-500 focus:text-blue-500 hover:scale-110 focus:scale-110 transition-transform" />
            <FooterIcon href="#" icon={BsYoutube} className="hover:text-red-600 focus:text-red-600 hover:scale-110 focus:scale-110 transition-transform" />
          </div>
        </div>
      </div>
      <FooterDivider />
      <div className="w-full text-center py-4">
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
