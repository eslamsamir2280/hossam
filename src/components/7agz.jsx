import React, { useState } from "react";
import { db } from "../firebase";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ar } from "date-fns/locale"; // ✅ استيراد العربية
import { motion } from "framer-motion";


// تسجيل اللغة
registerLocale("ar", ar);

const Hagz = () => {
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  // التحقق من صلاحية التاريخ
  const isValidDate = (selectedDate) => {
    if (!selectedDate) return false;

    const day = selectedDate.getDay(); // الأحد=0 ... السبت=6
    const hours = selectedDate.getHours();

    // استبعاد الجمعة (5)
    if (day === 5) {
      setError("❌ الحجز غير متاح يوم الجمعة");
      return false;
    }

    // التحقق من الوقت (10 ص إلى 6 م فقط)
    if (hours < 10 || hours >= 18) {
      setError("❌ الحجز متاح من الساعة 10 صباحاً حتى 6 مساءً فقط");
      return false;
    }

    setError("");
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phone || !date) {
      setError("❌ من فضلك ادخل كل البيانات بشكل صحيح");
      return;
    }

    if (!isValidDate(date)) return;

    try {
      await db.collection("appointments").add({
        name,
        phone,
        date: date.toISOString(),
        createdAt: new Date(),
      });

      alert("✅ تم تسجيل الحجز بنجاح");
      setName("");
      setPhone("");
      setDate(null);
      setError("");
    } catch (error) {
      console.error("خطأ في التسجيل:", error);
      setError("❌ حدث خطأ أثناء التسجيل");
    }
  };

  return (
    <div className="hagz">
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
          <h2 className="text-3xl font-bold">احجز ميعاد</h2>
          <div className="decor">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </motion.div>

        <div className="mainContent">
          <div className="right">
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <label>الأسم بالكامل :</label>
              <input
                type="text"
                placeholder="ادخل اسمك"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <label>رقم التليفون :</label>
              <input
                type="text"
                placeholder="ادخل رقمك"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />

              <label>تاريخ الزيارة :</label>
              <DatePicker
                selected={date}
                onChange={(d) => setDate(d)}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={30}
                dateFormat="yyyy-MM-dd HH:mm"
                placeholderText="اختر موعد الزيارة"
                filterDate={(d) => d.getDay() !== 5 && d >= new Date()}
                minTime={new Date(0, 0, 0, 10, 0)}
                maxTime={new Date(0, 0, 0, 18, 0)}
                locale="ar" // ✅ تعريب
              />

              {error && <p style={{ color: "red" }}>{error}</p>}

              <button
                type="submit"
                style={{
                  padding: "10px",
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                تأكيد الحجز
              </button>
            </form>
          </div>

          <div className="left">
            <img
              src="https://res.cloudinary.com/defcamc5x/image/upload/v1756651581/itu7wtmj0gzltcicocwm.png"
              alt=""
              style={{ maxWidth: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hagz;
