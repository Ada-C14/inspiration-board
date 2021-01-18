import React from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  return (
    <div className="card">
    <div className="card__content">
      <p className="card__content-text">{ props.text ? props.text : null}</p>
      <p className="card__content-emoji">{props.emoji ? emoji.getUnicode(props.emoji): null}</p>
    </div>
    <div>      
        <button className='card_delete' onClick={() => props.deleteCardCallBack(props.id)}>x</button>
      </div>
  </div>	  
)
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number.isRequired,
  deleteCardCallBack: PropTypes.func.isRequired,
};
export default Card;
