import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

const Card = (props) => {
  // return (
  //   <div className="card">
  //     {props.text}
  //     {props.emoji}

  //   </div>
  // )
  return (

    <div className="card">
      {/* <h3 className={props.present ? 'present' : 'absent'}>{props.fullName}</h3> */}
      {/* <input value={props.fullName} onChange={onFullNameInputChange} /> */}

        {props.text}
        {props.emoji}

        <button
        onClick={() => props.deleteCardCallback(props.id)}
        
        className="delete-btn"
      >
        Delete
      </button>
      {/* <button onClick={onButtonClick}>
        Mark {props.present ? 'Absent' : 'Present'}
      </button> */}
    </div>
  );
};


Card.propTypes = {

};

export default Card;
