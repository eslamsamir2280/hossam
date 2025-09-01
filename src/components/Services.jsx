import React from 'react'
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="services">
      <div className="container">
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
          <h2 className="text-3xl font-bold">خدمتنا</h2>
          <div className="decor">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </motion.div>
        <div className="mainContent">
          <div className="box">
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1756670045/lvoldttwowaec14k70tu.png"
              alt=""
            />
            <p>
              نقدم خدمات قانونية متكاملة في القضايا المدنية تشمل التعويضات
              والنزاعات المالية والعقارية، وصياغة ومراجعة العقود، إضافة إلى
              التقاضي أمام المحاكم المدنية لضمان حماية حقوق عملائنا.
            </p>
          </div>
          <div className="box-re">
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1756670444/lefhf0wfcolgs5xavlyx.png"
              alt=""
            />
            <p>
              نقدم خدمات شاملة في القضايا الجنائية تشمل الترافع أمام المحاكم
              والدفاع عن المتهمين في مختلف درجات التقاضي، مع إعداد المذكرات
              القانونية والحضور أمام جهات التحقيق، إضافة إلى تقديم الاستشارات
              الجنائية ومتابعة القضايا وتنفيذ الأحكام.
            </p>
          </div>
          <div className="box">
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1756670571/azwnez1wbpxdwpiboage.png"
              alt=""
            />
            <p>
              نقدم لعملائنا تقييماً شاملاً للقضايا مع توضيح الخيارات القانونية
              المتاحة وتوجيههم نحو أفضل الحلول العملية بما يوفر الوقت والتكاليف
              المستقبلية ويعزز من ثقتهم واطمئنانهم.
            </p>
          </div>
          <div className="box-re">
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1756670678/evzv3fku4hfor9j9ixsm.png"
              alt=""
            />
            <p>
              نختص في القضايا الإدارية من خلال تمثيل العملاء أمام المحاكم
              الإدارية، والتظلمات وإلغاء القرارات الإدارية، ومعالجة قضايا
              الموظفين العموميين، مع تقديم استشارات دقيقة تواكب التطورات
              التشريعية والإدارية.
            </p>
          </div>
          <div className="box">
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1756670775/bftmuksms9qdmxpclaoe.png"
              alt=""
            />
            <p>
              نغطي مختلف القضايا التجارية بما في ذلك منازعات الشركات والتحكيم
              التجاري، وإدارة قضايا الإفلاس والتصفية، إضافة إلى صياغة ومراجعة
              العقود التجارية، بما يضمن حماية مصالح العملاء واستقرار تعاملاتهم
              التجارية.
            </p>
          </div>
          <div className="box-re">
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1756671001/fjmdzlhjfvpwf9xrpf6g.png"
              alt=""
            />
            <p>
              نقوم بصياغة ومراجعة وتوثيق جميع أنواع العقود بما يضمن وضوح بنودها
              وحماية مصالح الأطراف، سواء كانت عقود عمل أو شراكة أو بيع وشراء أو
              إيجار أو عقود تجارية واستثمارية، مع الالتزام بأعلى درجات الدقة
              والاحترافية.
            </p>
          </div>
          <div className="box">
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1756671083/gozb3iz45hvqkt2aejvs.png"
              alt=""
            />
            <p>
              نتولى مختلف قضايا الأحوال الشخصية بما يشمل الطلاق والخلع، والنفقة
              والحضانة والرؤية، وإثبات الزواج والطلاق، وقضايا الميراث والوصايا،
              مع الحرص على تقديم حلول ودية أو قضائية تحقق العدالة وتحفظ حقوق
              جميع الأطراف.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services