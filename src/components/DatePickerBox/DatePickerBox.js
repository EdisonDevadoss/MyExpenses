import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker, Item, Icon } from 'native-base';
import styles from './DatePickerBoxStyleSheet';

const DatePickers = (props) => {
  let data = new Date();
  let currentYear = data.getFullYear();
  let currentMonth = data.getMonth();
  let currentDay = data.getDate();
  const maximumDate = new Date(currentYear, currentMonth, currentDay);
  const defaultDate = new Date(currentYear, currentMonth, currentDay);
  const minimumDate = new Date(currentYear, currentMonth, currentMonth);
  return (
    <Item>
      <Icon
        name={props.iconName}
        type={props.iconType}
        style={styles.iconStyle}
      />
      <DatePicker
        placeHolderText={props.placeholder}
        onDateChange={props.onDateChange}
        maximumDate={maximumDate}
        defaultDate={defaultDate}
        minimumDate={minimumDate}
        {...props}
        style={styles.textBoxStyle}
      />
    </Item>
  );
};

DatePickers.propTypes = {
  onDateChange: PropTypes.func,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  placeholder: PropTypes.string
};

export default DatePickers;
