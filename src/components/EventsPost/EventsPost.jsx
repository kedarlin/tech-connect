import "./EventsPost.css";
import profileimg from "../../assets/profile.png"
import posterProfileImg from "../../assets/poster-image.png"
import profileSample from "../../assets/kedar-profile-sample.jpg"


const EventsPost = () => {
  return (
    <div className="eventspost">
      <div className="eventspost-poster">
        <div className="eventpost-title">
          <img
            src={profileimg}
            alt="profile-image"
            className="eventsposter-poster-dp"
            />
            Event Happening!!!
        </div>
        <img
          src={posterProfileImg}
          alt="poster-image"
          className="eventsposter-poster-thumbnail"
        />
      </div>
      <div className="eventspost-profile">
        <img
          src={profileSample}
          alt="poster-image"
          className="eventspost-poster-profile"
        />
        <div className="eventspost-profile-details">
          <p>Kedar</p>
          <p style={{ color: "#b4b4b4" }}>Chennai</p>
        </div>
      </div>
      <div className="eventspost-poster-desc">Event Description</div>
      <div className="eventspost-poster-tags">ai</div>
    </div>
  );
};

export default EventsPost;
