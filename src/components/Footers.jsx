import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import img1 from "../assets/img1.png";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

const Footers =() =>{
  return (
    <Footer container>
      <div className="w-full bg-sage">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1  bg-CCD5AE ">
          <div className=" flex ">
            <span><img src={img1} className="mr-3 h-12 sm:h-20"/></span>
            <span className="self-center text-sm font-semibold text-yellow-600">Sarvadnya Group Of Construction, Nanded</span>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:mt-4 sm:grid-cols-3 sm:gap-6 text-black">
            <div>
              <FooterTitle title="About"  className="text-sage-green"/>
              <FooterLinkGroup col>
                <FooterLink href="#" className=" font-semibold text-yellow-600">about</FooterLink>
                <FooterLink href="#" className=" font-semibold text-yellow-600">Get Consultation</FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Our Services" className="text-black" />
              <FooterLinkGroup col>
                <FooterLink href="#" className=" font-semibold text-yellow-600">On Going Projects</FooterLink>
                <FooterLink href="#" className="font-semibold text-yellow-600">Residential Construction</FooterLink>
                <FooterLink href="#" className=" font-semibold text-yellow-600">Commercial Construction</FooterLink>
                <FooterLink href="#" className=" font-semibold text-yellow-600">Land Surveyor</FooterLink>
              </FooterLinkGroup>
            </div>
           
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between m-2">
          <FooterCopyright href="#" by="sarvadnyagoc™" year={2024}  className="text-yellow-700"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <FooterIcon href="#" icon={BsFacebook}  className="text-blue-700"/>
            <FooterIcon href="#" icon={BsInstagram} className="text-blue-700"/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default Footers;