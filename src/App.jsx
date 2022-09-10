import styles from "./style";
import {
  Billing,
  Buisness,
  CardDeal,
  Client,
  CTA,
  FeedbackCard,
  Footer,
  GetStarted,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components/index";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden ">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth} `}>
          <Navbar />
        </div>
      </div>

      {/* Hero */}
      <div className={`${styles.flexStart} bg-primary`}>
        <div className={`${styles.boxWidth} `}>
          <Hero />
        </div>
      </div>

      {/* Other Sections */}
      <div className={`${styles.paddingX} ${styles.flexStart}  bg-primary`}>
        <div className={`${styles.boxWidth}  `}>
          <Stats />
          <Buisness />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
