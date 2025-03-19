import styles from "./MainPageHeader.module.scss";
import { FC } from "react";
import ButtonBorder from "../../UI/ButtonBorder.tsx";

interface MainPageHeaderProps {
  isScrolled: boolean;
}

const buttonPadding = ".375rem .75rem";

const MainPageHeader: FC<MainPageHeaderProps> = ({ isScrolled }) => {
  return (
    <header className={`${styles.header} ${isScrolled && styles.scrolled}`}>
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