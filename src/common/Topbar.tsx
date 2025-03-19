import styles from "./Topbar.module.scss";
import { FC } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import logo from "../assets/simpleOneLogo.svg";
import avatar from "../assets/avatar.jpg";
import ButtonBorder from "../UI/ButtonBorder.tsx";
import SearchInput from "../UI/SearchInput.tsx";

const Topbar: FC = () => {
  return (
    <header className={styles.topbar}>
      <img
        src={logo}
        alt="logo"
        draggable={false}
        className={styles.logo}
      />
      <div className={styles.actions}>
        <SearchInput Icon={FaMagnifyingGlass} />
        <div className={styles.meta_info}>
          <div className={styles.avatar_wrapper}>
            <img
              src={avatar}
              alt="avatar"
              className={styles.avatar}
              draggable={false}
            />
          </div>
          <p className={styles.name}>Максим Галактионов</p>
        </div>
        <ButtonBorder>
          <GoGear className={styles.gear_icon} />
        </ButtonBorder>
      </div>
    </header>
  );
};

export default Topbar;