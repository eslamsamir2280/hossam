import React from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyUS from "./components/WhyUS";
import Blogs from "./components/Blogs";
import Hagz from "./components/7agz";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";
import Services from "./components/Services";
import Decorsection from "./components/Decorsection";
import Exp from "./components/Exp";

const App = () => {
  return (
    <>
      <title>مكتب اللواء حسام نبيل</title>
      <meta
        name="description"
        content="مكتب اللواء حسام نبيل للمحاماة والاستشارات القانونية بالإسكندرية. خبرة واسعة في القضايا الجنائية والمدنية والتجارية وقضايا الشركات."
      />
      <meta
        name="keywords"
        content="مكتب اللواء حسام نبيل للمحاماة, محامي في الإسكندرية, محامي مدني الإسكندرية, محامي جنائي الإسكندرية, محامي شركات الإسكندرية, محامي تجاري الإسكندرية, أفضل محامي في الإسكندرية, استشارات قانونية في الإسكندرية, محامي أحوال شخصية الإسكندرية, محامي قضايا الطلاق والخلع الإسكندرية, محامي قضايا الميراث الإسكندرية, محامي استئناف الإسكندرية, محامي نقض الإسكندرية, محامي متخصص في القضايا الجنائية, محامي متخصص في القضايا المدنية, محامي متخصص في قضايا الشركات, محامي متخصص في القضايا التجارية, مكتب محاماة في الإسكندرية, استشارات قانونية مجانية الإسكندرية, محامي تعويضات الإسكندرية, محامي قضايا العقارات, محامي قضايا الإيجارات الإسكندرية, محامي قضايا البناء بدون ترخيص, محامي قضايا المخدرات الإسكندرية, محامي قضايا القتل العمد الإسكندرية, محامي قضايا السب والقذف الإسكندرية, محامي قضايا الإنترنت والجرائم الإلكترونية"
      />
      <meta property="og:title" content="مكتب اللواء حسام نبيل" />
      <meta
        property="og:description"
        content="مكتب اللواء حسام نبيل للمحاماة والاستشارات القانونية بالإسكندرية. نخبة من المحامين والخبراء لتقديم حلول قانونية متكاملة بكفاءة واحترافية."
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/defcamc5x/image/upload/v1756713252/qynqagxlelsdrieo4rlp.jpg"
      />

      <Nav />
      <FloatingIcons />
      <Hero />
      <Exp />
      <About />
      <Services />
      <WhyUS />
      <Decorsection />
      <Blogs />
      <Hagz />
      <Footer />
    </>
  );
};

export default App;
