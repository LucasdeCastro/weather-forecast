import React from 'react';
import {
  render, fireEvent, screen,
} from '@testing-library/react';
import ForecastList from './index';

describe('ForecastList', () => {
  it('day-list', () => {
    const onClick = jest.fn();
    render(<ForecastList
      type="day-list"
      index={0}
      min={10}
      max={20}
      date="2022-02-02"
      temperature={12}
      icon="01n"
      onClick={onClick}
      isActive={false}
    />);

    fireEvent.click(screen.getByText('02/02'));

    expect(onClick.mock.calls.length).toBe(1);

    const { container } = render(<ForecastList
      type="day-list"
      index={0}
      min={10}
      max={20}
      date="2022-02-02"
      temperature={12}
      icon="01n"
      onClick={onClick}
      isActive
    />);

    expect(container.firstChild).toHaveClass('item-active');
  });

  it('hour-list', () => {
    render(<ForecastList
      type="hour-list"
      index={0}
      min={10}
      max={20}
      date="10:00:00"
      temperature={12}
      icon="01n"
      isActive={false}
    />);

    expect(screen.getByText('10:00')).toBeTruthy();
  });
});
