import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useSwipeable } from "react-swipeable";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      rating: 5,
      comment:
        "Home2Heaven transformed our outdated kitchen into a modern masterpiece. Their attention to detail and professionalism exceeded all our expectations. We couldn't be happier!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Business Owner",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      rating: 5,
      comment:
        "The team built our dream home from scratch. Every step was transparent, on schedule, and the craftsmanship is absolutely outstanding. Highly recommend for any construction project!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Interior Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      rating: 5,
      comment:
        "I've worked with many contractors, but Home2Heaven stands out for their quality work and ability to bring creative visions to life. They're my go-to recommendation for clients.",
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Restaurant Owner",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      rating: 5,
      comment:
        "Our commercial renovation was completed ahead of schedule without compromising quality. The team was professional, responsive, and delivered exactly what we envisioned.",
    },
    {
      id: 5,
      name: "Lisa Martinez",
      role: "Homeowner",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      rating: 5,
      comment:
        "From consultation to completion, the experience was seamless. They turned our old bathroom into a luxurious spa retreat. The quality and attention to detail are impeccable!",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-slide
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(nextTestimonial, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Swipe handlers for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextTestimonial,
    onSwipedRight: prevTestimonial,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <section id="reviews" className="pb-20 px-4 bg-[#0b0b0e]">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-block px-4 py-2 bg-yellow-400/10 rounded-full mb-4">
          <span className="text-yellow-400 font-semibold">Testimonials</span>
        </div>
        <h2 className="text-white mb-4 text-4xl font-bold">
          What Our Clients Say
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Hear from the clients who trusted us with their dream projects.
        </p>
      </div>

      <div
        {...swipeHandlers}
        className="relative max-w-4xl mx-auto"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 relative"
          >
            {/* Quote Icon */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-yellow-400" />
            </div>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-yellow-400 shrink-0"
              />

              <div className="flex-1 text-center md:text-left">
                <div className="flex gap-1 justify-center md:justify-start mb-2">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-200 mb-4 italic text-base md:text-lg leading-relaxed">
                  "{testimonials[currentIndex].comment}"
                </p>

                <h4 className="text-yellow-400 font-semibold text-lg">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:text-gray-900 transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-6 bg-yellow-400" : "w-2 bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
