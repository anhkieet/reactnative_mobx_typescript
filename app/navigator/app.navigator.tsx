import { createAppContainer, createStackNavigator } from "react-navigation";
import { ChatScreen } from "../screens";
import { RootStore } from "../stores";
import { Colors } from "../themes";

const defaultNavigationOptions = {
  headerTintColor: Colors.textColor,
  headerStyle: {
    backgroundColor: "#fff",
    elevation: 0
  }
};

export const createMainContainer = (rootStore: RootStore) => {
  return createAppContainer(
    createStackNavigator(
      {
        ChatScreen
      },
      {
        initialRouteName: "ChatScreen",
        headerLayoutPreset: "center",
        defaultNavigationOptions: defaultNavigationOptions
      }
    )
  );
};
