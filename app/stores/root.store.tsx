import { NavigationContainerProps } from "react-navigation";
import { ChatStore } from ".";
import { UserModel } from "../models";

/// For injection type
export interface AppProps extends NavigationContainerProps {
  rootStore: RootStore;
}

/// Application root store
export class RootStore {
  /**
   * Mock auth user
   */
  authUser = new UserModel(
    2,
    "James Dam",
    "James",
    "Dam",
    "ACTIVE",
    "Singapore",
    "james",
    "https://s3.ap-southeast-1.amazonaws.com/dev.rovo.co/profiles/pictures/small/2_1533791091132.jpeg",
    21150,
    "FIRESTORM"
  );

  chatStore: ChatStore = new ChatStore(this);
}
