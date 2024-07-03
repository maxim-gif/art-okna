import styles from "./header.module.scss";

export const Header = () => {
  return (
    <>
      <div className={styles.top}>
        <div>
          <span className={styles.top_time}>Мы работаем с 09:00 до 17:00</span>
          <img className={styles.top_iconPlace} src="/mapIcon.svg"></img>
          <span className={styles.top_nameCity}>Москва</span>
          <img className={styles.top_iconTell} src="/tell.svg"></img>
          <span className={styles.top_phone}>+7 (495) 109-41-40</span>
          <img className={styles.top_iconMail} src="/mail.svg"></img>
          <span className={styles.top_mail}>okna@vekaplus.ru</span>
        </div>
        <div>
          <span className={styles.top_actions}>Акции</span>
          <span className={styles.top_QandA}>Вопрос-ответ</span>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.main_left}>
          <img className={styles.main_logo} src="/logoMain.svg"></img>
          <div className={styles.main_box}>
            <img className={styles.main_iconCalc} src="/calculator.svg"></img>
            <span className={styles.main_name}>Калькулятор</span>
          </div>
          <div className={styles.main_box}>
            <img className={styles.main_iconBox} src="/size.svg"></img>
            <span className={styles.main_name}>Вызвать замерщика</span>
          </div>
          <div className={styles.main_box}>
            <img className={styles.main_iconBox} src="/pay.svg"></img>
            <span className={styles.main_name}>Оплата</span>
          </div>
        </div>
        <div className={styles.main_right}>
          <button className={styles.main_button}>Заказать звонок</button>
          <div className={styles.main_icons}>
            <img src="/twiter.svg" alt="" />
            <img src="/whatsapp.svg" alt="" />
            <img src="/search.svg" alt="" />
            <img src="/basket.svg" alt="" />
          </div>
        </div>
      </div>
      <nav className={styles.nav}>
        <span>Каталог</span>
        <span>Окна</span>
        <span>Двери</span>
        <span>Балконы и лоджии</span>
        <span>Окна в дом</span>
        <span>О компании</span>
        <span>Услуги</span>
        <span>Цены</span>
        <span>Контакты</span>
      </nav>
    </>
  );
};
