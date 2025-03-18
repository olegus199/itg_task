import styles from "./Main.module.scss";
import { FC } from "react";
import Sidebar from "./Sidebar.tsx";

const Main: FC = () => {
  return (
    <main className={styles.main}>
      <aside className={styles.sidemenu}>
        <Sidebar />
      </aside>
      <section className={styles.main_content}></section>
    </main>
  );
};

export default Main;