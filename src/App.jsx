import Header from "./components/Header";
import Main from "./components/Main";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div
      className="bg-blue-50 
        min-h-[100vh] min-w-[100vw]"
    >
      <Header />
      <Main />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
