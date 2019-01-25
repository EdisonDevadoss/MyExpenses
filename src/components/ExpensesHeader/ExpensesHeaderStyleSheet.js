import { StyleSheet } from 'react-native';
import { AppStyles } from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  ...AppStyles.screen,
  logoImg: {
    marginTop: wp('3%'),
    height: wp('40%'),
    width: wp('50%')
  },
  headerTextStyle: {
    fontSize: wp('5%'),
    flex: 5,
    color: '#FFFFFF'
  },
  loginIconStyle: {
    fontSize: wp('12%'),
    color: '#FFFFFF'
  }
});
export default styles;
