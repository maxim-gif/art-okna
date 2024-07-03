import styles from "./main.module.scss";
import { Header } from "../components/header/header";
import { useState } from "react";

export const Main = () => {

  const [priceSwitch, setPriceSwitch] = useState(0);
  const textPrice =[{first:"Загородный дом",second:"Квартира",third:"Балкон или лоджия"},
                    {first:"На солнечную сторону",second:"На теневую сторону",third:"Есть и солнце, и тень"},
                    {first:"Тихий двор",second:"Улица с автомобильным движением",third:"Шумная улица, аэропорт"},
                    {first:"Нет, или уже взрослые",second:"Есть, младше 7 лет",third:"Есть, старше 7 лет"},
                    {first:"Классические белые",second:"«Под дерево» или цветные",third:"Нестандартной формы (круглые, арочные, треугольные)"},
  ]
  const imgPrice = [{first:"house",second:"apartment",third:"balcony"},
                    {first:"light",second:"dark",third:"sun"},
                    {first:"noise",second:"street",third:"airport"},
                    {first:"child",second:"child2",third:"child3"},
                    {first:"white",second:"color",third:"form"},
]

  return (
    <div className={styles.main}>
      <Header />

      <div className={styles.banner}></div>

      <div className={styles.calculation}>
        <span>Напишите адрес и узнайте стоимость Вашего окна!</span>
        <div>
          <input
            className={styles.calculation_input}
            placeholder="Введите ваш адрес"
          ></input>
          <button className={styles.calculation_button}>Получить расчет</button>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.section_name}>
          Пластиковые окна в Зеленограде
        </span>
        <div className={styles.sectionZel}>
          <p>
            «Окна Века Плюс» — Наш ассортимент включает широкий выбор оконных
            конструкций: от базовых стеклопакетов до инновационных фасадных
            систем с различными вариантами ламинации и декоративной отделки.
            Наши консультанты окажут помощь в подборе решения, идеально
            дополняющего интерьер вашего дома или квартиры.{" "}
          </p>
          <div className={styles.sectionZel_box}>
            <div className={styles.sectionZel_item}>
              <img src="/zel1.svg"></img>
              <span>Одни из самых низких цен в Москве</span>
            </div>
            <div className={styles.sectionZel_item}>
              <img src="/zel2.svg"></img>
              <span>Минимальные сроки производства</span>
            </div>
            <div className={styles.sectionZel_item}>
              <img src="/zel3.svg"></img>
              <span>Контроль качества на всех этапах</span>
            </div>
            <div className={styles.sectionZel_item}>
              <img src="/zel4.svg"></img>
              <span>Срок гарантийных работ — 5 лет</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.section_name}>Пластиковые окна на заказ</span>
        <p className={styles.order}>
          "Века Плюс" - компания на рынке оконных систем с репутацией и большим
          опытом работы. На протяжении 8 лет мы демонстрируем высочайший
          профессионализм, предлагая комплексные решения любой сложности по
          остеклению жилых и коммерческих объектов. Многочисленные положительные
          отзывы наших клиентов служат наглядным подтверждением качества наших
          услуг.
        </p>
        <div className={styles.order_window}>
          <div className={styles.order_item}>
            <div className={styles.order_info}>
              <span className={styles.order_name}>Пластиковые окна Veka</span>
              <span className={styles.order_description}>
                Самый лучший вариант для квартиры
              </span>
              <span className={styles.order_text}>Цена от:</span>
              <span className={styles.order_price}>6.200</span>
              <button className={styles.order_button}>Подробнее</button>
            </div>
            <img src="/veka.png"></img>
          </div>
          <div className={styles.order_item}>
            <div className={styles.order_info}>
              <span className={styles.order_name}>Пластиковые окна Kaleva</span>
              <span className={styles.order_description}>
                Самый лучший вариант для квартиры
              </span>
              <span className={styles.order_text}>Цена от:</span>
              <span className={styles.order_price}>6.200</span>
              <button className={styles.order_button}>Подробнее</button>
            </div>
            <img src="/kaleva.png"></img>
          </div>
          <div className={styles.order_item}>
            <div className={styles.order_info}>
              <span className={styles.order_name}>Пластиковые окна Melke</span>
              <span className={styles.order_description}>
                Самый лучший вариант для квартиры
              </span>
              <span className={styles.order_text}>Цена от:</span>
              <span className={styles.order_price}>6.200</span>
              <button className={styles.order_button}>Подробнее</button>
            </div>
            <img src="/melke.png"></img>
          </div>
          <div className={styles.order_item}>
            <div className={styles.order_info}>
              <span className={styles.order_name}>Пластиковые окна Rehau</span>
              <span className={styles.order_description}>
                Самый лучший вариант для квартиры
              </span>
              <span className={styles.order_text}>Цена от:</span>
              <span className={styles.order_price}>6.200</span>
              <button className={styles.order_button}>Подробнее</button>
            </div>
            <img src="/rehau.png"></img>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <span className={styles.section_name}>Узнайте стоимость окон</span>
        <span className={styles.price_text}>
          <span className={styles.price_text_color}>Шаг {priceSwitch + 1}/5:</span> Куда планируете устанавливать окна?
        </span>
        <div className={styles.price_box}>
          <div className={styles.price_box_item}>
            <img src={`/price/${imgPrice[priceSwitch].first}.png`}></img>
            <span>{textPrice[priceSwitch].first}</span>
          </div>
          <div className={styles.price_box_itemCenter}>
            <img src={`/price/${imgPrice[priceSwitch].second}.png`}></img>
            <span>{textPrice[priceSwitch].second}</span>
          </div>
          <div className={styles.price_box_item}>
            <img src={`/price/${imgPrice[priceSwitch].third}.png`}></img>
            <span>{textPrice[priceSwitch].third}</span>
          </div>
        </div>
        <div className={styles.price_box_button}>
          <button className={styles.price_button} onClick={() => {setPriceSwitch(prevState => prevState - 1)}} disabled={priceSwitch === 0}>Назад</button>
          <button className={styles.price_button} onClick={() => {setPriceSwitch(prevState => prevState + 1)}} disabled={priceSwitch === 4}>Далее</button>
        </div>
      </div>
    </div>
  );
};
