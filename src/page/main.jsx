import styles from './main.module.scss'
import { Header } from '../components/header/header'
import { Footer } from '../components/footer/footer'
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
                <div className={styles.price_arrowL}>
                <img src='/arrowL.svg'></img>
                </div>
                <div className={styles.price_arrowR}>
                    <img src='/arrowR.svg'></img>
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
                <div className={styles.windows_main}>
                    <div className={styles.windows_mainTop}>
                        <span>VEKA WHS 60</span>
                        <span>VEKA WHS 72</span>
                        <span>VEKA EUROLINE 58</span>
                        <span>VEKA SOFTLINE 70</span>
                        <span>VEKA SOFTLINE 82</span>
                    </div>
                    <div className={styles.windows_mainMiddle}>
                        <img className={styles.windows_arrowL} src='/arrowL.svg'></img>
                        <img className={styles.windows_arrowR} src='/arrowR.svg'></img>
                        <img src='/win3.png'></img>
                        <div className={styles.windows_mainInfo}>
                            <span className={styles.windows_mainTitle}>VEKA WHS 60 <span>Практичное решение</span></span>
                            <p>Современный и недорогой профиль Veka WHS 60, подойдет для любых целей. Veka WHS 60 - совместная разработка немецких и английских специалистов. Четыре воздушные камеры, вместо привычных трех в профильных системах до 60 мм, дают улучшенные характеристики окна по энергосбережению и звукоизоляции.</p>
                            <span className={styles.windows_mainPrice}>от 6 305 р./м2</span>
                            <div className={styles.windows_mainButton}>
                                <button>Рассчитать стоимость</button>
                                <button>Помощь консультанта</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.windows_mainList}>
                        <span>Одностворчатые</span>
                        <span>Двухстворчатые</span>
                        <span>Трехстворчатые</span>
                        <span>Балконный блок</span>
                    </div>
                    <div className={styles.windows_mainBottom}>
                        <img src='/win2.png'></img>
                        <div>
                            <div className={styles.windows_type}>
                                <div>
                                <span className={styles.windows_type_title}>Одностворчатые</span>
                                <span className={styles.windows_type_key}>«Под ключ» <span>10 800 р.</span></span>
                                </div>
                                <div>
                                <span className={styles.windows_type_sale}>СКИДКА 20%<span>при заказе прямо сейчас</span></span>
                                <span className={styles.windows_type_price}>7 920 р.</span>
                                </div>
                            </div>
                            <div className={styles.windows_calculate}>
                                <div>
                                    <img src='/layer.svg'></img>
                                    <span>600 х 1200 мм (0,72 м2)</span>
                                </div>
                                <p>Поворотно-откидная створка <span>WHS 60:</span> 4 камеры, 60 мм
    Стеклопакет: 32 мм, энергосберегающий</p>
                                <button>Рассчитать</button>
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

            <section className={styles.faq}>
                <div className={styles.faq_top}>
                    <div>
                        <span>
                            16 наиболее частых вопросов об окнах, о том как
                            происходит заказ, монтаж, гарантийное обслуживание и
                            т.д. и ответы на них
                        </span>
                        <button>Узнать ответы на вопросы</button>
                    </div>
                    <img src="/voprosiOkno.jpg"></img>
                </div>
                <div className={styles.faq_middle}>
                    <span>Вся информация об окнах уже через минуту</span>
                    <a href="tel:84952663901">+7495 266-39-01</a>
                </div>
                <div className={styles.faq_bottom}>
                    <div className={styles.faq_bottomItem}>
                        <img src="/sale.svg"></img>
                        <div>
                            <span>УЗНАЙТЕ СТОИМОСТЬ ОСТЕКЛЕНИЯ</span>
                            <ul className={styles.faq_list}>
                                <li>
                                    Наши консультанты сделают расчёт Ваших окон
                                    в производственной программе Прямо по
                                    телефону.
                                </li>
                                <li>Расскажут об акциях и скидках.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.faq_bottomItem}>
                        <img src="/line2.svg"></img>
                        <div>
                            <span>ПРОКОНСУЛЬТИРУЕМ О ЗАМЕРЕ ОКОН</span>
                            <ul className={styles.faq_list}>
                                <li>
                                    Услуга замера в "Русских окнах" бесплатная и
                                    ни к чему Вас не обязывает.
                                </li>
                                <li>
                                    Назначьте удобное Вам время для приезда
                                    замерщика.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.faq_bottomItem}>
                        <img src="/drel.svg"></img>
                        <div>
                            <span>РАССКАЖЕМ ВСЁ О МОНТАЖЕ ОКОН</span>
                            <ul className={styles.faq_list}>
                                <li>
                                    Что включает в себя услуга монтажа, сколько
                                    стоит и что мы делаем бесплатно.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <button className={styles.faq_button}>
                    ЗАКАЖИТЕ КОНСУЛЬТАЦИЮ - МЫ ПЕРЕЗВОНИМ В ТЕЧЕНИЕ 15 МИНУТ
                </button>
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
            <Footer />
        </div>
    )
}
