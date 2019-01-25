import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const AppStyles = {
  component: {
    headerView: {
      marginTop: hp('0.5%')
    },
    phocosLogo: {
      height: hp('28%'),
      width: wp('48%'),
      alignSelf: 'center'
    },
    hamburgerIcon: {
      fontSize: wp('13%'),
      color: '#FFFFFF'
    },
    informationText: {
      fontSize: wp('5.5%'),
      fontWeight: 'bold',
      color: '#FFFFFF',
      textAlign: 'center'
    },
    segButton: {
      borderColor: '#FFFFFF',
      borderWidth: wp('1%'),
      borderRadius: wp('5%'),
      width: wp('30%')
    },
    segText: {
      fontSize: wp('5.5%'),
      color: '#FFFFFF'
    }
  },
  screen: {
    linearGradient: {
      flex: 1
    },
    contentContainer: {
      marginHorizontal: wp('6.5%')
    },
    acquireView: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: hp('1%')
    },
    betweenBox: {
      marginBottom: hp('0.7%')
    }
  }
};
export default AppStyles;
