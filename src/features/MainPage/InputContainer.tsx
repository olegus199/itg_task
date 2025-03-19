import styles from "./InputContainer.module.scss";
import { FC } from "react";
import { IInput } from "./MainPage.tsx";
import Input from "../../UI/Input.tsx";
import { FaRegCircleXmark } from "react-icons/fa6";
import { GoPlus } from "react-icons/go";
import { PiMagnifyingGlass } from "react-icons/pi";
import { LuCalendar } from "react-icons/lu";
import ButtonBorder from "../../UI/ButtonBorder.tsx";
import { HiMiniXMark } from "react-icons/hi2";

interface InputContainerProps {
  input: IInput;
}

const InputContainer: FC<InputContainerProps> = ({
  input: {
    label,
    defaultValue,
    isRequired,
    hasSearchAction,
    hasAddAction,
    hasDateAction,
  },
}) => {
  return (
    <div className={styles.input_container}>
      <label
        htmlFor={label}
        className={styles.label}
      >
        {isRequired && <span>*</span>}
        {label}
      </label>
      <div className={styles.input_block}>
        {hasAddAction ? (
          <div className={styles.tags_container}>
            {Array.isArray(defaultValue) && defaultValue.map((v, idx) => (
              <div
                key={idx}
                className={styles.tag}
              >
                <p>{v}</p>
                {defaultValue.length > 1 && (
                  <HiMiniXMark className={styles.tag_xmark} />
                )}
              </div>
            ))}
            <FaRegCircleXmark className={styles.circle_xmark} />
          </div>
        ) : (
          <Input
            type="text"
            defaultValue={!Array.isArray(defaultValue) ? defaultValue : ""}
          />
        )}

        {hasAddAction && (
          <ButtonBorder>
            <GoPlus className={styles.action_icon} />
          </ButtonBorder>
        )}
        {hasDateAction && (
          <ButtonBorder>
            <LuCalendar className={styles.action_icon} />
          </ButtonBorder>
        )}
        {hasSearchAction && (
          <ButtonBorder>
            <PiMagnifyingGlass className={styles.action_icon} />
          </ButtonBorder>
        )}
      </div>
    </div>
  );
};

export default InputContainer;