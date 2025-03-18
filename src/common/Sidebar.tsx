import styles from "./Sidebar.module.scss";
import { FC } from "react";
import { FiSidebar } from "react-icons/fi";
import { TbStar } from "react-icons/tb";
import { IconType } from "react-icons";

const sidebarIcons: IconType[] = [FiSidebar, TbStar];

const Sidebar: FC = () => {
  return (
    <div className={styles.sidebar}>
      {sidebarIcons.map((Icon, idx) => (
        <button
          key={idx}
          className={`${styles.tab} ${idx === 0 && styles.active}`}
        >
          <Icon
            className={styles.sidebar_icon}
          />
        </button>
      ))}
    </div>
  );
};

export default Sidebar;