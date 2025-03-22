import './Comments.css';

export default function Comments() {
    return(
        <>
        {/* Start section for comments */}
        <section className="comment">
                        <div className="subtitle">
                            <h2 className="text-2xl font-bold">Latest Feedback</h2>
                            <h3 className="text-4xl font-bold mt-1">WHAT OUR CLIENTS SAY.</h3>
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
                        <div className="review-form">
                            <div className="subtitle">
                                <h2  className="text-2xl font-bold">Leave your review</h2>
                                <h3 className="text-4xl font-bold mt-1">WE APPRECIATE YOUR FEEDBACK.</h3>
                            </div>
                            <label htmlFor="name">Names:</label>
                            <input
                                form="form-comment"
                                type="text"
                                id="name"
                                name="name"
                                required=""
                            />
                            <br />
                            <label htmlFor="rating">Rating:</label>
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
                            <label htmlFor="comment">Review:</label>
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
                                defaultValue="Send"
                                name="submit-comment"
                                className="btn btn-secondary"
                            />
                        </div>
                    </section>
                    {/* End section for comments */}
        </>
    );
}