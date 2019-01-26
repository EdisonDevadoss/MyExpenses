import React from 'react';
import PropTypes from 'prop-types';
import { Item, Input, Icon } from 'native-base';
import styles from './InputBoxStyleSheet';
const InputBox = (props) => {
  return (
    <Item>
      <Icon
        name={props.iconName}
        type={props.iconType}
        style={styles.iconStyle}
      />
      <Input {...props} style={styles.textBoxStyle} />
    </Item>
  );
};
InputBox.propTypes = {
  iconName: PropTypes.string,
  iconType: PropTypes.string
};

export default InputBox;
