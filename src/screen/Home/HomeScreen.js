import React from 'react';
import PropTypes from 'prop-types';
import { View, Container, Content } from 'native-base';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import NavImage from '../../components/NavImage';
import ExpensesHeader from '../../components/ExpensesHeader';
import styles from './HomeScreenStyleSheet';
import { defaultColors } from '../../config';

const acquireDataImg = require('../../images/add.png');
const historyImg = require('../../images/history.png');
const configImg = require('../../images/edit.png');
const exitImg = require('../../images/exit.png');

class HomeScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {};
  }
  goToScreen = (screen) => {
    this.props.navigation.navigate(screen);
  };
  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <LinearGradient
          colors={defaultColors.grandientColors}
          style={styles.linearGradient}
        >
          <ExpensesHeader
            iconName={'user-following'}
            iconType={'SimpleLineIcons'}
            userActivity={() => navigation.navigate('Signin')}
          />
          <Content style={styles.contentContainer}>
            <View style={styles.navIconRowOne}>
              <NavImage
                image={acquireDataImg}
                navName="Add"
                onPress={() => this.goToScreen('AddExpenses')}
              />
              <NavImage image={historyImg} navName="View" />
            </View>
            <View style={styles.navIconRowTwo}>
              <NavImage image={configImg} navName="Edit" />
              <NavImage image={exitImg} onPress={this.exit} navName="Exit" />
            </View>
          </Content>
        </LinearGradient>
      </Container>
    );
  }
}
const mapStateToProps = (state) => ({
  phoneNoSignin: state.phoneNoSignin
});

export default connect(mapStateToProps)(HomeScreen);
