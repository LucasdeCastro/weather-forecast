import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import UnityControls from './index';

describe('UnityControls', () => {
  it('render - click on selected button', () => {
    const onClick = jest.fn();
    const { rerender } = render(<UnityControls setUnity={onClick} unity="metric" />);

    fireEvent.click(screen.getByText('ºC'));
    expect(onClick.mock.calls.length).toBe(0);

    rerender(<UnityControls setUnity={onClick} unity="imperial" />);

    fireEvent.click(screen.getByText('ºC'));
    expect(onClick.mock.calls.length).toBe(1);
    expect(onClick.mock.calls[0][0]).toBe('metric');

    rerender(<UnityControls setUnity={onClick} unity="metric" />);

    fireEvent.click(screen.getByText('ºF'));

    expect(onClick.mock.calls.length).toBe(2);
    expect(onClick.mock.calls[1][0]).toBe('imperial');
  });
});
