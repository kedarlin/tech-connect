import "./EventsPost.css";

const EventsPost = () => {
  return (
    <div className="eventspost">
      <div className="eventspost-poster">
        <div className="eventpost-title">
          <img
            src="/src/assets/profile.png"
            alt="profile-image"
            className="eventsposter-poster-dp"
            />
            Event Happening!!!
        </div>
        <img
          src="/src/assets/poster-image.png"
          alt="poster-image"
          className="eventsposter-poster-thumbnail"
        />
      </div>
      <div className="eventspost-profile">
        <img
          src="/src/assets/kedar-profile-sample.jpg"
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
