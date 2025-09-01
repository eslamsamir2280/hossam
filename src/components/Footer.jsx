import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        {/* اللوجو على اليمين */}
        <div style={styles.logo}>
          <img
            src="https://res.cloudinary.com/defcamc5x/image/upload/v1756651581/itu7wtmj0gzltcicocwm.png"
            alt="Logo"
            style={styles.logoImage}
          />
        </div>

        {/* العنوان وأرقام الهواتف ووسائل التواصل في المنتصف */}
        <div style={styles.info}>
          <p>العنوان : 7 ميدان سعد زغلول - محطة الرمل - الأسكندرية</p>
          <p>رقم المكتب : 201288889415+</p>
          <p>رقم المكتب : 2034848755+</p>
          <p>البريد الإلكتروني: info@hossamnabil-firm.com</p>
          <p>
            وسائل التواصل الاجتماعي:
            <a href="https://www.facebook.com/p/%D8%B9%D8%A7%D8%AF%D9%84-%D8%B9%D9%88%D8%B6-%D8%AF%D8%A7%D9%88%D8%AF-%D8%A7%D9%84%D9%85%D8%A4%D8%B3%D8%B3%D8%A9-%D8%A7%D9%84%D8%AF%D9%88%D9%84%D9%8A%D8%A9-%D9%84%D9%84%D9%85%D8%AD%D8%A7%D9%85%D8%A7%D9%87-%D9%88%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%82%D8%A7%D9%86%D9%88%D9%86%D9%8A%D8%A9-100064212991096/?locale=ar_AR">
              {" "}
              فيسبوك{" "}
            </a>{" "}
            | <a href="#"> إنستجرام </a>
          </p>
        </div>

        {/* مواعيد العمل على اليسار */}
        <div style={styles.hours}>
          <p>مواعيد العمل:</p>
          <p>السبت - الخميس: 10 صباحاً - 6 مساءً</p>
        </div>
      </div>

      {/* حقوق النشر */}
      <div style={styles.copy}>
        <p>
          جميع الحقوق محفوظة مكتب اللواء حسام نبيل  
           © 2025 •{" "}
          <a
            className="horizonya"
            href="https://www.facebook.com/profile.php?id=61578318680157&locale=ar_AR"
          >
            HORIZONYA
          </a>{" "}
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#000",
    padding: "30px 20px",
    color: "#fff",
    marginTop:"100px",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  logo: {
    flex: "1",
    textAlign: "right",
  },
  logoImage: {
    width: "120px",
  },
  info: {
    flex: "2",
    textAlign: "center",
    lineHeight: "2",
  },
  hours: {
    flex: "1",
    textAlign: "center",
    lineHeight: "1.6",
  },
  copy: {
    textAlign: "center",
    fontSize: "14px",
    borderTop: "1px solid #ccc",
    paddingTop: "10px",
  },
};

export default Footer;
