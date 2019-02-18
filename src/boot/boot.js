import React from 'react';
import AppNavigator from './AppNavigator';
import { Root } from 'native-base';
import withAuthentication from '../hoc/withAuthentication';

const Boot = () => {
  return (
    <Root>
      <AppNavigator />
    </Root>
  );
};
export default withAuthentication(Boot);
