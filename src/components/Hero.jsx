import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container text-center">
        {/* أنيميشن نبض دائم */}
        <motion.img
          src="https://res.cloudinary.com/defcamc5x/image/upload/v1756651671/g4xc9y8vt6acetgbbvnq.png"
          alt="logo pulse"
          className="mx-auto absolute left-1/2 transform -translate-x-1/2 top-10 opacity-20 logo-hero"
        />

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          className="text-2xl md:text-4xl font-bold mt-4"
        >
          مكتب اللواء حسام نبيل يقدم خدمات شاملة في مختلف المجالات القانونية
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease: "easeOut" }}
          className="text-lg md:text-2xl mt-2 text-gray-700"
        >
          بخبرة أكثر من 30 عام وسمعة طيبة مبنية على الاحترافية والالتزام
        </motion.h2>

        {/* زرار مع أنيميشن */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6, ease: "easeOut" }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#0f3559",
            color: "#fff",
            boxShadow: "0px 8px 15px rgba(0,0,0,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 rounded-xl bg-[#102E50] text-white font-semibold shadow-md transition-colors"
        >
          أحجز ميعادك
        </motion.button>
      </div>
    </div>
  );
};

export default Hero;
