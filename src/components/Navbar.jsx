import { useState, useEffect } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Send } from "lucide-react";

const navigation = [
  { name: "Home", id: "home", type: "scroll" },
  { name: "Services", id: "services", type: "scroll" },
  { name: "About", id: "about", type: "scroll" },
{ name: "Our Work", href: "/our-work", type: "link" },
  { name: "Reviews", id: "reviews", type: "scroll" },
  { name: "Contact", href: "/contact", type: "link" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const EMAIL = import.meta.env.VITE_CONTACT_EMAIL;
  const PHONE = import.meta.env.VITE_CONTACT_PHONE;

  // Smooth scroll to section if hash exists
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(id);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection(location.pathname === "/" ? "home" : location.pathname);
    }
  }, [location]);

  // Update active section on scroll
 useEffect(() => {
  const handleScroll = () => {
    if (location.pathname !== "/") return;

    const sections = ["home", "about","services", "reviews", "outr-work", "contact"];
    let current = "home";

    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el) {
        const top = el.offsetTop - 100; // adjust for navbar height
        if (window.scrollY >= top) {
          current = sections[i];
          break; // stop at the first matching section from bottom
        }
      }
    }

    setActiveSection(current);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // call once to set initial active section
  return () => window.removeEventListener("scroll", handleScroll);
}, [location.pathname]);


  return (
    <>
      <Disclosure
        as="nav"
        className="bg-[#0b0b0e] fixed top-0 w-full z-50 shadow-lg"
      >
        {({ open }) => (
          <>
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                {/* Left: Logo + Text */}
                <RouterLink to="/" className="flex items-center space-x-2">
                  <img src="./home2heaven.png" alt="Logo" className="h-5" />
                  <span className="text-white font-bold text-lg">
                    Home<span className="text-[#fffb00]">2</span>Heaven
                  </span>
                </RouterLink>
                {/* Right: Links + CTA + User */}
                <div className="flex items-center space-x-4">
                  <div className="hidden lg:flex space-x-4">
                    {navigation.map((item) =>
                      item.type === "scroll" ? (
                        <RouterLink
                          key={item.name}
                          to={`/#${item.id}`}
                          className={classNames(
                            activeSection === item.id
                              ? "bg-gray-950/50 text-yellow-400"
                              : "text-gray-300 hover:bg-white/5 hover:text-yellow-400",
                            "rounded-md px-3 py-2 text-sm font-medium cursor-pointer"
                          )}
                        >
                          {item.name}
                        </RouterLink>
                      ) : (
                        <RouterLink
                          key={item.name}
                          to={item.href}
                          className={classNames(
                            activeSection === item.href
                              ? "bg-gray-950/50 text-yellow-400"
                              : "text-gray-300 hover:bg-white/5 hover:text-yellow-400",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </RouterLink>
                      )
                    )}

                    {/* CTA Button */}
                    <button
                      onClick={openModal}
                      className="px-4 py-2 bg-[#fffb00] text-black font-semibold rounded-full shadow-md hover:bg-yellow-500 transition"
                    >
                      Get a Quote
                    </button>
                  </div>

                  {/* Mobile menu button */}
                  <div className="lg:hidden">
                    <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <DisclosurePanel className="lg:hidden px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) =>
                item.type === "scroll" ? (
                  <DisclosureButton
                    key={item.name}
                    as={RouterLink}
                    to={`/#${item.id}`}
                    className={classNames(
                      activeSection === item.id
                        ? "bg-gray-950/50 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium cursor-pointer"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                ) : (
                  <DisclosureButton
                    key={item.name}
                    as={RouterLink}
                    to={item.href}
                    className={classNames(
                      activeSection === item.href
                        ? "bg-gray-950/50 text-white"
                        : "text-gray-300 hover:bg-white/5 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                  >
                    {item.name}
                  </DisclosureButton>
                )
              )}

              {/* Mobile CTA button */}
              <DisclosureButton
                onClick={openModal}
                className="block w-full text-center px-4 py-2 bg-[#fffb00] text-black rounded-full font-semibold shadow-md hover:bg-yellow-500 transition"
              >
                Get a Quote
              </DisclosureButton>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>

      {/* CTA Modal */}
      {isModalOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-gray-900 rounded-xl p-8 max-w-sm w-full text-center relative shadow-2xl"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400 text-2xl font-bold"
            >
              ✕
            </button>
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-yellow-400 text-2xl font-bold mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-300 mb-6">
              Call or email us directly to discuss your project.
            </p>
            <div className="flex flex-col gap-4">
              <a
                href={`tel:${PHONE}`}
                className="bg-yellow-400 text-black px-4 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition"
              >
                Call Us
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="bg-yellow-400 text-black px-4 py-3 rounded-lg shadow-md hover:bg-yellow-300 transition"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
