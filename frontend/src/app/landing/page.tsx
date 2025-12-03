import styles from "./page.module.scss";
import DPK from "./DPK/DPK";


export default function LandingPage() {
  return (
    <>
      <div className={styles.page}>
        <main className={styles.main}>
          <DPK />
        </main>
      </div>
    </>
  );
}

