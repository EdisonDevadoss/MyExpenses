import React from 'react';
import PropTypes from 'prop-types';
import { View, Container, Text } from 'native-base';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import GradientButton from '../../components/GradientButton';
import ExpensesHeader from '../../components/ExpensesHeader';
import renderDatePickerBox from '../../components/RenderDatePickerBox';
import renderInputBox from '../../components/RenderInputBox';
import renderPickerBox from '../../components/RenderPickerBox';
import styles from './AddExpensesScreenStyleSheet';
import { defaultColors, constant } from '../../config';
import { date, particulars, amount, required } from '../../lib/validate';

class AddExpensesScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      radioButton: 'value1'
    };
  }
  onAddExpenses = (values) => {
    console.log('values', values);
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

          <Text style={styles.headerText}>Add Expenses</Text>
          <View style={[styles.formStyle, styles.contentContainer]}>
            <Field
              name={'date'}
              iconName="date-range"
              iconType="MaterialIcons"
              placeholder="Select date"
              component={renderDatePickerBox}
              validate={date}
            />
            <Field
              name={'type'}
              iconName="rupee"
              iconType="FontAwesome"
              component={renderPickerBox}
              options={constant.genderOptions}
              validate={required}
            />

            <Field
              name={'amount'}
              iconName="rupee"
              iconType="FontAwesome"
              placeholder="Enter amout"
              keyboardType={'number-pad'}
              component={renderInputBox}
              validate={amount}
            />
            <Field
              name={'particulars'}
              iconName="rupee"
              iconType="FontAwesome"
              placeholder="Particulars"
              component={renderInputBox}
              validate={particulars}
            />
            <GradientButton
              buttonName="Add"
              onPress={handleSubmit(this.onAddExpenses)}
            />
          </View>
        </LinearGradient>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  phoneNoSignin: state.phoneNoSignin
});
const AddExpenses = reduxForm({
  form: 'addExpenses'
})(AddExpensesScreen);

export default connect(mapStateToProps)(AddExpenses);
