import { FaArrowRight } from "react-icons/fa";
import SideBar from "../../components/SideBar/SideBar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="home-container">
        <div className="home-welcome">
          Wassup doggie! <br /> Having fun!?
        </div>
        <div className="home-chat">
          <input
            id="home-chat-input"
            className="home-chat-input"
            placeholder="message sage..."
          />
          <FaArrowRight className="home-chat-enter-icon" />
        </div>
      </div>
    </div>
  );
};

export default Home;
