import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const workImages = [
  {
    category: "Drywall",
    before: "/images/Kitchen_old1.webp",
    after: "/images/Kitchen_new1.webp",
  },
  {
    category: "Drywall",
    before: "/images/Drywall_before_1.mp4",
    after: "/images/Drywall_after_1.mp4",
  },
  {
    category: "Drywall",
    before: "/images/Drywall_design_before.webp",
    after: "/images/Drywall_design_after.webp",
  },
  {
    category: "Drywall",
    before: "/images/Drywall_before_2.mp4",
    after: "/images/Drywall_after_2.mp4",
  },
  {
    category: "Drywall",
    before: "/images/Fall_ceiling_before.webp",
    after: "/images/Fall_ceiling_after.webp",
  },
  {
    category: "Drywall",
    before: "/images/Kitchen_old2.webp",
    after: "/images/Kitchen_new2.webp",
  },
  {
    category: "Drywall",
    before: "/images/Paintwork_old1.webp",
    after: "/images/Paintwork_new1.webp",
  },
  {
    category: "Drywall",
    before: "/images/Paintwork_old2.webp",
    after: "/images/Paintwork_new2.webp",
  },
  {
    category: "Popcorn Removal",
    before: "/images/Popcorn_ceiling_before.mp4",
    after: "/images/Popcorn_ceiling_after.mp4",
  },
  {
    category: "Framing",
    before: "/images/Framing_before.webp",
    after: "/images/Framing_after.webp",
  },
  {
    category: "Mudding/Taping",
    before: "/images/Mudding_before1.webp",
    after: "/images/Mudding_after1.webp",
  },
];

const isVideo = (src) => src.toLowerCase().endsWith(".mp4");

const Media = ({ src, className }) => {
  return isVideo(src) ? (
    <video src={src} className={className} controls muted />
  ) : (
    <img src={src} className={className} alt="" />
  );
};

const OurWorkPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filters = [
    "All",
    "Drywall",
    "Mudding/Taping",
    "Framing",
    "Popcorn Removal",
  ];

  const filtered =
    selectedCategory === "All"
      ? workImages
      : workImages.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0b0b0e] pt-32 pb-20 px-4 text-white flex flex-col items-center">
      <div className="inline-block px-4 py-2 bg-yellow-400/10 rounded-full mb-4">
        <span className="text-yellow-400">Our Work</span>
      </div>

      <h1 className="text-4xl sm:text-3xl font-bold text-white px-6 py-2 rounded-full shadow-md mb-6">
        What We’ve Built
      </h1>

      <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
        A closer look at the spaces we’ve transformed through expert drywall,
        framing, and finishing work.
      </p>

      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setSelectedCategory(f)}
            className={`px-5 py-2 rounded-full border shadow-sm transition-all duration-200 
              ${
                selectedCategory === f
                  ? "bg-yellow-300 text-black"
                  : "bg-[#fff7a3] text-black border-yellow-300"
              }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div
        className="
          grid 
          grid-cols-1 
          lg:grid-cols-2 
          3xl:grid-cols-3 
          gap-8 w-full max-w-7xl
        "
      >
        {filtered.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-[#1a1a1e] p-4 rounded-2xl shadow-lg cursor-pointer hover:scale-[1.02] transition"
            onClick={() => setLightbox(item)}
          >
            <div className="relative w-full aspect-4/3 flex">
              {/* BEFORE */}
              <div className="w-1/2 relative border-r border-gray-700">
                <Media
                  src={item.before}
                  className="w-full h-full object-contain rounded-l-xl"
                />
              </div>

              {/* AFTER */}
              <div className="w-1/2 relative">
                <Media
                  src={item.after}
                  className="w-full h-full object-contain rounded-r-xl"
                />
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-xs bg-yellow-400 text-black font-medium px-2 py-1 rounded-full">
                Before
              </span>
              <span className="text-xs bg-yellow-400 text-black font-medium px-2 py-1 rounded-full">
                After
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              className="
          bg-[#1a1a1e] 
          p-6 
          rounded-xl 
          max-w-5xl 
          w-full 
          h-[80vh]        /* 80% screen height */
          flex 
          flex-col
        "
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-center text-lg mb-4">
                {lightbox.category} – Before & After
              </h2>

              {/* Media container */}
              <div className="flex-1 flex gap-3 overflow-hidden">
                <Media
                  src={lightbox.before}
                  className="w-1/2 h-full object-contain rounded-xl"
                />
                <Media
                  src={lightbox.after}
                  className="w-1/2 h-full object-contain rounded-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurWorkPage;
