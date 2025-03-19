import styles from "./Menu.module.scss";
import { FC } from "react";
import SearchInput from "../UI/SearchInput.tsx";
import { LuFilter } from "react-icons/lu";
import ButtonBorder from "../UI/ButtonBorder.tsx";
import { RiUnpinLine } from "react-icons/ri";
import { FaChevronRight } from "react-icons/fa6";

const menuItems: string[] = [
  "Моя работа",
  "Структура портала",
  "Личное расписание",
  "Отсутствие на рабочем месте",
  "Портфель услуг",
  "Дашборды",
  "Доски задач",
  "Обращения",
  "События",
  "Инциденты",
  "Проблемы",
  "Настройка каталогов",
  "Запросы на обслуживание",
  "Запросы на изменение",
  "Управление конфигурациями",
  "Управление уровнем услуг",
  "Настройка соответствий",
];

const Menu: FC = () => {
  return (
    <div className={styles.menu}>
      <div className={styles.search_container}>
        <SearchInput
          Icon={LuFilter}
          placeholder="Поиск по меню"
        />
        <ButtonBorder>
          <RiUnpinLine className={styles.unpin_icon} />
        </ButtonBorder>
      </div>

      <ul className={styles.menu_itmes_list}>
        {menuItems.map((item, idx) => (
          <li
            key={idx}
            className={styles.menu_item}
          >
            <FaChevronRight className={styles.chevron} />
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;