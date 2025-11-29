import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Home,
  Hammer,
  Building2,
  Briefcase,
  Wrench,
  PaintBucket,
  Layers,
  SlidersHorizontal,
  Send,
} from "lucide-react";

export default function Services() {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const EMAIL = import.meta.env.VITE_CONTACT_EMAIL;
  const PHONE = import.meta.env.VITE_CONTACT_PHONE;

  const services = [
    {
      icon: Home,
      title: "Home Renovations",
      image: "/images/services/homerenovation.webp",
      description:
        "Complete home makeovers that breathe new life into your living space with modern designs and quality finishes.",
    },
    {
      icon: Layers,
      title: "Drywall Installation & Repair",
      image: "/images/services/drywallinstallation.webp",
      description:
        "Professional drywall installation and repair services to create smooth, flawless walls and ceilings.",
    },
    {
      icon: Building2,
      title: "Popcorn Ceiling Removal",
      image: "/images/services/popcornceiling.webp",
      description:
        "Remove outdated popcorn ceilings and give your home a modern, smooth finish.",
    },
    {
      icon: SlidersHorizontal,
      title: "Mudding & Taping",
      image: "/images/services/muddingtapping.webp",
      description:
        "Expert mudding and taping services to ensure seamless joints and smooth wall surfaces.",
    },
    {
      icon: Hammer,
      title: "Kitchen & Bathroom Remodeling",
      image: "/images/services/kitchenremodel.webp",
      description:
        "Transform your kitchen and bathrooms into luxurious, functional spaces.",
    },
    {
      icon: Briefcase,
      title: "Commercial Projects",
      image: "/images/services/commercialproject.webp",
      description:
        "Professional construction services for offices, retail spaces, and commercial properties.",
    },
    {
      icon: Wrench,
      title: "Interior Design",
      image: "/images/services/interiordesign.webp",
      description:
        "Creative interior solutions that blend aesthetics with functionality.",
    },
    {
      icon: PaintBucket,
      title: "Exterior Upgrades",
      image: "/images/services/exteriordesign.webp",
      description:
        "Enhance curb appeal with modern facades, landscaping, and exterior renovations.",
    },
  ];

  return (
    <>
      <section id="services" className="py-20 px-4 bg-[#0b0b0e]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-yellow-400/10 rounded-full mb-4">
              <span className="text-yellow-400">Our Services</span>
            </div>

            <h2 className="text-white mb-4 text-4xl font-bold">
              What We Do Best
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto">
              From small renovations to large-scale construction projects, we
              deliver excellence.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative h-72 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                {/* Background image container */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{
                    backgroundImage: `
                                      linear-gradient(to top, rgba(0,0,0,0.90), rgba(0,0,0,0.02)),
                                      url(${service.image})
                                    `,
                  }}
                />
                <div className="absolute bottom-0 p-6 w-full z-10">
                  <service.icon className="w-10 h-10 text-yellow-400 mb-4" />
                  <h3 className="text-white mb-2 text-xl font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Planning Banner */}
          <section className="py-20 px-4 flex justify-center mt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-7xl w-full bg-gray-900 rounded-2xl shadow-2xl p-12 text-center overflow-hidden"
            >
              {/* Patterned Background */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                  }}
                ></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative z-10">
                Planning a New Space? Let's Build It Together.
              </h2>

              <p className="text-gray-300 mb-8 text-lg relative z-10">
                Get expert advice and a free quote for your drywall, framing, or
                space transformation project.
              </p>

              <button
                onClick={() => setShowContactPopup(true)}
                className="px-8 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg shadow-md transition relative z-10"
              >
                Contact Us Today
              </button>
            </motion.div>
          </section>
        </div>

        {/* Contact Popup */}
        {showContactPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
            <div className="bg-gray-900 rounded-xl p-8 max-w-sm w-full text-center relative shadow-2xl">
              <button
                onClick={() => setShowContactPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-yellow-400"
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
      </section>
    </>
  );
}
