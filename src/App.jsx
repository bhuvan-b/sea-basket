import "./App.css";
import Navbar from "./components/Navbar";
import FishImg from "./images/fishimg.png";
import CategorySection from "./components/CategorySection";
import FaqSection from "./components/Faq/FaqSection";
import HarSection from "./components/Har/HarSection";
import TopicSection from "./components/Topic/TopicSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-6">
        <div className="lg:w-[80%] w-[90%] space-y-14 pb-12">
          <Navbar />
          <div className="flex justify-center">
            <img src={FishImg} alt="" srcset="" />
          </div>

          <div className="font-Roboto flex flex-col text-center">
            <div className="font-bold text-3xl py-12">HOW IT WORKS</div>
            <div className="font-medium">
              Sea Basket delivers fresh sourced seafood in a few easy clicks
            </div>
          </div>

          {/* Categories */}
          <CategorySection />

          {/* Glance at Product */}
          <div className="">
            <div className="font-Roboto font-bold text-3xl py-12 text-center">
              A GLANCE AT OUT PRODUCT
            </div>
            <div className="flex justify-center">
              <iframe
                width="1180"
                height="560"
                src="https://www.youtube.com/embed/OPY18qqinh4"
              ></iframe>
            </div>
          </div>

          <FaqSection />
          <HarSection />
          <TopicSection />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
