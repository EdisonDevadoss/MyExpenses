import React from 'react';
import { View, Text } from 'react-native';
import InputBox from '../InputBox';

const renderInputBox = (props) => {
  const {
    input: { onChange, ...restInput },
    meta: { touched, error }
  } = props;

  return (
    <View>
      <InputBox {...restInput} {...props} onChange={onChange} />
      {touched && error && <Text style={{ color: 'red' }}>{error}</Text>}
    </View>
  );
};

export default renderInputBox;
