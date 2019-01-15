import React from 'react';
//import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { phoneNoSignin } = this.props;
    console.log('phoneNoSignin is', phoneNoSignin);
    return (
      <View>
        <Text>Home screen</Text>
      </View>
    );
  }
}
const mapStateToProps = (state) => ({
  phoneNoSignin: state.phoneNoSignin
});

export default connect(mapStateToProps)(HomeScreen);
