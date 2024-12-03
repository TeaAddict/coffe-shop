<<<<<<< HEAD
=======
import coffie1 from "../assets/images/coffie1.jpg";
import coffie2 from "../assets/images/coffie2.jpg";
import coffie3 from "../assets/images/coffie3.jpg";
import coffie4 from "../assets/images/coffie4.jpg";
import coffie5 from "../assets/images/coffie5.jpg";
import coffie6 from "../assets/images/coffie6.jpg";
const eventsData = {
  upcoming: [
    { title: "Latte Art Workshop", date: "20 Feb 2023", image: coffie1 },
    {
      title: "Exhibition Coffee Hardware",
      date: "10 Mar 2023",
      image: coffie5,
    },
    { title: "Factory Visit", date: "20 Apr 2023", image: coffie2 },
  ],
  closed: [
    {
      title: "Bezzera Latte Art Competition",
      date: "20 Feb 2023",
      image: coffie3 ,
    },
    {
      title: "Sensory and Cupping Class",
      date: "20 Mar 2023",
      image: coffie4,
    },
  ],
};
>>>>>>> Mainer

const EventCard = ({ title, date, image }) => (
  <div style={styles.card}>
    <img src={image} alt={title} style={styles.image} />
    <h3 style={styles.title}>{title}</h3>
    <p style={styles.date}>{date}</p>
  </div>
);

const EventsSection = ({ title, events }) => (
  <div style={styles.section}>
    <h2 style={styles.sectionTitle}>{title}</h2>
    <div style={styles.grid}>
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  </div>
);

const Main = () => (
  <div style={styles.container}>
    <header style={styles.header}>
      <h1>Our Upcoming Events</h1>
      <p>
        We believe that we are big not because of us but because of them. They
        are the ones who motivate us to continue to innovate to provide a
        quality coffee taste and comfortable space that is getting better every
        day.
      </p>
    </header>
    <EventsSection title="Upcoming Events" events={eventsData.upcoming} />
    <EventsSection title="Events Closed" events={eventsData.closed} />
  </div>
);

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
  },
  section: {
    marginBottom: "50px",
  },
  sectionTitle: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    overflow: "hidden",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
  },
  title: {
    fontSize: "18px",
    margin: "10px 0",
  },
  date: {
    color: "#555",
    marginBottom: "10px",
  },
};

export default Main;
