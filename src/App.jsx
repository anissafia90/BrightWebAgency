import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CardTeam from "./components/CardTeam";
import photoAnis from "./assets/anis.png";
import photoYosra from "./assets/yosra1.jpg";
import ThankYou from "./components/ThankYou"; // Import your ThankYou component
import OurProject from "./components/OurProject";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <Router>
      <div className="bg-blue-50 min-h-[100vh] min-w-[100vw]">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/projects" element={<OurProject />} />
          <Route path="/testimonials" element={<Testimonials />} />
        </Routes>
        <Services />
        {/* Team Section */}
        <div
          className="
            flex 
            flex-col md:flex-row
            justify-center 
            items-center 
            gap-10 
            py-10 
            bg-gray-50 
            mx-[20px] 
            md:mx-[55px] 
            min-h-screen"
          id="team"
        >
          <CardTeam
            photo={photoAnis}
            name="Anis SAFIA"
            role="Software Engineer - Frontend Developer / Co-Founder"
            socialLinks={[
              {
                platform: "LinkedIn",
                url: "https://www.linkedin.com/in/anis-safia/",
                iconClass: "fab fa-linkedin",
                tooltip: "LinkedIn",
              },
              {
                platform: "Twitter",
                url: "https://x.com/AnisSafia6",
                iconClass: "fab fa-twitter",
                tooltip: "Twitter",
              },
            ]}
          />
          <CardTeam
            photo={photoYosra}
            name="Yosra Habouria"
            role="Software Engineer - Frontend Developer / Co-Founder"
            socialLinks={[
              {
                platform: "LinkedIn",
                url: "https://www.linkedin.com/in/yosra-habouria/",
                iconClass: "fab fa-linkedin",
                tooltip: "LinkedIn",
              },
              {
                platform: "Twitter",
                url: "https://x.com/HabouriaYosra",
                iconClass: "fab fa-twitter",
                tooltip: "Twitter",
              },
            ]}
          />
        </div>
        <OurProject />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
