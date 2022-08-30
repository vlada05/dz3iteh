import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import Calendar from 'react-calendar'
import './Cards.css';
import 'react-calendar/dist/Calendar.css';

function Cards() {
  const [date1, onChange1] = useState(new Date());
  const [date2, onChange2] = useState(new Date());
  const [originalCardItems, setOriginal] = useState([{
    src: 'images/img-9.jpg',
    text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
    label: 'Adventure',
    path: '/',
    datefrom: new Date(2022, 11, 20),
    dateto: new Date(2022, 11, 26)
  }, {
    src: 'images/img-2.jpg',
    text: 'Travel through the Islands of Bali in a Private Cruise',
    label: 'Luxyry',
    path: '/',
    datefrom: new Date(2022, 11, 12),
    dateto: new Date(2022, 11, 19)
  }, {
    src: 'images/img-3.jpg',
    text: 'Set Sail in the Atlantic Ocean visiting Uncharted Waters',
    label: 'Mystery',
    path: '/',
    datefrom: new Date(2022, 8, 27),
    dateto: new Date(2022, 9, 4)
  }, {
    src: 'images/img-4.jpg',
    text: 'Experience Football on Top of the Himilayan Mountains',
    label: 'Adventure',
    path: '/',
    datefrom: new Date(2022, 10, 19),
    dateto: new Date(2022, 10, 25)
  }, {
    src: 'images/img-8.jpg',
    text: 'Ride through the Sahara Desert on a guided camel tour',
    label: 'Adrenaline',
    path: '/',
    datefrom: new Date(2021, 9, 1),
    dateto: new Date(2021, 9, 8)
  }]);

  const [cardItems, setCardItems] = useState(originalCardItems);

  useEffect(() => {
    handleList()
  }, [date1, date2]);

  function checkDate() {
    return (date1 >= date2)
  }

  const handleList = () => {
    if (!checkDate()) {
      const result = originalCardItems.filter(cardItem => {
        return (date1 <= cardItem.datefrom && date2 >= cardItem.dateto)
      });
      document.getElementById("warning").style.display = "none";
      setCardItems(
        result
      )
    }
    else {
      document.getElementById("warning").style.display = "block";
      setCardItems(originalCardItems);
    }
  }

  return (
    <div className='cards' id='cards'>
      <h1>Check out these epic Destinations!</h1>
      <h2>Or filter by date</h2>

      <div className="calendar-container">
        <div className="calendar-item"><h2>Start Date</h2>
          <Calendar
            onChange={onChange1}
            value={date1}
          />
        </div>
        <div className="calendar-item"><h2>End Date</h2>
          <Calendar
            onChange={onChange2}
            value={date2}
          />
        </div>

      </div>
      <div id="warning">
        <h1 className="warningText">"Start Date" must be before "End Date"!</h1>
      </div>
      <div className='cards__container' >
        <div className='cards__wrapper'>
          <CardList cardItems={cardItems} />
        </div>
      </div>

    </div>
  );
}

export default Cards;