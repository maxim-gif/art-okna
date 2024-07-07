import styles from "./footer.module.scss";

export const Footer = () => {
  return (
    <div className={styles.footer}>
        <img className={styles.footer_logo} src="/footerLogo.svg"></img>
        <div className={styles.footer_main}>
            <div className={styles.footer_left}></div>
            <div className={styles.footer_right}>
                <div className={styles.footer_rightTop}></div>
                <div className={styles.footer_rightBottom}></div>
            </div>
        </div>
    </div>
  );
};