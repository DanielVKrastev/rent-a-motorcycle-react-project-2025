export default function MotorcycleRent() {
    return (
        <>
            <div className="page-2-boxs">
                <form id="form-reservation" method="post" target="" action="" />
                <div className="page-box-left" id="page-box-left">
                    <div className="moto-img">
                        <img src="images/honda_cbr.png" alt="" />
                    </div>
                    <div className="moto-title">
                        <h2>Honda CBR 600RR </h2>
                    </div>
                    <div className="moto-type">
                        <h3>спортен&gt;</h3>
                    </div>
                    <div className="moto-specs">
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-moto-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">600 куб</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-horse-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">115 кн</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-speed-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">266 км/ч</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-calendar-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">2009 г.</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-weight-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">210 кг.</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-fuel-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">20 л.</div>
                        </div>
                        <div className="moto-specs-box">
                            <div className="moto-specs-icons">
                                <img src="/images/icons/icons8-certificate-50.png" alt="" />
                            </div>
                            <div className="moto-specs-text">A</div>
                        </div>
                    </div>
                    <hr />
                    {/* Start section for Include in price */}
                    <section className="include-price">
                        <div className="subtitle">
                            <h2>Включено в цената</h2>
                            <h3>ВСИЧКИ ОБИЧАТ БЕЗПЛАТНИТЕ НЕЩА!</h3>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-motorcycle-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">Гарантиран модел</div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-shake-phone-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">Държач за телефон</div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-odometer-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                Без ограничения на пробега
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-jacket-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">Включена екипировка</div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-petrol-full-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                Пълен резервоар с гориво
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-suitcase-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">Куфар за мотор</div>
                        </div>
                        <div className="clearfix" />
                    </section>
                    {/* End section for include in price */}
                    <hr />
                    {/* Start section for add-ons option */}
                    <section className="add-option" id="sumCheckboxes">
                        <div className="subtitle">
                            <h2>Налични добавки</h2>
                            <h3>ИСКАШ НЯКАКВА ДОПЪЛНИТЕЛНА ЕКСТРА?</h3>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-jacket-passager-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-equipment"
                                    defaultValue={25.0}
                                    data-amount={25.0}
                                    
                                />
                                Екипировка за пасажер <b>+ 25 лв.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-helmet-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-helmet"
                                    defaultValue={20.0}
                                    data-amount={20.0}
                                    
                                />
                                Каска за пасажер <b>+ 20 лв.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-petrol-empty-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-tank"
                                    defaultValue={60.0}
                                    data-amount={60.0}
                                    
                                />
                                Върни с празен резервоар <b>+ 60 лв.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-airport-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-delivery-airport"
                                    defaultValue={25.0}
                                    data-amount={25.0}
                                   
                                />
                                Доставяне /летище/ <b>+ 25 лв.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-airport-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-return-airport"
                                    defaultValue={25.0}
                                    data-amount={25.0}
                                   
                                />
                                Връщане /летище/ <b>+ 25 лв.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-delivery-hotel"
                                    defaultValue={20.0}
                                    data-amount={20.0}
                                   
                                />
                                Доставяне /хотел/ <b>+ 20 лв.</b>
                            </div>
                        </div>
                        <div className="container-moto-rent">
                            <div className="container-moto-rent-icons">
                                <img src="/images/icons/icons8-5-star-hotel-64.png" alt="" />
                            </div>
                            <div className="container-moto-rent-text">
                                <input
                                    form="form-reservation"
                                    type="checkbox"
                                    name="add-options-return-hotel"
                                    defaultValue={20.0}
                                    data-amount={20.0}
                                   
                                />
                                Връщане /хотел/ <b>+ 20 лв.</b>
                            </div>
                        </div>
                        <div className="clearfix" />
                    </section>
                    {/* End section for add-ons option */}
                    <hr />
                    {/* Start section for policy rental */}
                    <section className="policy-rent">
                        <div className="subtitle">
                            <h2>Политика за наемане</h2>
                            <h3>НЕЩА КОИТО ТРЯБВА ДА ЗНАЕТЕ!</h3>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-dolar-64.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                <b>Платете сега 20% от сумата</b>, а останалото ще платите на място.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-refund-50.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                Може да анулирате <b>заявката 7 дни преди дата на наемане.</b>{" "}
                                Получавате пълната сума.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-road-64.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                Включен е <b>неограничен</b> пробег.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-man-50.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                Трябва да сте на <b>поне 21 години</b> и да имате 12 месеца
                                шофьорски стаж.
                            </div>
                            <div className="policy-box-text">
                                Трябва да сте на <b>поне 19 години</b> и да имате 12 месеца
                                шофьорски стаж.
                            </div>
                            <div className="policy-box-text">
                                Трябва да сте на <b>поне 17 години</b> и да имате 12 месеца
                                шофьорски стаж.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-book-48.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                Този мотоциклет изисква свидетелство - <b>категория А</b>.
                            </div>
                            <div className="policy-box-text">
                                Този мотоциклет изисква свидетелство - <b>категория А2</b>.
                            </div>
                            <div className="policy-box-text">
                                Този мотоциклет изисква свидетелство - <b>категория А1</b>.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-delivery-64.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                {" "}
                                Услугите за доставка/прибиране за са{" "}
                                <b>района на Варна и по преценка</b>.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-earth-50.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                Не е позволено преминаване в <b>друга държава</b>.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-more-50.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                Включеното в цената и платените добавки зависят от наличността.
                            </div>
                        </div>
                        <div className="policy-box">
                            <div className="policy-box-icon">
                                <img src="/images/icons/policy/icons8-call-50.png" alt="" />
                            </div>
                            <div className="policy-box-text">
                                Ако имате въпроси и някакви изисквания, обърнете се към{" "}
                                <a href="/about.php">"Контакти"</a>{" "}
                            </div>
                        </div>
                        <div className="clearfix" />
                    </section>
                    {/* End section for policy rental */}
                    <hr />
                    {/* Start section for comments */}
                    <section className="comment">
                        <div className="subtitle">
                            <h2>Последни отзиви</h2>
                            <h3>ОТ НАШИТЕ КЛИЕНТИ.</h3>
                        </div>
                        <br />
                        <div className="comment-box">
                            <div className="comment-name">Daniel</div>
                            <div className="comment-date"> - 03 March 2025 - </div>
                            <div className="comment-rating">
                                <img src="/images/ratings/rating-5.png" alt="" />
                            </div>
                            <div className="comment-text">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
                                exercitationem nulla ea, aliquam dolor nihil dolores quidem quos
                                commodi esse eum animi nostrum distinctio molestias temporibus
                                possimus vero. Dolor, sit?
                            </div>
                        </div>
                        {/* Form for new comments */}
                        <form id="form-comment" action="" method="post" />
                        <div className="review-form">
                            <div className="subtitle">
                                <h2>Оставете вашия отзив</h2>
                                <h3>НИЕ ЦЕНИМ ВАШЕТО МНЕНИЕ.</h3>
                            </div>
                            <label htmlFor="name">Имена:</label>
                            <input
                                form="form-comment"
                                type="text"
                                id="name"
                                name="name"
                                required=""
                            />
                            <br />
                            <label htmlFor="email">E-mail:</label>
                            <input
                                form="form-comment"
                                type="email"
                                id="email"
                                name="email"
                                required=""
                            />
                            <br />
                            <label htmlFor="rating">Оценка:</label>
                            <div className="rating">
                                <span className="star">
                                    ★
                                </span>
                                <span className="star">
                                    ★
                                </span>
                                <span className="star">
                                    ★
                                </span>
                                <span className="star">
                                    ★
                                </span>
                                <span className="star">
                                    ★
                                </span>
                                <input
                                    form="form-comment"
                                    type="hidden"
                                    defaultValue={0}
                                    className="rating-input"
                                    name="rating"
                                    required=""
                                />
                            </div>
                            <br />
                            <label htmlFor="comment">Отзив:</label>
                            <textarea
                                form="form-comment"
                                id="comment"
                                name="comment"
                                rows={4}
                                cols={50}
                                required=""
                                defaultValue={""}
                            />
                            <br />
                            <input
                                form="form-comment"
                                type="submit"
                                defaultValue="Изпрати"
                                name="submit-comment"
                                className="btn"
                            />
                        </div>
                    </section>
                    {/* End section for comments */}
                </div>
                {/* Start rent box */}
                <div className="page-box-right text-center" id="page-box-right">
                    <div className="btn-close-box">
                        <img
                            src="/images/icons/icons8-close-48.png"
                            alt=""
                            
                        />
                    </div>
                    <div className="rent-for-days js-rent-for-days">Наем за 1 ден</div>
                    <input
                        form="form-reservation"
                        type="hidden"
                        name="rent-days"
                        defaultValue={1}
                        className="js-rent-for-days-input"
                    />
                    <div className="rent-per-day js-rent-per-day">(70.00 лв. на ден)</div>
                    <input
                        form="form-reservation"
                        type="hidden"
                        name="rent-per-day"
                        defaultValue={70.0}
                        className="js-rent-per-day-input"
                    />
                    <div className="rent-price-sum js-rent-price-sum">70 лв.</div>
                    <input
                        form="form-reservation"
                        type="hidden"
                        name="moto-rent-price"
                        defaultValue={70.0}
                        className="js-moto-rent-price-input"
                    />
                    <input
                        form="form-reservation"
                        type="hidden"
                        name="rent-price-sum"
                        defaultValue={70.0}
                        className="js-rent-price-sum-input"
                    />
                    <br />
                    <hr />
                    <br />
                    <div className="start-rent" id="start-rent">
                        <p>Дата на наемане </p>
                        <input
                            form="form-reservation"
                            type="text"
                            defaultValue=""
                            name="start-rent-date"
                            className="js-start-rent-input"
                            id="start-rent-input"
                            required=""
                        />
                    </div>
                    <div className="end-rent">
                        <p>Дата на отдаване </p>
                        <input
                            form="form-reservation"
                            type="text"
                            defaultValue=""
                            name="end-rent-date"
                            className="js-end-rent-input"
                            id="end-rent-input"
                            required=""
                        />
                    </div>
                    <div className="check-button">
                        <button
                            form="form-reservation"
                            type="submit"
                            name="submit_check_button"
                            id="submit_check_button"
                        >
                            Продължи
                        </button>
                    </div>
                    <hr />
                    <div className="more-rent">
                        <img src="/images/icons/icons8-check-48.png" alt="" />
                        Гъвкаво анулиране
                        <br />
                        <img src="/images/icons/icons8-check-48.png" alt="" />
                        Безплатна корекция
                    </div>
                </div>
                <div className="page-box-right-mobile text-center" id="mobile-box">
                    <div className="rent-for-days js-rent-for-days-mobile">Наем за 1 ден</div>
                    <div className="rent-price-sum js-rent-price-sum-mobile">70 лв.</div>
                    <div className="next-button-mobile">
                        <button >Напред</button>
                    </div>
                </div>
                {/* End rent box */}
            </div>
            <div className="clearfix" />
            <div id="page-boxs-end" />
        </>
    );
}