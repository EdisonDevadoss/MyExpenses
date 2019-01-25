import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  navImg: {
    height: hp('20%'),
    width: wp('30%')
  },
  navText: {
    marginTop: wp('6%'),
    color: '#FFFFFF',
    fontSize: wp('5%'),
    textAlign: 'center'
  }
});

export default styles;
