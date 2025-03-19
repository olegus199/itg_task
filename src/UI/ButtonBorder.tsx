import styles from "./ButtonBorder.module.scss";
import { FC, ReactNode } from "react";

interface BorderContainerProps {
  children: ReactNode;
  padding?: string;
  isSaveButton?: boolean;
}

const ButtonBorder: FC<BorderContainerProps> = ({ children, padding, isSaveButton }) => {
  return (
    <button
      style={{ padding }}
      className={`${styles.button} ${isSaveButton && styles.save_button}`}
    >
      {children}
    </button>
  );
};

export default ButtonBorder;