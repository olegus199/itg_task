import styles from "./Main.module.scss";
import { FC } from "react";
import Sidebar from "./Sidebar.tsx";
import Menu from "./Menu.tsx";
import MainPage from "../features/MainPage/MainPage.tsx";

const Main: FC = () => {
  return (
    <main className={styles.main}>
      <aside className={styles.sidemenu}>
        <Sidebar />
        <Menu />
      </aside>
      <MainPage />
    </main>
  );
};

export default Main;