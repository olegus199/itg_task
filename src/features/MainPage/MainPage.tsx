import styles from "./MainPage.module.scss";
import { FC, useEffect, useRef, useState } from "react";
import MainPageHeader from "./MainPageHeader.tsx";
import InputContainer from "./InputContainer.tsx";

export interface IInput {
  label: string;
  defaultValue?: string | string[];
  isRequired?: boolean;
  hasAddAction?: boolean;
  hasSearchAction?: boolean;
  hasDateAction?: boolean;
}

const topInputs: IInput[] = [
  {
    label: "Тема",
    defaultValue: "На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller",
    isRequired: true,
  },
  {
    label: "Статус",
    defaultValue: "Новая",
  },
  {
    label: "Описание",
  },
  {
    label: "Продукт",
    defaultValue: "Platform",
    hasSearchAction: true,
  },
  {
    label: "Рабочие заметки",
    defaultValue: "Проверить ACL id=172830402014193655",
    isRequired: true,
  },
  {
    label: "Приоритет",
    defaultValue: "Средний",
  },
  {
    label: "Ответственный",
    defaultValue: ["Константин Константинопольский"],
    hasSearchAction: true,
    hasAddAction: true,
  },
  {
    label: "Группа",
    defaultValue: ["Support Group"],
    hasSearchAction: true,
    hasAddAction: true,
  },
];

const middleInputs: IInput[] = [
  {
    label: "Комментарии",
  },
  {
    label: "Согласующие",
    defaultValue: [
      "Андрей Пивоваров",
      "Максим Галактионов",
      "Алла Лин",
      "Константин Константинопольский Константинович",
      "Игорь Иванченко",
      "Юлия Эйчаровна",
      "Артём Подпрыгайко-Саппортов",
      "Илья Вазнец",
      "Михаил Вортенов",
      "Наталья Нашевна",
      "Евгения Итамовна",
      "Алиса Киральчук",
    ],
    hasSearchAction: true,
    hasAddAction: true,
  },
];

const bottomInputs: IInput[] = [
  {
    label: "Когда открыто",
    hasDateAction: true,
  },
  {
    label: "Когда создано",
    defaultValue: "22.10.2024",
    hasDateAction: true,
  },
  {
    label: "Ответственный",
    defaultValue: ["Андрей Пивоваров"],
    hasSearchAction: true,
    hasAddAction: true,
  },
  {
    defaultValue: ["Андрей Пивоваров"],
    label: "Ответственный",
    hasSearchAction: true,
    hasAddAction: true,
  },
];

const MainPage: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const titleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsScrolled(!entry.isIntersecting);
    }, { threshold: 1, rootMargin: "-112px 0px 0px 0px" });

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.main_content}>
      <MainPageHeader isScrolled={isScrolled} />
      <div className={styles.body}>
        <div className={styles.body_content}>
          <p
            ref={titleRef}
            className={styles.title}
          >
            STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются
            редактируемыми для агента если он Caller
          </p>

          <div className={styles.top_inputs}>
            {topInputs.map((input, idx) => (
              <InputContainer
                input={input}
                key={idx}
              />
            ))}
          </div>

          <div className={styles.middle_inputs}>
            {middleInputs.map((input, idx) => (
              <InputContainer
                input={input}
                key={idx}
              />
            ))}
          </div>

          <div className={styles.bottom_inputs}>
            {bottomInputs.map((input, idx) => (
              <InputContainer
                input={input}
                key={idx}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MainPage;