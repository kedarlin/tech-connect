import { IoLogoFoursquare } from "react-icons/io";
import "./NavBar.css";
import profileImage from "../../assets/kedar-profile-sample.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [isOpenAccessories, setIsOpenAccessories] = useState(false);
  const navigate = useNavigate();
  const toggleAccessories = () => {
    setIsOpenAccessories(!isOpenAccessories);
  };

  const navigateHome = () => {
    navigate("/");
  };

  const navigateEvents = () => {
    navigate("/events");
  };

  const navigateInbox = () => {
    navigate("/inbox");
  };

  const navigateProfile = () => {
    navigate("/profile");
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <IoLogoFoursquare className="navbar-logo-icon"/>
        </div>
        <div className="navbar-items">
          <div className="navbar-item" onClick={navigateHome}>
            discover
          </div>
          <div className="navbar-item" onClick={navigateEvents}>
            events
          </div>
          <div className="navbar-item" onClick={navigateInbox}>
            inbox
          </div>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-items">
          <div className="navbar-profile" onClick={navigateProfile}>
            profile
          </div>
          {isOpenAccessories && (
            <div className="navbar-access-float">
              <div>kedarkamaf@gmail.com</div>
              <div>settings</div>
              <div>signout</div>
            </div>
          )}
          <div className="navbar-accessories" onClick={toggleAccessories}>
            <img
              src={profileImage}
              alt="img"
              className="navbar-profile-image"
            />
            <h4 className="navbar-username">Kedar</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
