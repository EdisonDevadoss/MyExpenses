import React from 'react';
import PropTypes from 'prop-types';
import { Picker, Item, Icon } from 'native-base';
import styles from './PickerBoxStyleSheet';

const PickerBox = (props) => {
  return (
    <Item>
      <Icon
        name={props.iconName}
        type={props.iconType}
        style={styles.iconStyle}
      />
      <Picker
        mode="dropdown"
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}
      >
        {props.options.map((option, i) => (
          <Picker.Item label={option.label} value={option.value} key={i} />
        ))}
      </Picker>
    </Item>
  );
};

PickerBox.propTypes = {
  selectedValue: PropTypes.string,
  onValueChange: PropTypes.func,
  options: PropTypes.array,
  iconName: PropTypes.string,
  iconType: PropTypes.string
};

export default PickerBox;
