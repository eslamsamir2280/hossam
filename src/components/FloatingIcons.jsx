import React from "react";

const FloatingIcons = () => {
  return (
    <div style={styles.container}>
      {/* أيقونة واتساب */}
      <a
        href="https://wa.me/201288889415"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.iconWrapper}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="واتساب"
          style={styles.icon}
        />
      </a>

      {/* أيقونة اتصال */}
      <a href="tel:201288889415" style={styles.iconWrapper}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          alt="اتصال"
          style={styles.icon}
        />
      </a>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    right: "20px",
    bottom: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    zIndex: 1000,
  },
  iconWrapper: {
    backgroundColor: "#A46D29",
    borderRadius: "50%",
    padding: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    textAlign: "center",
  },
  icon: {
    width: "40px",
    height: "40px",
  },
};

export default FloatingIcons;
