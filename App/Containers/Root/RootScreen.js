import React, { Component } from 'react';
import NavigationService from 'App/Services/NavigationService';
import AppNavigator from 'App/Navigators/AppNavigator';
import { View } from 'react-native';
import { PropTypes } from 'prop-types';
import { Helpers } from 'App/Theme';

class RootScreen extends Component {
  render() {
    return (
      <View style={Helpers.fill}>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </View>
    );
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func,
};

export default RootScreen;
