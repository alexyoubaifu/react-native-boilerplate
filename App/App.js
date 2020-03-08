import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import RootScreen from './Containers/Root/RootScreen';
import stores from './Stores';

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <RootScreen />
      </Provider>
    );
  }
}
