import React from 'react';
import CardItem from './CardItem';

function CardList(props) {

  return (
    props.cardItems.map(cardItem => {
      return <CardItem key={cardItem.src} cardItem={cardItem} />
    })

  );
}

export default CardList;