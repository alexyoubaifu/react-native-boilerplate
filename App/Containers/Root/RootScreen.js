import React, { Component } from 'react';
import NavigationService from 'App/Services/NavigationService';
import AppNavigator from 'App/Navigators/AppNavigator';
import { View } from 'react-native';
import { PropTypes } from 'prop-types';
import { Helpers } from 'App/Theme';
import { inject, observer } from 'mobx-react';

@inject('startup')
@observer
class RootScreen extends Component {
  componentDidMount() {
    const { startup } = this.props;
    startup.startupAction()
  }

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

export default RootScreen;
