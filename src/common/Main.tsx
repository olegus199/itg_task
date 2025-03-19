import styles from "./Main.module.scss";
import { FC } from "react";
import Sidebar from "./Sidebar.tsx";
import Menu from "./Menu.tsx";

const Main: FC = () => {
  return (
    <main className={styles.main}>
      <aside className={styles.sidemenu}>
        <Sidebar />
        <Menu />
      </aside>
      <section className={styles.main_content}></section>
    </main>
  );
};

export default Main;