import { StyleSheet } from 'react-native';
import { AppStyles } from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  ...AppStyles.screen,
  navIconRowOne: {
    marginTop: hp('8%'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  navIconRowTwo: {
    marginTop: hp('11%'),
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default styles;
