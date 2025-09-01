import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "./firebase";
import parse from "html-react-parser";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const ArticleDetails = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    // جلب المقال الأساسي
    const unsubscribe = db
      .collection("articles")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          const data = { id: doc.id, ...doc.data() };
          setArticle(data);

          // جلب المقالات من نفس القسم
          db.collection("articles")
            .where("section", "==", data.section)
            .orderBy("createdAt", "desc")
            .limit(5)
            .get()
            .then((snapshot) => {
              const rel = snapshot.docs
                .map((d) => ({ id: d.id, ...d.data() }))
                .filter((a) => a.id !== data.id);
              setRelatedArticles(rel);
            });
        }
      });

    return () => unsubscribe();
  }, [id]);

  if (!article)
    return <p style={{ textAlign: "center" }}>جاري تحميل المقال...</p>;

  return (
    <>
      <title>{article.title}</title>
      <meta name="description" content="{article.content} " />
      <meta
        name="keywords"
        content="مكتب اللواء حسام نبيل للمحاماة, محامي في الإسكندرية, محامي مدني الإسكندرية, محامي جنائي الإسكندرية, محامي شركات الإسكندرية, محامي تجاري الإسكندرية, أفضل محامي في الإسكندرية, استشارات قانونية في الإسكندرية, محامي أحوال شخصية الإسكندرية, محامي قضايا الطلاق والخلع الإسكندرية, محامي قضايا الميراث الإسكندرية, محامي استئناف الإسكندرية, محامي نقض الإسكندرية, محامي متخصص في القضايا الجنائية, محامي متخصص في القضايا المدنية, محامي متخصص في قضايا الشركات, محامي متخصص في القضايا التجارية, مكتب محاماة في الإسكندرية, استشارات قانونية مجانية الإسكندرية, محامي تعويضات الإسكندرية, محامي قضايا العقارات, محامي قضايا الإيجارات الإسكندرية, محامي قضايا البناء بدون ترخيص, محامي قضايا المخدرات الإسكندرية, محامي قضايا القتل العمد الإسكندرية, محامي قضايا السب والقذف الإسكندرية, محامي قضايا الإنترنت والجرائم الإلكترونية"
      />
      <meta property="og:title" content="{article.title}" />
      <meta property="og:description" content="{article.content}" />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="{article.imageUrl}" />
      <Nav />
      <div className="article-details" style={{ paddingTop: "150px" }}>
        <div className="container">
          {/* المقال الأساسي */}
          <div className="main-article" style={{ marginBottom: "40px" }}>
            <h2
              style={{
                textAlign: "center",
                marginBottom: "20px",
                fontSize: "32px",
                fontWeight: "bold",
                color: "#A46D29",
              }}
            >
              {article.title}
            </h2>
            <img
              src={article.imageUrl}
              alt={article.title}
              style={{
                width: "100%",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "30px",
              }}
            />

            {/* عرض النصوص باستخدام html-react-parser */}
            <div
              style={{
                marginTop: "20px",
                lineHeight: "2.2", // مسافة أكبر بين السطور
                fontSize: "20px", // خط أكبر
                color: "#fff",
                fontFamily: "Cairo",
              }}
              className="article-content"
            >
              {article.content ? parse(article.content) : null}
            </div>
          </div>

          {/* المقالات من نفس القسم */}
          <div className="blog">
            <h3
              style={{
                marginBottom: "20px",
                fontSize: "24px",
                fontWeight: "600",
                color: "#A46D29",
              }}
            >
              مقالات أخرى في قسم {article.section}
            </h3>
            <div className="boxs">
              {relatedArticles.length > 0 ? (
                relatedArticles.map((a) => (
                  <div
                    key={a.id}
                    className="box"
                    style={{
                      borderRadius: "10px",
                      padding: "10px",
                      transition: "0.3s",
                    }}
                  >
                    <img
                      src={a.imageUrl}
                      alt={a.title}
                      style={{ borderRadius: "8px", marginBottom: "10px" }}
                    />
                    <h3 style={{ margin: "10px 0", fontSize: "18px" }}>
                      {a.title}
                    </h3>
                    <Link
                      to={`/article/${a.id}`}
                      style={{
                        display: "inline-block",
                        padding: "6px 12px",
                        background: "#A46D29",
                        color: "#fff",
                        borderRadius: "6px",
                        textDecoration: "none",
                        margin: "auto",
                        width: "fit-content",
                      }}
                    >
                      عرض المقالة
                    </Link>
                  </div>
                ))
              ) : (
                <p>لا توجد مقالات أخرى في هذا القسم</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ArticleDetails;
