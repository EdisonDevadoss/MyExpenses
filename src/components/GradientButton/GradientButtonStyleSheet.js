import { StyleSheet } from 'react-native';
import { AppStyles } from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  ...AppStyles.screen,
  linearGradient: {
    flex: 1
  },
  linearGradientButtons: {
    borderColor: 'white',
    borderWidth: wp('0.5%'),
    height: hp('6.3%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  textButtons: {
    color: 'white',
    fontSize: wp('6%'),
    textAlign: 'center'
  }
});
export default styles;
