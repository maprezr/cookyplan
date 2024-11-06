import starIcon from '../../assets/images/StarsRating/RoundStar.svg';

export default function StarRating(props) {    
    const validRating = Math.min(5, Math.max(1, props.rate));
    
    return (
        <div style={{ display: 'flex' }}>
            {[...Array(5)].map((_, index) => (                
                 <img
                 key={index}
                 src={starIcon}
                 alt="star"
                 width="24"
                 height="24"
                 style={{ filter: index < validRating ? 'grayscale(0)' : 'grayscale(80%)' }}
               />
            ))}
        </div>
    )
};