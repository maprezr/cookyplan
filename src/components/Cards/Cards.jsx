import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import stylesCards from '../Cards/Cards.module.css';
import star from '../../assets/images/RecentRecipees/star.png'
import StarRating from '../StarRating/StarRating';

  function Cards(props) {    
    const cardData = props.card;   
    return (
          
            <Card className={stylesCards.customCard}>
                <Card.Title className={stylesCards.customTitle}>
                    {cardData.title}
        </Card.Title> 
        <div className={stylesCards.imgContainer }>
          <Card.Img variant="top" src={cardData.image} className={stylesCards.customCard_img} />                
        </div>
        <div>
         
        </div>
        <Card.Body className={stylesCards.customBody}>
          <div className='star'>
            <StarRating rate={props.card.rating}></StarRating>
          {/* <img src={star} className='star'/>
            {props.card.rating} */}
          </div>        
          <Card.Text className={stylesCards.customCardText}>
            
                    {cardData.description}
                  </Card.Text>
                  
                </Card.Body>
            </Card>          
    );
  }
export default Cards;