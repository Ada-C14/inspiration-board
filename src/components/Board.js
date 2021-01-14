import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';
import CARD_DATA from '../data/card-data.json';

const Board = () => {
  return (
    <div>
      Board
      <Card/>
    </div>
  )
};
Board.propTypes = {

};

export default Board;
