import React from 'react';
import Card from './Card';
import { render, cleanup } from '@testing-library/react'


describe('Card', () => {
  test('that it matches the existing snapshot of Card', () => {
    // Arrange-Act
    const { asFragment } = render(
      <Card
      text="new card for test"
      onDelete={() => { }}
      />
      // <Card key={card.card.id} id={card.card.id} text={card.card.text} emoji={card.card.emoji} onDelete={props.deleteCard} />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});
