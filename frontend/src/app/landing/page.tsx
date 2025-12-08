import styles from "./page.module.scss";
import DPK from "./DPK/DPK";
import MarqueeComponent from "./Marquee/Marquee";
import Hero from "./hero/hero";


export default function LandingPage() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <Hero />
          <DPK />
        </main>
          <MarqueeComponent />
      </div>
    </>
  );
}

