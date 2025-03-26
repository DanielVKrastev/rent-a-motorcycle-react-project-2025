import { useState } from 'react';
import './Comments.css';

export default function Comments() {

    const [rating, setRating] = useState(0); 

    const handleStarRating = (value) => {
        setRating(value);
    };

    return (
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
                        <h2 className="text-2xl font-bold">Leave your review</h2>
                        <h3 className="text-4xl font-bold mt-1">WE APPRECIATE YOUR FEEDBACK.</h3>
                    </div>
                    <div>
                        <label htmlFor="rating">Rating:</label>
                        <div className="rating flex text-2xl">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                    key={star}
                                    onClick={() => handleStarRating(star)}
                                    className={`cursor-pointer px-1 star ${star <= rating ? "text-yellow-500" : "text-gray-300"
                                        }`}
                                >
                                    ★
                                </span>
                            ))}
                        </div>

                        <input type="hidden" name="rating" value={rating} required />
                    </div>
                    <br />
                    <label htmlFor="comment">Review:</label>
                    <textarea
                        form="form-comment"
                        id="comment"
                        name="comment"
                        rows={4}
                        cols={50}
                        required
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