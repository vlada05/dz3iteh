import React from 'react'
import { Link } from 'react-router-dom';

function CardItem(props) {

    const cardItem = props.cardItem;
    var datumOdIspis = props.cardItem.datefrom.getDate() + '.' 
    + (props.cardItem.datefrom.getMonth()+ 1) + '.' + props.cardItem.datefrom.getFullYear();

    var datumDoIspis = props.cardItem.dateto.getDate() + '.' 
    + (props.cardItem.dateto.getMonth()+ 1) + '.' + props.cardItem.dateto.getFullYear();

    return (
        <div className="card-item">
            <Link className='cards__item__link' to={cardItem.path}>
                <figure className='cards__item__pic-wrap' data-category={cardItem.label}>
                    <img
                        className='cards__item__img'
                        alt='Travel Image'
                        src={cardItem.src}
                    />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{cardItem.text}</h5>
                    <h4 aliclassName='cards__item__date'>From: {datumOdIspis} - To: {datumDoIspis}</h4>
                </div>
            </Link>

        </div>
    )
}

export default CardItem