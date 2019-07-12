import { Provider } from "mobx-react";
import React from "react";
import { StatusBar } from "react-native";
import { FlexibleView } from "./app/components";
import { createMainContainer } from "./app/navigator";
import { RootStore } from "./app/stores";

export default class App extends React.Component {
  private rootStore = new RootStore();

  render() {
    const AppContainer = createMainContainer(this.rootStore);
    return (
      <Provider rootStore={this.rootStore}>
        <FlexibleView>
          <StatusBar barStyle="light-content" />
          <AppContainer />
        </FlexibleView>
      </Provider>
    );
  }
}
