import React from 'react';
import { View, Text } from 'react-native';
import DatePickers from '../DatePickerBox';

const renderDatePickerBox = (props) => {
  const {
    input: { onChange, ...restInput },
    meta: { touched, error }
  } = props;

  return (
    <View>
      <DatePickers {...restInput} {...props} onDateChange={onChange} />
      {touched && error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};

export default renderDatePickerBox;
