import "./index.css";
import SlideBar from "../SlideBar";
import ContentContainer from "../ContentContainer";
import Footer from "../Footer";

const Home = () => (
  <div>
    <div className="app-container">
      <SlideBar />
      <ContentContainer />
    </div>
    <hr />
    <Footer />
  </div>
);

export default Home;
