import { Link } from "react-router-dom";
import homeStyles from "../styles/Home.module.css";
import heroImage1 from "../assets/event-1.avif";
import heroImage2 from "../assets/event-2.webp";
import heroImage3 from "../assets/event-3.avif";

export function Home() {
  return (
    <div className={homeStyles.home}>
      <header className={homeStyles.header}>
        
        <p>Bridging gaps between faiths with tech and a dash of fun!</p>
      </header>
      <section className={homeStyles.heroSection}>
        <h1>Unite, Innovate, Connect, Inspire Together</h1>
        <p>
          Join us to be part of a community where spirituality meets innovation.
          Together, we’ll build a world that’s more inclusive, engaging, and connected than ever before!
        </p>
        <button className={homeStyles.cta}><a href="/events">View Our Services</a></button>
      </section>
      <div className={homeStyles.imageGallery}>
        <img src={heroImage1} alt="Community event 1" className={homeStyles.eventImage} />
        <img src={heroImage2} alt="Community event 2" className={homeStyles.eventImage} />
        <img src={heroImage3} alt="Community event 3" className={homeStyles.eventImage} />
      </div>
    </div>
  );
}
