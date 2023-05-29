import React from 'react';
// import './RatingStar.css';

interface RatingStarProps {
    value: number;
    name: String;
}

const RatingStar: React.FC<RatingStarProps> = ({ value, name }) => {
    const starCount = 5;
    const highlightedStarCount = Math.floor(value);

    const renderStars = () => {
        const stars = [];

        for (let i = 0; i < starCount; i++) {
            const starClassName =
                i < highlightedStarCount ? 'star highlighted' : 'star';

            stars.push(
                <span key={i} className={starClassName}>
                    ★
                </span>
            );
        }

        return stars;
    };

    // return <div className="rating-star">{renderStars()}</div>;
    return <>
        <span>{name}</span>     <span className="rating-star">{renderStars()}</span>
    </>
};

export default RatingStar;
