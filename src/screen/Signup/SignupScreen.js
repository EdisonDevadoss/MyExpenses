import React from 'react';
import PropTypes from 'prop-types';
import { View, Container, Text, Toast } from 'native-base';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import LinearGradient from 'react-native-linear-gradient';
import ExpensesHeader from '../../components/ExpensesHeader';
import renderInputBox from '../../components/RenderInputBox';
import styles from './SignupScreenStyleSheet';
import { defaultColors } from '../../config';
import GradientButton from '../../components/GradientButton';
import { signup } from '../../redux/actions/Authentication';
import { email, password, reEnterPassword } from '../../lib/validate';

class SignupScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    handleSubmit: PropTypes.func,
    start: PropTypes.bool
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSignup = (values) => {
    const { email, password } = values;
    this.props.dispatch(signup(email, password)).then(
      () => {
        Toast.show({
          text: 'Signup successfully',
          type: 'success',
          position: 'bottom'
        });
        this.props.navigation.navigate('Home');
      },
      () => {
        Toast.show({
          text: 'Signup failed',
          type: 'danger',
          position: 'bottom'
        });
      }
    );
  };
  render() {
    const { start, navigation, handleSubmit } = this.props;
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
            <Field
              name={'reEnterPassword'}
              iconName="lock"
              iconType="EvilIcons"
              placeholder="Re-Enter your password"
              secureTextEntry={true}
              component={renderInputBox}
              validate={reEnterPassword}
            />
            <GradientButton
              buttonName="Signup"
              onPress={handleSubmit(this.onSignup)}
            />
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
