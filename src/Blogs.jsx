import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";
import FloatingIcons from "./components/FloatingIcons";

const Blogs = () => {
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("الكل");

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

  // الأقسام
  const sections = ["الكل", "مدني", "جنائي", "إداري", "تجاري"];

  // تطبيق الفلتر
  const filteredArticles =
    filter === "الكل"
      ? articles
      : articles.filter((article) => article.section === filter);

  return (
    <>
      <Nav />
      <FloatingIcons />
      <div className="blog" style={{ paddingTop: "150px" }}>
        <div className="container">
          <div className="mainTitle">
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1755565470/lwvxfu6qtc7hmzthdt7r.png"
              alt=""
            />
            <h2>جميع المقالات</h2>
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1755565520/goohmpytdhcsfw3slwup.png"
              alt=""
            />
          </div>

          {/* الفلتر */}
          <div
            className="filters"
            style={{ margin: "20px 0", textAlign: "center" }}
          >
            {sections.map((sec) => (
              <button
                key={sec}
                onClick={() => setFilter(sec)}
                style={{
                  margin: "5px",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border:
                    filter === sec ? "2px solid #007bff" : "1px solid #ccc",
                  background: filter === sec ? "#007bff" : "#f9f9f9",
                  color: filter === sec ? "#fff" : "#333",
                  cursor: "pointer",
                }}
              >
                {sec}
              </button>
            ))}
          </div>

          {/* عرض المقالات */}
          <div className="boxs">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <div key={article.id} className="box">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    style={{ width: "100%", borderRadius: "8px" }}
                  />
                  <h3 style={{ fontSize: "18px", margin: "10px 0" }}>
                    {article.title}
                  </h3>
                  <Link to={`/article/${article.id}`}>
                    <button>عرض المقالة</button>
                  </Link>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", width: "100%" }}>
                لا توجد مقالات حالياً في هذا القسم
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
