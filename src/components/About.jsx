import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about py-20">
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
          <h2 className="text-3xl font-bold">من نحن</h2>
          <div className="decor">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </motion.div>

        {/* المحتوى */}
        <div className="mainContent grid md:grid-cols-2 gap-10 items-center">
          {/* النصوص */}
          <motion.div
            className="right space-y-6 text-lg leading-loose"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2>مكتب اللواء حسام نبيل للمحاماة والاستشارات القانونية</h2>
            <p>
              مكتب المحامي حسام نبيل يعد من أبرز المكاتب القانونية ذات الخبرة
              المتميزة والسمعة المرموقة، <br />
              حيث يضم نخبة من المحامين والاستشاريين القانونيين. <br />
              نحرص دائماً على تزويد عملائنا بحلول قانونية متكاملة ومواكبة
              للتطورات التشريعية والقضائية، <br />
              بما يضمن تمثيلهم على أفضل وجه وتحقيق مصالحهم بكفاءة واحترافية.
            </p>
            <h2>رسالتنا</h2>
            <p>
              نسعى لتقديم خدمات قانونية تعكس القيم الجوهرية للمكتب: الثقة،
              النزاهة، الدقة، والالتزام. <br />
              هدفنا أن نوفر لعملائنا التمثيل
              القانوني الأمثل، وأن نكون دائمًا الداعم القانوني الموثوق لهم في
              جميع شؤونهم.
            </p>
            <span>اللواء حسام نبيل</span>
          </motion.div>

          {/* الصورة */}
          <motion.div
            className="left"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1756653912/lhwcr2req5ewuczbkrg6.webp"
              alt="about-image"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
