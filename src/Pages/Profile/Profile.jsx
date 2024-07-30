import { FaArrowRight } from "react-icons/fa";
import SideBar from "../../components/SideBar/SideBar";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <SideBar />
      <div className="profile-chatbot">
          <div className="profile-welcome">
            Wassup doggie! <br /> Having fun!?
          </div>
        <div className="profile-chat">
          <input
            id="profile-chat-input"
            className="profile-chat-input"
            placeholder="message sage..."
          />
          <FaArrowRight className="profile-chat-enter-icon" />
        </div>
      </div>
      <div className="profile-content">Profile content</div>
    </div>
  );
};

export default Profile;
