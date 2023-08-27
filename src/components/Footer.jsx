import facebookLogo from "./../assets/icon-facebook.svg";
import twitterLogo from "./../assets/icon-twitter.svg";
import pinterestLogo from "./../assets/icon-pinterest.svg";
import instagramLogo from "./../assets/icon-instagram.svg";

export default function Footer() {
  return (
    <footer className="font-poppins">
      <div className="">
        <div className="bg-purple-950 py-20">
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl text-white font-bold mb-8">
              Boost your links today
            </h1>
            <button
              className="bg-cyan-500 hover:bg-cyan-600 transition-colors duration-200 text-white font-semibold text-xl py-2 px-5 md:py-4 md:px-10 rounded-full"
              onClick={() => window.location.replace("/#shorter-section")}
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="bg-black text-white p-20">
          <div className="max-w-6xl mx-auto  flex flex-col md:justify-between md:flex-row text-center md:text-start">
            <div className="mb-10 md:mb-0">
              <h3 className="text-3xl md:text-4xl font-semibold">Shortly</h3>
            </div>
            <div className="flex gap-16 flex-col md:flex-row mb-10 md:mb-0">
              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-semibold">Features</h3>
                <ul className="flex flex-col gap-2">
                  <li className="hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
                    Link Shortening
                  </li>
                  <li className="hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
                    Branded Links
                  </li>
                  <li className="hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
                    Analytics
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-semibold">Resources</h3>
                <ul className="flex flex-col gap-2">
                  <li className="hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
                    Blog
                  </li>
                  <li className="hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
                    Developers
                  </li>
                  <li className="hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
                    Support
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-5">
                <h3 className="text-xl font-semibold">Company</h3>
                <ul className="flex flex-col gap-2">
                  <li className="hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
                    About
                  </li>
                  <li className="hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
                    Our Team
                  </li>
                  <li className="hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
                    Careers
                  </li>
                  <li className="hover:text-cyan-600 transition-colors duration-200 cursor-pointer">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <ul className="flex flex-row gap-4 justify-center md:justify-start">
                <li>
                  <img
                    className="hover:scale-125 transition-all duration-200 cursor-pointer"
                    src={facebookLogo}
                    alt="facebook logo"
                  />
                </li>
                <li>
                  <img
                    className="hover:scale-125 transition-all duration-200 cursor-pointer"
                    src={twitterLogo}
                    alt="facebook logo"
                  />
                </li>
                <li>
                  <img
                    className="hover:scale-125 transition-all duration-200 cursor-pointer"
                    src={pinterestLogo}
                    alt="facebook logo"
                  />
                </li>
                <li>
                  <img
                    className="hover:scale-125 transition-all duration-200 cursor-pointer"
                    src={instagramLogo}
                    alt="facebook logo"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
