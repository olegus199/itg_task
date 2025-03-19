import styles from "./Input.module.scss";
import { FC } from "react";

interface InputProps {
  type: string;
  isInBody?: boolean;
  defaultValue?: string;
  placeholder?: string;
  paddingRight?: string;
}

const Input: FC<InputProps> = ({
  type,
  placeholder,
  defaultValue,
  paddingRight,
  isInBody,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={defaultValue}
      style={{ paddingRight }}
      className={`${styles.input} ${isInBody && styles.in_body}`}
    />
  );
};

export default Input;