import styles from "./page.module.scss";
import DPK from "./DPK/DPK";
import MarqueeComponent from "./Marquee/Marquee";


export default function LandingPage() {
  return (
    <>
      <MarqueeComponent />
      <div className={styles.page}>
        <main className={styles.main}>
          <DPK />
        </main>
      </div>
    </>
  );
}

