import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './GradientButtonStyleSheet';
import { defaultColors } from '../../config';

const GradientButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={defaultColors.gradientButtonColors}
        style={styles.linearGradientButtons}
      >
        <Text style={styles.textButtons}>{props.buttonName}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

GradientButton.propTypes = {
  buttonName: PropTypes.string,
  onPress: PropTypes.func
};

export default GradientButton;
