import styles from './main.module.scss'
import { Header } from '../components/header/header'
// import { Footer } from "../components/footer/footer";
// import { useState } from 'react'

export const Main = () => {
    // const [priceSwitch, setPriceSwitch] = useState(0)
   

    return (
        <div className={styles.main}>
            <Header />

            <nav className={styles.nav}>
                <span>ПЛАСТИКОВЫЕ ОКНА</span>
                <span>АЛЮМИНИЕВЫЕ ОКНА</span>
                <span>БАЛКОНЫ И ЛОДЖИИ</span>
                <span>ОСТЕКЛЕНИЕ КОТТЕДЖЕЙ</span>
                <span>ДВЕРИ</span>
                <span>АКЦИИ</span>
                <span>КОНТАКТЫ</span>
            </nav>

            <section className={styles.banner}>
                <div className={styles.banner_img}></div>
                <div className={styles.banner_main}>
                    <span className={styles.banner_action}>Акция!</span>
                    <span className={styles.banner_tittle}>
                        Только сейчас до -45% на остекление террас, веранд и
                        беседок!
                    </span>
                    <span className={styles.banner_subTittle}>
                        Скидка действует до 31 июля
                    </span>
                    <div className={styles.banner_form}>
                        <div className={styles.banner_inputBox}>
                            <input
                                type="text"
                                placeholder="Телефон"
                                className={styles.banner_input}
                            ></input>
                            <img src="/tell.svg"></img>
                        </div>

                        <button className={styles.banner_buttonRed}>
                            ОСТАВИТЬ ЗАЯВКУ
                        </button>
                        <button className={styles.banner_button}>
                            ПОДРОБНЕЕ
                        </button>
                    </div>
                </div>
            </section>

            <section className={styles.price}>
                <div className={styles.price_box}>
                    <span className={styles.price_titleLeft}>
                        Профессиональные оконные системы,
                    </span>
                    <span className={styles.price_title}>
                        с которыми мы работаем
                    </span>
                </div>
                <div className={styles.price_list}>
                    <div className={styles.price_item}>
                        <span className={styles.price_name}>
                            Рехау (Германия)
                        </span>
                        <span className={styles.price_price}>от 5300 руб.</span>
                        <p>
                            Немецкая компания является лидером на рынке окон в
                            РФ. Один из самых проверенных и надежных мировых
                            брендов, которому доверяют миллионы людей в 53
                            странах.
                        </p>
                        <div></div>
                        <img src="/pexay.png"></img>
                    </div>
                    <div className={styles.price_item}>
                        <span className={styles.price_name}>
                            Рехау (Германия)
                        </span>
                        <span className={styles.price_price}>от 5300 руб.</span>
                        <p>
                            Немецкая компания является лидером на рынке окон в
                            РФ. Один из самых проверенных и надежных мировых
                            брендов, которому доверяют миллионы людей в 53
                            странах.
                        </p>
                        <div></div>
                        <img src="/pexay.png"></img>
                    </div>
                    <div className={styles.price_item}>
                        <span className={styles.price_name}>
                            Рехау (Германия)
                        </span>
                        <span className={styles.price_price}>от 5300 руб.</span>
                        <p>
                            Немецкая компания является лидером на рынке окон в
                            РФ. Один из самых проверенных и надежных мировых
                            брендов, которому доверяют миллионы людей в 53
                            странах.
                        </p>
                        <div></div>
                        <img src="/pexay.png"></img>
                    </div>
                    <div className={styles.price_item}>
                        <span className={styles.price_name}>
                            Рехау (Германия)
                        </span>
                        <span className={styles.price_price}>от 5300 руб.</span>
                        <p>
                            Немецкая компания является лидером на рынке окон в
                            РФ. Один из самых проверенных и надежных мировых
                            брендов, которому доверяют миллионы людей в 53
                            странах.
                        </p>
                        <div></div>
                        <img src="/pexay.png"></img>
                    </div>
                    <div className={styles.price_item}>
                        <span className={styles.price_name}>
                            Рехау (Германия)
                        </span>
                        <span className={styles.price_price}>от 5300 руб.</span>
                        <p>
                            Немецкая компания является лидером на рынке окон в
                            РФ. Один из самых проверенных и надежных мировых
                            брендов, которому доверяют миллионы людей в 53
                            странах.
                        </p>
                        <div></div>
                        <img src="/pexay.png"></img>
                    </div>
                </div>
            </section>

            <section className={styles.windows}>
                <span className={styles.windows_title}>
                    Цены на стандартные пластиковые окна
                </span>
                <div className={styles.windows_listName}>
                    <span>Veka</span>
                    <span>Kaleva</span>
                    <span>Rexau</span>
                    <span>Melke</span>
                </div>
                <div className={styles.windows_listType}>
                    <span>WHS 60</span>
                    <span>WHS 72</span>
                    <span>EUROLINE</span>
                    <span>SOFTLINE 70</span>
                    <span>SOFTLINE 82</span>
                </div>
                <div className={styles.windows_listWindow}>
                    <div className={styles.windows_item}>
                        <div className={styles.windows_top}>
                            <img src="/window1.png"></img>
                            <span>Одностворчатое окно</span>
                        </div>
                        <div className={styles.windows_bottom}>
                            <div>
                                <span>Размер</span>
                                <span>1000х1000</span>
                            </div>
                            <div>
                                <span>Профиль</span>
                                <span>WHS 72</span>
                            </div>
                            <div>
                                <span>Стеклопакет</span>
                                <span>32 мм</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.windows_item}>
                        <div className={styles.windows_top}>
                            <img src="/window1.png"></img>
                            <span>Одностворчатое окно</span>
                        </div>
                        <div className={styles.windows_bottom}>
                            <div>
                                <span>Размер</span>
                                <span>1000х1000</span>
                            </div>
                            <div>
                                <span>Профиль</span>
                                <span>WHS 72</span>
                            </div>
                            <div>
                                <span>Стеклопакет</span>
                                <span>32 мм</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.windows_item}>
                        <div className={styles.windows_top}>
                            <img src="/window1.png"></img>
                            <span>Одностворчатое окно</span>
                        </div>
                        <div className={styles.windows_bottom}>
                            <div>
                                <span>Размер</span>
                                <span>1000х1000</span>
                            </div>
                            <div>
                                <span>Профиль</span>
                                <span>WHS 72</span>
                            </div>
                            <div>
                                <span>Стеклопакет</span>
                                <span>32 мм</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.installment}>
                <img className={styles.installment_img} src="/imgIn.webp"></img>
                <div className={styles.installment_info}>
                    <span className={styles.installment_title}>
                        Окна в рассрочку
                    </span>
                    <p>
                        Благодаря сервису Всегда.Да! мы предлагаем удобные
                        программы покупки в рассрочку без переплат.
                    </p>
                    <div className={styles.installment_list}>
                        <div className={styles.installment_listItem}>
                            <div>
                                <img src="/smile.svg"></img>
                                <span>Легко</span>
                            </div>
                            <p>Предоплата от 0%;</p>
                            <p>Без справки о доходах, залогов и поручителей.</p>
                        </div>
                        <div className={styles.installment_listItem}>
                            <div>
                                <img src="/air.svg"></img>
                                <span>Бычтро</span>
                            </div>
                            <p>Оформление за 20 минут;</p>
                            <p>Оформление нашим менеджером.</p>
                        </div>
                        <div className={styles.installment_listItem}>
                            <div>
                                <img src="/like.svg"></img>
                                <span>Удобно</span>
                            </div>
                            <p>Оформление одновременно с заказом окон. </p>
                            <p>Возможность досрочного погашения.</p>
                        </div>
                        <div className={styles.installment_listItem}>
                            <div>
                                <img src="/peg.svg"></img>
                                <span>Выгодно</span>
                            </div>
                            <p>Рассрочка на 6 месяцев под 0% годовых.</p>
                            <p></p>
                        </div>
                    </div>
                    <button className={styles.installment_button}>
                        Оставить заявку
                    </button>
                </div>
            </section>

            <section className={styles.options}>
                <span>Дополнительные опции</span>
                <p>
                    Придать завершенный вид вашим пластиковым окнам и дверям, а
                    также сделать их функциональными в использовании помогут
                    аксессуары от нашей компании.
                </p>
                <div>
                    <div className={styles.options_item}>
                        <img src="/price/dark.png"></img>
                        <span>Нестандартные формы</span>
                    </div>
                    <div className={styles.options_item}>
                        <img src="/price/dark.png"></img>
                        <span>Нестандартные формы</span>
                    </div>
                    <div className={styles.options_item}>
                        <img src="/price/dark.png"></img>
                        <span>Нестандартные формы</span>
                    </div>
                    <div className={styles.options_item}>
                        <img src="/price/dark.png"></img>
                        <span>Нестандартные формы</span>
                    </div>
                    <div className={styles.options_item}>
                        <img src="/price/dark.png"></img>
                        <span>Нестандартные формы</span>
                    </div>
                    <div className={styles.options_item}>
                        <img src="/price/dark.png"></img>
                        <span>Нестандартные формы</span>
                    </div>
                </div>
            </section>

            <section className={styles.catalog}>
                <div>
                    <span>Окна</span>
                    <span>Алюминевые окна</span>
                    <span>Раздвижые окна</span>
                    <span>Балконный блок</span>
                    <span>REHAU</span>
                </div>
                <div>
                    <span>Балконы и лоджии</span>
                    <span>Остекление квартир</span>
                    <span>Отделка балкона</span>
                    <span>Французкое остекление</span>
                    <span>Безрамное остекление</span>
                    <span>Холодное остекление</span>
                    <span>Теплое остекление</span>
                </div>
                <div>
                    <span>Котеджи</span>
                    <span>Остекление конеджей</span>
                    <span>Остекление беседок</span>
                    <span>Остекление веранд</span>
                    <span>Остекление террас</span>
                </div>
                <div>
                    <span>Двери</span>
                    <span>Раздвижные двери</span>
                    <span>ОЮалконные двери</span>
                    <span>Офисные двери </span>
                    <span>Входные двери</span>
                </div>
                <div>
                    <span>Информация</span>
                    <span>Бесплатный замер</span>
                    <span>Оплата заказа</span>
                    <span>Полезные статьи</span>
                    <span>Расрочка</span>
                    <span>Контакты</span>
                    <span>Доставка</span>
                    <span>Гарантия</span>
                    <span>Вакансия</span>
                    <span>Акция</span>
                </div>
            </section>
        </div>
    )
}
