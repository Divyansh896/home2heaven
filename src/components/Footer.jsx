import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

export default function Footer() {
  const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "hidden@example.com";
  const PHONE = import.meta.env.VITE_CONTACT_PHONE || "+1234567890";

  const navigate = useNavigate();
  const location = useLocation();

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", page: "home" },
    { label: "Services", page: "services" },
    { label: "Our Work", page: "our-work" },
    { label: "Reviews", page: "reviews" },
    { label: "About Us", page: "about" },
    { label: "Contact", page: "contact" },
  ];

  const services = [
    "Home Renovations",
    "Drywall Installation & Repair",
    "Popcorn Ceiling Removal",
    "Mudding & Taping",
    "Kitchen & Bathroom Remodeling",
    "Commercial Projects",
    "Interior Design",
    "Exterior Upgrades",
  ];

  const handleNavigate = (page) => {
    if (page === "contact" || page === "our-work") {
      navigate(`/${page}`);
    } else {
      if (location.pathname !== "/") navigate("/");
      setTimeout(() => {
        const el = document.getElementById(page);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <footer className="bg-[#0b0b0e] text-white">
      <div className="w-full mx-auto px-10 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <RouterLink
                to="/"
                className="flex items-center gap-2"
                onClick={() => handleNavigate("home")}
              >
                <img
                  src="/home2heaven.png"
                  alt="logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-white text-xl font-bold">
                  Home<span className="text-[#fffb00]">2</span>Heaven
                </span>
              </RouterLink>
            </div>
            <p className="text-gray-400 mb-6">
              Transforming houses into dream homes with expert craftsmanship and
              innovative design solutions.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.tiktok.com/@home2heaven?_r=1&_t=ZS-91h2MuNqSsj"
                target="new"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition-colors"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-6 text-lg font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => handleNavigate(link.page)}
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white mb-6 text-lg font-semibold">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-400 hover:text-yellow-400 transition-colors cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white mb-6 text-lg font-semibold">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-yellow-400 shrink-0 mt-1" />
                <span className="text-gray-400">Surrey, BC, Canada</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-yellow-400 shrink-0" />
                <a href={`tel:${PHONE}`} className="text-gray-400 break-all">
                  {PHONE}
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-400 shrink-0" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-gray-400 overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px] sm:max-w-[250px]"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
            <div className="mt-6 text-gray-400">
              <p className="text-sm">Working Hours:</p>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
              <p>Sat: 9:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
        <div className=" mt-10 mb-3 pt-6 text-center text-gray-400 text-sm">
          <p>
            Website Developed by{" "}
            <a
              href="https://divyansh-portfolio-blond.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-300 transition font-medium"
            >
              Divyansh
            </a>
          </p>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Home2Heaven. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
