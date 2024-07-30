import "./SideBar.css";
import profileImage from "../../assets/kedar-profile-sample.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const [isOpenAccessories, setIsOpenAccessories] = useState(false);
  const navigate = useNavigate();
  const toggleAccessories = () => {
    setIsOpenAccessories(!isOpenAccessories);
  };
  
  const navigateHome = () => {
    navigate('/');
  }

  const navigateProject = () => {
    navigate('/projects');
  }

  const navigateInbox = () => {
    navigate('/inbox');
  }
  
  return (
    <div className="sidebar">
      <div className="sidebar-upper">
        {/* <img src='' alt='' className='' /> */}
        <div className="sidebar-navlinks">
          <div className="sidebar-nav" onClick={navigateHome}>discover</div>
          <div className="sidebar-nav" onClick={navigateProject}>projects</div>
          <div className="sidebar-nav" onClick={navigateInbox}>inbox</div>
        </div>
        <div className="sidebar-introduction">
          <p>
            welcome to sage, a place to find dope people building cool shit.
          </p>
          <p>
            this is the place where people work on ideas they are passionate
            about.
          </p>
          <p>give it a try.</p>
          <p>see you in a search soon.</p>
        </div>
      </div>
      <div className="sidebar-lower">
        <div className="sidebar-profile">profile</div>
        {isOpenAccessories && (
          <div className="sidebar-access-float">
            <div>kedarkamaf@gmail.com</div>
            <div>settings</div>
            <div>signout</div>
          </div>
        )}
        <div className="sidebar-accessories" onClick={toggleAccessories}>
          <img src={profileImage} alt="img" className="sidebar-profile-image" />
          <h4 className="sidebar-username">Kedar</h4>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
