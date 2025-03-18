import styles from "./ButtonBorder.module.scss";
import { FC, ReactNode } from "react";

interface BorderContainerProps {
  children: ReactNode;
  maxWidth: string;
}

const ButtonBorder: FC<BorderContainerProps> = ({ children, maxWidth }) => {
  return (
    <button
      style={{ maxWidth }}
      className={styles.button}
    >
      {children}
    </button>
  );
};

export default ButtonBorder;