import styles from './footer.module.scss'

export const Footer = () => {
    return (
        <div className={styles.footer}>
            <div>
                <img src="/time2.png"></img>
                <span>работаем ежедневно с 10:00 до 20:00</span>
            </div>
            <div>
                <img src="/mail2.png"></img>
                <div>
                    <span>напишите нам: </span>
                    <a href="mailto:info@oknagigant-spb.ru">
                        info@oknagigant-spb.ru
                    </a>
                </div>
            </div>
            <div>
                <img src="/marker.png"></img>
                <span>г. Санкт-Петербург, Московский проспект, 46</span>
            </div>
            <div>
                <img src="/payment.png"></img>
                <div>
                <span>принимаем к оплате: </span>
                <img src="/payment2.png"></img>
                </div>
            </div>
            <div>
                <img src="/tel.png"></img>
                <div>
                <span>Наш телефон: </span>
                <a href="tel:89052230213">8 905 223 02 13</a>
                </div>
            </div>
        </div>
    )
}
