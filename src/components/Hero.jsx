import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      id="home"
      className="relative h-screen w-full overflow-hidden bg-[#0b0b0e]"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: isVisible ? 1 : 0.8 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-[#fffb00]" />
            <span className="text-white/90 text-sm">
              Premium Drywall & Home Renovation
            </span>
          </motion.div>

          <img
            src="./home2heaven.png"
            alt="Home2Heaven Logo"
            className="w-40 sm:w-52 md:w-64 lg:w-72 xl:w-80 2xl:w-96 object-contain mb-6"
          />

          <h1 className="text-white mb-4 font-bold leading-snug text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            Home<span className="text-[#fffb00]">2</span>Heaven
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-white/90 max-w-2xl mx-auto mb-3 text-xl sm:text-2xl font-light"
          >
            Renovations
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-white/90 max-w-3xl mx-auto text-lg sm:text-xl font-light"
          >
            Reimagining Spaces for a Better Life
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="text-white/80 max-w-xl mx-auto mt-4"
          >
            Expert craftsmanship, innovative designs, and unwavering commitment
            to quality. We transform spaces into extraordinary living
            experiences.
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors cursor-pointer"
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            className="text-[#fffb00]"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
