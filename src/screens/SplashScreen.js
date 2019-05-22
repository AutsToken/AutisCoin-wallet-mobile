import React from 'react';
import { connect } from 'react-redux';

import { resetData } from '../hathorRedux';
import { SafeAreaView } from 'react-native';
import HathorLogo from '../components/HathorLogo';

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    this.props.dispatch(resetData());
    await global.localStorage.rebuild();
    if (global.hathorLib.wallet.loaded()) {
      this.props.navigation.navigate("App");
    } else {
      this.props.navigation.navigate("Init");
    }
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <HathorLogo />
      </SafeAreaView>
    );
  }
}

export default connect(null)(SplashScreen);
