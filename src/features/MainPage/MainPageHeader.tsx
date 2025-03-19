import styles from "./MainPageHeader.module.scss";
import { FC } from "react";
import ButtonBorder from "../../UI/ButtonBorder.tsx";

const buttonPadding = ".375rem .75rem";

const MainPageHeader: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <div className={styles.main_content}>
          <p className={styles.title}>Подзадача</p>
          <ButtonBorder padding={buttonPadding}>
            Создать
          </ButtonBorder>
        </div>

        <div className={styles.action_buttons}>
          <ButtonBorder
            padding={buttonPadding}
            isSaveButton
          >
            Сохранить
          </ButtonBorder>
          <ButtonBorder
            padding={buttonPadding}
          >
            Сохранить и выйти
          </ButtonBorder>
        </div>
      </div>
    </header>
  );
};

export default MainPageHeader;