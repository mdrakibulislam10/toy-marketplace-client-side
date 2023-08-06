import { FaQuoteRight } from "react-icons/fa";

const ReviewCard = ({ review }) => {
    const { reviewerImage, reviewerName, reviewText } = review;

    return (
        <div className="text-center border px-2 py-4 rounded shadow" data-aos="fade-up" data-aos-duration="1000">
            <img className="rounded-full w-20 mx-auto" src={reviewerImage && reviewerImage} alt="" />
            <h2 className="text-xl font-semibold my-3">{reviewerName && reviewerName}</h2>
            {
                reviewText.length < 90
                    ?
                    <p className="text-gray-600">{reviewText && reviewText}</p>
                    :
                    <p className="text-gray-600" title={reviewText && reviewText}>{reviewText && (reviewText).slice(0, 100)}...</p>
            }
            <p className="text-2xl my-4"><FaQuoteRight className="mx-auto" /></p>
        </div>
    );
};

export default ReviewCard;