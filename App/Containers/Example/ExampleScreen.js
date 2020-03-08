import React from 'react';
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native';
import Style from './ExampleScreenStyle';
import { ApplicationStyles, Helpers, Images, Metrics } from 'App/Theme';
import { inject, observer } from 'mobx-react';

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
});

@inject('counter')
@observer
class ExampleScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter } = this.props;
    const { counter: value, incrementCounterAction, decrementCounterAction } = counter;

    return (
      <View
        style={[
          Helpers.fill,
          Helpers.rowMain,
          Metrics.mediumHorizontalMargin,
          Metrics.mediumVerticalMargin,
        ]}
      >
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <View style={Style.logoContainer}>
              <Image style={Helpers.fullSize} source={Images.logo} resizeMode={'contain'} />
            </View>
            <Text style={Style.text}>To get started, edit App.js</Text>
            <Text style={Style.instructions}>{instructions}</Text>
            <Text>counter: {value}</Text>
            <Button
              style={ApplicationStyles.button}
              onPress={() => incrementCounterAction()}
              title="+1"
            />
            <Button
              style={ApplicationStyles.button}
              onPress={() => decrementCounterAction()}
              title="-1"
            />
          </View>
        )}
      </View>
    );
  }
}

export default ExampleScreen;
