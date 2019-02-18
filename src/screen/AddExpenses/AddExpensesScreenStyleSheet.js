import { StyleSheet } from 'react-native';
import { AppStyles, defaultColors } from '../../config';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  ...AppStyles.screen,
  formStyle: {
    flex: 1,
    justifyContent: 'center'
  },
  headerText: {
    marginBottom: hp('2%'),
    color: defaultColors.light,
    fontSize: wp('8%'),
    textAlign: 'center'
  }
});

export default styles;
