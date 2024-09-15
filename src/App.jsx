import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CardTeam from "./components/CardTeam";
import photoAnis from "./assets/anis.png";
import photoYosra from "./assets/yosra.jpg";

const App = () => {
  return (
    <div
      className="bg-blue-50 
        min-h-[100vh] min-w-[100vw]"
    >
      <Header />
      <Main />
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

      <Contact />
      <Footer />
    </div>
  );
};

export default App;
