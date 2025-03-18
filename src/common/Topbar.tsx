import styles from "./Topbar.module.scss";
import { FC } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { GoGear } from "react-icons/go";
import logo from "../assets/simpleOneLogo.svg";
import avatar from "../assets/avatar.jpg";
import ButtonBorder from "../UI/ButtonBorder.tsx";
import Input from "../UI/Input.tsx";

const Topbar: FC = () => {
  return (
    <header className={styles.topbar}>
      <img
        src={logo}
        alt="logo"
        className={styles.logo}
      />
      <div className={styles.actions}>
        <div className={styles.input_container}>
          <Input
            type="search"
            placeholder="Поиск"
            paddingRight="28"
          />
          <FaMagnifyingGlass className={styles.search_icon} />
        </div>
        <div className={styles.meta_info}>
          <div className={styles.avatar_wrapper}>
            <img
              src={avatar}
              alt="avatar"
              className={styles.avatar}
            />
          </div>
          <p className={styles.name}>Максим Галактионов</p>
        </div>
        <ButtonBorder maxWidth="fit-content">
          <GoGear className={styles.gear_icon} />
        </ButtonBorder>
      </div>
    </header>
  );
};

export default Topbar;