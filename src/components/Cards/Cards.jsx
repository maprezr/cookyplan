import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import stylesCards from '../Cards/Cards.module.css';
import imgCard from '../../assets/images/imagesHeader/BandejaPaisa.png';

/*
  function Cards({ header, title, text, buttonText, imgSrc }) {
    return (
      <Card className={stylesCards.customCard}>
          <Card.Header className={stylesCards.customTitle}>{header}</Card.Header>
  
          <Card.Img variant="top" src={imgSrc || logo} 
              className={stylesCards.customCard_img}/>
          
          <Card.Body>
            <Card.Title className={stylesCards.customTitle}>{title}</Card.Title>
            <Card.Text className={stylesCards.customCardText}>
              {text}
            </Card.Text>
            <Button variant="primary" className={stylesCards.customButton}>{buttonText}</Button>
          </Card.Body>
      </Card>
    );
  }*/

  function Cards() {
    // Datos de prueba
    const cardData = {
      title: "Bandeja Paisa",
      text: "This is some test text to validate the card component.",
      imgSrc: imgCard
    };
    const CardDataHeader = () => (
      <div className={stylesCards.notranslate}>
        <span style={{ "--i": 1 }}>C</span>
        <span style={{ "--i": 2 }}>o</span>
        <span style={{ "--i": 3 }}>o</span>
        <span style={{ "--i": 4 }}>k</span>
        <span style={{ "--i": 5 }}>e</span>
        <span style={{ "--i": 6 }}>&</span>
        <span style={{ "--i": 7 }}>P</span>
        <span style={{ "--i": 8 }}>l</span>
        <span style={{ "--i": 9 }}>a</span>
        <span style={{ "--i": 10 }}>n</span>
      </div>
    );
    return (
      <div className={stylesCards.Contanier}>
        <div className={stylesCards.cardRow}>
          <div className={`col-sm-4 mb-3 ${stylesCards.cardContainer}`}>
            <Card className={stylesCards.customCard}>
                <Card.Header className={stylesCards.customHeader}>
                  <CardDataHeader />
                </Card.Header>
                <Card.Img variant="top" src={cardData.imgSrc} className={stylesCards.customCard_img}/>
                <Card.Body className={stylesCards.customBody}>
                  <Card.Title className={stylesCards.customTitle}>
                    {cardData.title}
                  </Card.Title>
                  <Card.Text className={stylesCards.customCardText}>
                    {cardData.text}
                  </Card.Text>
                  <Button variant="primary" className={stylesCards.customButton}>Button</Button>
                </Card.Body>
            </Card>
          </div>
          <div className={`col-sm-4 mb-3 ${stylesCards.cardContainer}`}>
            <Card className={stylesCards.customCard}>
                <Card.Header className={stylesCards.customHeader}>
                  <CardDataHeader />
                </Card.Header>
                <Card.Img variant="top" src={cardData.imgSrc} className={stylesCards.customCard_img}/>
                <Card.Body className={stylesCards.customBody}>
                  <Card.Title className={stylesCards.customTitle}>
                    {cardData.title}
                  </Card.Title>
                  <Card.Text className={stylesCards.customCardText}>
                    {cardData.text}
                  </Card.Text>
                  <div className="d-flex justify-content-center">
                    <Button variant="primary" className={stylesCards.customButton}>Button</Button>
                  </div>
                </Card.Body>
            </Card>
          </div>
          <div className={`col-sm-4 mb-3 ${stylesCards.cardContainer}`}>
            <Card className={stylesCards.customCard}>
                <Card.Header className={stylesCards.customHeader}>
                  <CardDataHeader />
                </Card.Header>
                <Card.Img variant="top" src={cardData.imgSrc} className={stylesCards.customCard_img}/>
                <Card.Body className={stylesCards.customBody}>
                  <Card.Title className={stylesCards.customTitle}>
                    {cardData.title}
                  </Card.Title>
                  <Card.Text className={stylesCards.customCardText}>
                    {cardData.text}
                  </Card.Text>
                  <div className="d-flex justify-content-end">
                    <Button variant="primary" className={stylesCards.customButton}>Button</Button>
                  </div>
                </Card.Body>
            </Card>
          </div>
        </div>          
      </div>
    );
  }
export default Cards;