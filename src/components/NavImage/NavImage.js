import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import { Text, Thumbnail } from 'native-base';
import styles from './NavImageStyleSheet';

const NavImage = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Thumbnail
        square
        resizeMode="contain"
        style={styles.navImg}
        source={props.image}
      />
      <Text style={styles.navText}>{props.navName}</Text>
    </TouchableOpacity>
  );
};

NavImage.propTypes = {
  image: PropTypes.number,
  navName: PropTypes.string,
  onPress: PropTypes.func
};
export default NavImage;
