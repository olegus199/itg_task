import styles from "./ButtonBorder.module.scss";
import { FC, ReactNode } from "react";

interface BorderContainerProps {
  children: ReactNode;
  padding?: string;
  isSaveAndQuitButton?: boolean;
}

const ButtonBorder: FC<BorderContainerProps> = ({ children, padding, isSaveAndQuitButton }) => {
  return (
    <button
      style={{ padding }}
      className={`${styles.button} ${isSaveAndQuitButton && styles.save_button}`}
    >
      {children}
    </button>
  );
};

export default ButtonBorder;