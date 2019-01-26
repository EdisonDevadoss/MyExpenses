import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text } from 'native-base';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './GradientButtonStyleSheet';
import { defaultColors } from '../../config';

const GradientButton = (props) => {
  return (
    <TouchableOpacity>
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
  buttonName: PropTypes.string
};

export default GradientButton;
