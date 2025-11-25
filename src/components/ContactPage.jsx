import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactPage() {
  // Use Vite env variables
  const EMAIL = import.meta.env.VITE_CONTACT_EMAIL || "hidden@example.com";
  const PHONE_RAW = import.meta.env.VITE_CONTACT_PHONE || "+1234567890";
  const PHONE_DISPLAY = "+1 (778) 859-7713"; // formatted for display

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Surrey, BC, Canada", "Nearby cities: Vancouver, Burnaby, Langley"],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [PHONE_DISPLAY], // formatted for display
      link: `tel:${PHONE_RAW}`, // for clickable link
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [EMAIL],
      link: `mailto:${EMAIL}`,
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0b0e] pt-32 pb-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-yellow-400/10 rounded-full mb-4">
            <span className="text-yellow-400">Get In Touch</span>
          </div>
          <h1 className="text-yellow-400 mb-4 text-4xl font-bold">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or ready to start your project? We're here to help.
            Reach out to us and let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800 rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-gray-700/40 rounded-xl flex items-center justify-center mx-auto mb-6">
                <info.icon className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-white mb-4 text-lg font-semibold">{info.title}</h3>
              {info.details.map((detail, i) =>
                info.link ? (
                  <a
                    key={i}
                    href={info.link}
                    className="text-gray-400 hover:text-yellow-400 transition block"
                  >
                    {detail}
                  </a>
                ) : (
                  <p key={i} className="text-gray-400">
                    {detail}
                  </p>
                )
              )}
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-linear-to-br from-yellow-400 to-yellow-500 rounded-2xl p-8 shadow-lg text-center"
          >
            <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-white mb-4 text-lg font-semibold">Get a Quote</h3>
            <p className="text-white/90 mb-6">
              Contact us directly via email or call for your project inquiry.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <a
                href={`mailto:${EMAIL}`}
                className="px-6 py-3 bg-yellow-300 text-black rounded-full font-medium shadow-md hover:bg-yellow-400 transition"
              >
                Email Us
              </a>
              <a
                href={`tel:${PHONE_RAW}`}
                className="px-6 py-3 bg-yellow-300 text-black rounded-full font-medium shadow-md hover:bg-yellow-400 transition"
              >
                Call Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
