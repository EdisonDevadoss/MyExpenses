import React from 'react';
//import PropTypes from 'prop-types';
import { View, Container, Text } from 'native-base';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import ExpensesHeader from '../../components/ExpensesHeader';
import InputBox from '../../components/InputBox';
import styles from './SignupScreenStyleSheet';
import { defaultColors } from '../../config';
import GradientButton from '../../components/GradientButton';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { phoneNoSignin, navigation } = this.props;
    console.log('phoneNoSignin is', phoneNoSignin);
    return (
      <Container>
        <LinearGradient
          colors={defaultColors.grandientColors}
          style={styles.linearGradient}
        >
          <ExpensesHeader
            iconName={'home-currency-usd'}
            iconType={'MaterialCommunityIcons'}
            userActivity={() => navigation.navigate('Home')}
          />
          <Text style={styles.headerText}>Sign up</Text>
          <View style={[styles.formStyle, styles.contentContainer]}>
            <InputBox
              iconName="mail"
              iconType="Entypo"
              placeholder="Enter your email address"
              keyboardType={'email-address'}
            />
            <InputBox
              iconName="lock"
              iconType="EvilIcons"
              placeholder="Enter your password"
              secureTextEntry={true}
            />
            <GradientButton buttonName="Sigup" />
            <Text
              style={styles.info}
              onPress={() => navigation.navigate('Signup')}
            >
              If you already have account ? Please sign in
            </Text>
          </View>
        </LinearGradient>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  phoneNoSignin: state.phoneNoSignin
});

export default connect(mapStateToProps)(SignupScreen);
