import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import SideBar from "../../components/SideBar/SideBar";
import "./Events.css";
import EventsPost from "../../components/EventsPost/EventsPost";

const Events = () => {
  const options = [
    "all",
    "ai",
    "music",
    "film",
    "gaming",
    "hardware",
    "software",
    "open-source",
    "crypto",
    "content",
    "other",
  ];

  return (
    <div className="events">
      <SideBar />
      <div className="events-content">
        <div className="events-header">
          <div className="events-title">events</div>
          <div className="events-desc">
            a platform to connect with techie mates online and collab
            <br />
            here you can see various events conducted, you can register to them
            take part in that event
          </div>
        </div>
        <div className="events-nav">
          <div className="events-filter">
            <select className="events-filter-dropdown" defaultValue="all">
              {options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FaChevronDown className="dropdown-icon" />
          </div>

          <div className="events-search">
            <input
              id="events-search-input"
              className="events-search-input"
              placeholder="search - techies, music..."
            />
            <FaArrowRight className="events-search-enter-icon" />
          </div>
        </div>

        <div className="events-posters">
          <EventsPost />
          <EventsPost />
          <EventsPost />
          <EventsPost />
          <EventsPost />
          <EventsPost />
          <EventsPost />
          <EventsPost />
        </div>
      </div>
    </div>
  );
};

export default Events;
