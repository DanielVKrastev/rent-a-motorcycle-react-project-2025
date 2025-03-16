export default function Comments() {
    return(
        <>
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
                                className="btn btn-secondary"
                            />
                        </div>
                    </section>
                    {/* End section for comments */}
        </>
    );
}