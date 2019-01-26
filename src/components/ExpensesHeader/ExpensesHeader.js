import React from 'react';
import PropTypes from 'prop-types';
import { Header, Right, Icon, Left, Thumbnail } from 'native-base';
import styles from './ExpensesHeaderStyleSheet';
import { TouchableOpacity } from 'react-native';

const ExpensesHeader = (props) => {
  return (
    <Header transparent>
      <Left style={{ flex: 3 }}>
        <Thumbnail
          square
          resizeMode="contain"
          style={styles.logoImg}
          source={require('../../images/expenses.png')}
        />
      </Left>
      {/*<Body>
        <Title style={styles.headerTextStyle}>My Expenses</Title>
      </Body>*/}
      <Right style={styles.rightHeader}>
        <TouchableOpacity onPress={props.userActivity}>
          <Icon
            name={props.iconName}
            type={props.iconType}
            style={styles.loginIconStyle}
          />
        </TouchableOpacity>
      </Right>
    </Header>
  );
};
ExpensesHeader.propTypes = {
  userActivity: PropTypes.func,
  iconName: PropTypes.string,
  iconType: PropTypes.string
};

export default ExpensesHeader;
