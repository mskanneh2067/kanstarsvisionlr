import {
  FaChevronRight,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSkype,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="bg-[#002c38] text-gray-200 p-10 ">
        <div className="max-w-7xl mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="mb-5">
              <h4 className="  pb-4 font-bold text-2xl">On-Premise</h4>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Firewall</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Edge</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Core</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Servers</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Structured Cabling</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Data center infrastructure</Link>
              </div>
            </div>
            <div className="mb-5">
              <h4 className="  pb-4 font-bold text-2xl">Cloud Hosting</h4>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Shared</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Virtual Private Server</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Dedicated Server</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Domain Names Registration</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Backups</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>SSL certificate</Link>
              </div>
            </div>
            <div className="mb-5">
              <h4 className="  pb-4 font-bold text-2xl">
                Security as a Service
              </h4>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Secure Websites & APIs</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Zero Trust Access</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>L3 DDoS Mitigation</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Phishing-resistant MFA</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Endpoint Security</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Private VPN</Link>
              </div>
            </div>
            <div className="mb-5">
              <h4 className="  pb-4 font-bold text-2xl">Email Services</h4>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Business Email</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Dedicated Email Infrastructure</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>DNS</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Email collaboration</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Email marketing</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Secure Email Hosting</Link>
              </div>
            </div>
            <div className="mb-5">
              <h4 className="  pb-4 font-bold text-2xl">DevOps Consulting</h4>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Android App</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>iOS App</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Web App</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Distributed App (Java)</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>CI/CD</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Database Design & Implementation</Link>
              </div>
            </div>
            <div className="mb-5">
              <h4 className="  pb-4 font-bold text-2xl">Projects Portfolio</h4>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Procurement</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>ICT Support Services</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Devops</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Security as a Service</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Cloud</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Email</Link>
              </div>
            </div>
            <div className="mb-5">
              <h4 className="  pb-4 font-bold text-2xl">Company</h4>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link to="/about">About Us</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Training & Certifications</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link>Careers</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link to="/faq" target="_blank">FAQ</Link>
              </div>
            </div>
            <div className="mb-5">
              <h4 className="pb-4 font-bold text-2xl">
                Data Privacy & Security
              </h4>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />
                <Link to="/cookies_policy">Cookies Policy</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight />{" "}
                <Link to="/privacy_policy">Privacy Policy</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <FaChevronRight /> <Link>Terms of services</Link>
              </div>
              <div className="flex items-center  text-white text-sm pb-4">
                <h4 className="text-lg pb-4 font-bold">
                  Email Us:{" "}
                  <span className="text-md">customercare@kvilr.com</span>
                </h4>
              </div>
            </div>
            {/*    <div className="mb-5">
              <h4 className="text-white text-sm pb-4">Join Our Email Alerts</h4>
              <p className="pb-2 text-white text-sm">
                We promised never to spam your email. We'll only send new tips,
                discounts, and free webinars.
              </p>

              <form className="flex flex-row flex-wrap" action="">
                <input
                  type="text"
                  name=""
                  id=""
                  className="text-gray-500 w-2/3 p-2 focus:border-yellow-500"
                  placeholder="email@domain.com"
                />
                <button className="p-2 w-1/3 bg-primary text-white hover:bg-primary">
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>
      <div className="w-full bg-white text-[#002c38] px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
          <div className="text-center ">
            <div className="text-[#002c38] text-md font-bold">
              © 2012 - 2025 <strong>Kanstars Vision</strong>. All Rights
              Reserved.
            </div>
          </div>
          <div className="flex items-center text-xl text-[#002c38] mb-2">
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg:primary mx-1  pt-1 "
            >
              <FaFacebook />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1"
            >
              <FaInstagram />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1"
            >
              <FaTwitter />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1   pt-1"
            >
              <FaYoutube />
            </Link>
            <Link className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1">
              <FaSkype />
            </Link>
            <Link
              to="#"
              className="flex items-center justify-center w-10 h-10  rounded-full bg-primary hover:bg:primary mx-1  pt-1"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
