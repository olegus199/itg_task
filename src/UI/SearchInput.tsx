import styles from "./SearchInput.module.scss";
import { FC } from "react";
import Input from "./Input.tsx";
import { IconType } from "react-icons";

interface SearchInputProps {
  Icon: IconType;
  placeholder?: string;
}

const SearchInput: FC<SearchInputProps> = ({ Icon, placeholder }) => {
  return (
    <div className={styles.input_container}>
      <Input
        type="search"
        placeholder={placeholder}
        paddingRight="1.75rem"
      />
      <Icon className={styles.search_icon} />
    </div>
  );
};

export default SearchInput;