import React from "react";
import { motion } from "framer-motion";

const WhyUS = () => {
  // إعدادات الحركة للـ Boxes
  const boxVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="WhyUs py-20">
      <div className="container">
        {/* العنوان */}
        <motion.div
          className="mainTitle flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="decor">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <h2 className="text-3xl font-bold">لماذا تختارنا</h2>
          <div className="decor">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </motion.div>

        {/* الفقرة التوضيحية */}
        <motion.p
          className="pt text-center text-lg mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          لأننا نؤمن أن الثقة أساس أي علاقة قانونية ناجحة، نحرص دائماً على أن
          نكون الاختيار الأول لعملائنا من خلال
        </motion.p>

        {/* المحتوى الرئيسي */}
        <div className="mainContent grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "الخبرة الواسعة",
              desc: "سنوات من الممارسة في مختلف فروع القانون مع سجل حافل من النجاحات.",
            },
            {
              title: "الاحترافية والدقة",
              desc: "التزام كامل بأعلى المعايير المهنية في دراسة القضايا وصياغة الحلول.",
            },
            {
              title: "الالتزام بالشفافية",
              desc: "وضوح كامل في الإجراءات والتكاليف، مع تواصل مستمر لطمأنة عملائنا.",
            },
            {
              title: "حلول قانونية متكاملة",
              desc: "نقدم استشارات وخدمات تغطي جميع الجوانب القانونية لضمان حماية مصالح عملائنا.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="box p-6 rounded-xl shadow-md bg-white"
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              custom={i}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3 text-[#102E50]">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyUS;
