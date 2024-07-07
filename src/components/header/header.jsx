import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src="/miniLogo.svg"></img>
      <div>
        <div>
          <img src="/place.svg"></img>
          <span className={styles.header_text}>Москва и МО</span>
        </div>
        <span className={styles.header_text}>info@100-dverei.ru</span>
      </div>
      <button className={styles.header_button}>Бесплатный замер</button>
      <div className={styles.header_contactsBox}>
        <div className={styles.header_contacts}>
          <img src="/twiter.svg"></img>
          <img src="/whatsapp.svg"></img>
          <span className={styles.header_phone}>+7 (495) 023-67-80</span>
        </div>
        <span>Ежедневно с 9:00 до 22:00</span>
      </div>
      <div className={styles.header_search}>
        <img src="/search.svg"></img>
        <img src="/basket.svg"></img>
        <span>0</span>
      </div>
    </div>
  );
};
