import logo from "../../assets/logo.png";
import twitterIcon from "../../assets/twitter.png";
import facebookIcon from "../../assets/fb.png";
import linkedinIcon from "../../assets/linkedin.png";
const Footer = () => {
  return (
    <footer className="bg-[#071B3B] text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10">
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <h2 className="text-2xl font-bold text-white">
              HERO.IO
            </h2>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold mb-3">
              Social Links
            </h3>

            <div className="flex gap-3 justify-center">
                <a href="#"><img src={twitterIcon} alt="Twitter" className="h-5 w-5"/></a>
                <a href="#"><img src={facebookIcon} alt="Facebook" className="h-5 w-5"/></a>
                <a href="#"><img src={linkedinIcon} alt="LinkedIn  " className="h-5 w-5"/></a>

            </div>
          </div>

        </div>

        <div className="border-t border-white/20 my-6"></div>

        <p className="text-center text-sm text-gray-300">
          Copyright © 2026 - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;