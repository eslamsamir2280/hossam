import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Blogs = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("articles")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setArticles(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      });

    return () => unsubscribe();
  }, []);

  // تقسيم المقالات حسب الأقسام
  const groupedArticles = {
    مدني: articles.filter((a) => a.section === "مدني"),
    جنائي: articles.filter((a) => a.section === "جنائي"),
    إداري: articles.filter((a) => a.section === "إداري"),
    تجاري: articles.filter((a) => a.section === "تجاري"),
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="blog py-20">
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
                  <h2 className="text-3xl font-bold">المقالات</h2>
                  <div className="decor">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                  </div>
                </motion.div>

        {/* الأقسام */}
        {Object.keys(groupedArticles).map((section, idx) => (
          <motion.div
            className="kind mb-12"
            key={section}
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            transition={{ delay: idx * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="title mb-6">
              <h4 className="text-xl font-semibold border-b pb-2">
                القسم {section}
              </h4>
            </div>

            <motion.div
              className="boxs grid md:grid-cols-3 sm:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {groupedArticles[section].length > 0 ? (
                groupedArticles[section].map((article) => (
                  <motion.div
                    className="box bg-white rounded-xl shadow-md overflow-hidden p-4"
                    key={article.id}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                    }}
                  >
                    <motion.img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-52 object-cover rounded-lg mb-3"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.3 }}
                    />
                    <h3 className="text-lg font-semibold mb-3">
                      {article.title}
                    </h3>
                    <Link to={`/article/${article.id}`}>
                      <motion.button
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        عرض المقالة
                      </motion.button>
                    </Link>
                  </motion.div>
                ))
              ) : (
                <p className="col-span-full text-center text-gray-600">
                  لا توجد مقالات في هذا القسم حالياً
                </p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
