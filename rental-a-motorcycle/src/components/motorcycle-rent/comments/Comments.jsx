import { useState } from 'react';
import './Comments.css';

export default function Comments({
    comments
}) {
    const [rating, setRating] = useState(0); 

    const handleStarRating = (value) => {
        setRating(value);
    };

    function formatDateString(isoString) {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = date.toLocaleString("en-US", { month: "long" });
        const year = date.getFullYear(); 
    
        return `${day} ${month} ${year}`;
    }

    return (
        <>
            {/* Start section for comments */}
            <section className="comment">
                <div className="subtitle">
                    <h2 className="text-2xl font-bold">Latest Feedback</h2>
                    <h3 className="text-4xl font-bold mt-1">WHAT OUR CLIENTS SAY.</h3>
                </div>
                <br />
                {comments.slice(0, 5).map(comment => (
                    <div key={comment._id} className="comment-box">
                        <div className="comment-name">{comment.email}</div>
                        <div className="comment-date"> - {formatDateString(comment.date)} - </div>
                        <div className="comment-rating">
                            <img src={`/images/ratings/rating-${comment.rating}.png`} alt={`rating-${comment.rating}`} />
                        </div>
                        <div className="comment-text">
                            {comment.commentText}
                        </div>
                    </div>
                    ))
                }

                {comments.length === 0 && <div className="comment-box">No reviews have been written for this motorcycle.</div> }

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

                        <input form="form-comment" type="hidden" name="rating" value={rating} required />
                    </div>
                    <br />
                    <label htmlFor="comment">Review:</label>
                    <textarea
                        form="form-comment"
                        id="comment"
                        name="commentText"
                        rows={4}
                        cols={50}
                        required
                        defaultValue={""}
                    />
                    <br />
                    <input
                        form="form-comment"
                        type="submit"
                        value="Send"
                        name="submit-comment"
                        className="btn btn-secondary"
                    />
                </div>
            </section>
            {/* End section for comments */}
        </>
    );
}