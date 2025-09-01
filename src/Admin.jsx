import React, { useState, useEffect } from "react";
import { db, auth } from "./firebase"; // ✅ استيراد auth من فايربيز
import { useNavigate } from "react-router-dom";
import { Editor } from "@tinymce/tinymce-react";
import AdminBookings from "./components/AdminBookings";

const Admin = () => {
  const [title, setTitle] = useState("");
  const [section, setSection] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [articles, setArticles] = useState([]); // المقالات
  const [editingId, setEditingId] = useState(null); // للتعديل
  const navigate = useNavigate();

  // ✅ التحقق من تسجيل الدخول
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/login"); // لو مفيش يوزر مسجل → يرجع لصفحة اللوجين
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  // جلب المقالات من Firestore
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

  // إضافة أو تعديل مقالة
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingId) {
        await db.collection("articles").doc(editingId).update({
          title,
          section,
          content,
          imageUrl,
        });
        alert("✅ تم تعديل المقالة بنجاح");
        setEditingId(null);
      } else {
        await db.collection("articles").add({
          title,
          section,
          content,
          imageUrl,
          createdAt: new Date(),
        });
        alert("✅ تمت إضافة المقالة بنجاح");
      }

      setTitle("");
      setSection("");
      setContent("");
      setImageUrl("");
    } catch (error) {
      console.error("❌ Error adding/updating article: ", error);
    }
  };

  // تعبئة البيانات للتعديل
  const handleEdit = (article) => {
    setEditingId(article.id);
    setTitle(article.title);
    setSection(article.section);
    setContent(article.content);
    setImageUrl(article.imageUrl);
  };

  // حذف مقالة
  const handleDelete = async (id) => {
    if (window.confirm("هل أنت متأكد من حذف المقالة؟")) {
      try {
        await db.collection("articles").doc(id).delete();
        alert("🗑️ تم حذف المقالة");
      } catch (error) {
        console.error("❌ Error deleting article: ", error);
      }
    }
  };

  return (
    <>
      <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
        <h2
          style={{ textAlign: "center", marginBottom: "20px", color: "#fff" }}
        >
          {editingId ? "✏️ تعديل المقالة" : "➕ إضافة مقالة جديدة"}
        </h2>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          <input
            type="text"
            placeholder="عنوان المقالة"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ padding: "10px" }}
          />

          <select
            value={section}
            onChange={(e) => setSection(e.target.value)}
            required
            style={{ padding: "10px" }}
          >
            <option value="">اختر القسم</option>
            <option value="مدني">مدني</option>
            <option value="جنائي">جنائي</option>
            <option value="إداري">إداري</option>
            <option value="تجاري">تجاري</option>
          </select>

          <input
            type="text"
            placeholder="رابط الصورة"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            style={{ padding: "10px" }}
            required
          />

          <Editor
            apiKey="ed5gqe3xen6ohca7sw4s4fozeudblp8882cth23oc8nso2ue"
            value={content}
            init={{
              height: 300,
              menubar: false,
              directionality: "rtl",
              plugins: [
                "advlist autolink lists link image charmap preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic underline | \
               alignleft aligncenter alignright alignjustify | \
               bullist numlist outdent indent | removeformat | help",
            }}
            onEditorChange={(newValue) => setContent(newValue)}
          />

          <button
            type="submit"
            style={{
              padding: "12px",
              background: "#007bff",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
          >
            {editingId ? "تحديث المقالة" : "إضافة المقالة"}
          </button>
        </form>

        <h3 style={{ marginTop: "40px", textAlign: "center", color: "#fff" }}>
          📋 المقالات
        </h3>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                العنوان
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                القسم
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                الصورة
              </th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>
                التحكم
              </th>
            </tr>
          </thead>
          <tbody>
            {articles.map((article) => (
              <tr key={article.id}>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    color: "#fff",
                  }}
                >
                  {article.title}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    color: "#fff",
                  }}
                >
                  {article.section}
                </td>
                <td
                  style={{
                    border: "1px solid #ddd",
                    padding: "10px",
                    color: "#fff",
                  }}
                >
                  <img
                    src={article.imageUrl}
                    alt=""
                    style={{
                      width: "80px",
                      height: "50px",
                      objectFit: "cover",
                    }}
                  />
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  <button
                    onClick={() => handleEdit(article)}
                    style={{
                      marginRight: "10px",
                      padding: "6px 12px",
                      background: "#ffc107",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    تعديل
                  </button>
                  <button
                    onClick={() => handleDelete(article.id)}
                    style={{
                      padding: "6px 12px",
                      background: "#dc3545",
                      color: "#fff",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "40px" }}>
        <AdminBookings />
      </div>
    </>
  );
};

export default Admin;
