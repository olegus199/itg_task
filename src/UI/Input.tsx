import styles from "./Input.module.scss";
import { FC } from "react";

interface InputProps {
  type: string;
  defaultValue?: string;
  placeholder?: string;
  paddingRight?: string;
}

const Input: FC<InputProps> = ({ type, placeholder, defaultValue, paddingRight }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      style={{ paddingRight }}
      className={styles.input}
    />
  );
};

export default Input;