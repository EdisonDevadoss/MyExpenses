import React from 'react';
import PropTypes from 'prop-types';
import { View, Container, Text, Toast } from 'native-base';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import styles from './SigninScreenStyleSheet';
import LinearGradient from 'react-native-linear-gradient';
import ExpensesHeader from '../../components/ExpensesHeader';
import renderInputBox from '../../components/RenderInputBox';
import { defaultColors } from '../../config';
import GradientButton from '../../components/GradientButton';
import { signin } from '../../redux/actions/Authentication';
import { email, password } from '../../lib/validate';

class SigninScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object,
    start: PropTypes.bool,
    dispatch: PropTypes.func,
    handleSubmit: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  onSignin = (values) => {
    const { email, password } = values;
    this.props.dispatch(signin(email, password)).then(
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
          <Text style={styles.headerText}>Sign in</Text>
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

            <GradientButton
              buttonName="Sigin"
              onPress={handleSubmit(this.onSignin)}
            />
            <Text
              style={styles.info}
              disabled={start}
              onPress={() => navigation.navigate('Signup')}
            >
              If you do not have account? Please sign up
            </Text>
          </View>
        </LinearGradient>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  start: state.Signin.start
});

const Signin = reduxForm({
  form: 'signin'
})(SigninScreen);

export default connect(mapStateToProps)(Signin);
