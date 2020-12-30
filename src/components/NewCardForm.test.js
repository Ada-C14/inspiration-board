import React from 'react';
import { render, cleanup } from '@testing-library/react'
import NewCardForm from './NewCardForm';


describe('NewCardForm', () => {
  test('that it matches the existing snapshot of NewCardForm', () => {
    // Arrange-Act
    const { asFragment } = render(
      <NewCardForm
      onChangeCard={() => { }} onSubmitCard={() => { }}
      />
    );

    // Assert
    expect(asFragment()).toMatchSnapshot();
    cleanup();
  });
});