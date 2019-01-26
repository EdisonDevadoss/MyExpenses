import React from 'react';
//import PropTypes from 'prop-types';
import { View, Container, Text } from 'native-base';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import LinearGradient from 'react-native-linear-gradient';
import ExpensesHeader from '../../components/ExpensesHeader';
import InputBox from '../../components/InputBox';
import renderInputBox from '../../components/RenderInputBox';
import styles from './SignupScreenStyleSheet';
import { defaultColors } from '../../config';
import GradientButton from '../../components/GradientButton';
import { required, email, password, reEnterPassword } from '../../lib/validate';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { start, navigation } = this.props;
    console.log('success is', start);
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
            <Field
              name={'email'}
              iconName="mail"
              iconType="Entypo"
              placeholder="Enter your email address"
              keyboardType={'email-address'}
              component={renderInputBox}
              validate={email}
            />

            <Field
              name={'password'}
              iconName="lock"
              iconType="EvilIcons"
              placeholder="Enter your password"
              secureTextEntry={true}
              component={renderInputBox}
              validate={password}
            />
            <GradientButton buttonName="Sigup" />
            <Text
              style={styles.info}
              disabled={start}
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
  start: state.Signup.start
});
const Signup = reduxForm({
  form: 'signup'
})(SignupScreen);

export default connect(mapStateToProps)(Signup);
