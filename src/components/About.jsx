import { motion } from "motion/react";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

export default function About({ onLearnMore }) {
  const stats = [
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Users, value: "500+", label: "Happy Clients" },
    { icon: CheckCircle, value: "1000+", label: "Projects Completed" },
    { icon: Clock, value: "24/7", label: "Support Available" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-[#0b0b0e] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-full mx-auto px-4 sm:px-0"
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-7xl mx-auto">
              <img
                src="https://images.unsplash.com/photo-1634231647709-06609f7dd3ca"
                alt="Construction workers building"
                className="w-full h-72 sm:h-96 md:h-[450px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Pop-out Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-2 -right-2 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 bg-yellow-400 text-black p-6 rounded-2xl shadow-xl flex flex-col items-center sm:items-start"
              style={{ minWidth: "120px" }}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">
                15+
              </div>
              <div className="text-black/80 text-sm sm:text-base lg:text-lg text-center sm:text-left">
                Years of Excellence
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-2 bg-yellow-400/10 rounded-full mb-4">
              <span className="text-yellow-400">Who We Are</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Building Dreams,
              <br />
              Creating Legacies
            </h2>

            <p className="text-gray-300 mb-6">
              At Home2Heaven, we believe every space has the potential to become
              extraordinary. With over 15 years of experience, we've transformed
              hundreds of houses into dream homes.
            </p>

            <p className="text-gray-300 mb-8">
              Our professional team works tirelessly to ensure every detail
              exceeds expectations—from custom home building to complete
              renovations.
            </p>

            {/* FEATURES */}
            <div className="space-y-3 mb-8">
              {[
                "Premium quality materials and craftsmanship",
                "Transparent pricing with no hidden costs",
                "On-time project delivery guarantee",
                "Comprehensive warranty and support",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-yellow-400 shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            
          </motion.div>
        </div>

        {/* BOTTOM STATS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-extrabold">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
