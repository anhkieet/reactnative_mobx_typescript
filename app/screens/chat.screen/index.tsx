import { inject, observer } from "mobx-react";
import { fromPromise, FULFILLED, PENDING } from "mobx-utils";
import React from "react";
import {
  ActivityIndicator,
  EmitterSubscription,
  Keyboard,
  LayoutAnimation,
  Platform
} from "react-native";
import styled from "styled-components";
import { FlexibleView, MessageInput, Row } from "../../components";
import { AppProps } from "../../stores";
import { delay } from "../../utils";
import { MessageList } from "./components";

const CenterRow = styled(Row)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

@inject("rootStore")
@observer
export class ChatScreen extends React.Component<AppProps> {
  static navigationOptions = {
    title: "Tennis buddies"
  };

  state = {
    loadMessages: fromPromise.resolve(),
    keyboardMargin: 0
  };

  keyboardWillShowSub?: EmitterSubscription;
  keyboardWillHideSub?: EmitterSubscription;

  isAndroid = Platform.OS === "android";

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener(
      !this.isAndroid ? "keyboardWillShow" : "keyboardDidShow",
      this.keyboardWillShow
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      !this.isAndroid ? "keyboardWillHide" : "keyboardDidHide",
      this.keyboardWillHide
    );
  }

  componentDidMount() {
    const { chatStore } = this.props.rootStore;
    this.setState({
      loadMessages: fromPromise(chatStore.loadMessages())
    });
  }

  componentWillUnmount() {
    this.keyboardWillShowSub && this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub && this.keyboardWillHideSub.remove();
  }

  render() {
    const {
      rootStore: { chatStore }
    } = this.props;
    return (
      <FlexibleView>
        {this.state.loadMessages.case({
          [PENDING]: this.renderPending,
          [FULFILLED]: this.renderFulfilled
        })}
        <MessageInput
          value={chatStore.message}
          onChangeText={chatStore.setMessageInput}
          onSendPress={chatStore.sendMessage}
          placeholder="Type message"
          css={`
            margin-bottom: ${this.state.keyboardMargin}px;
          `}
        />
      </FlexibleView>
    );
  }

  keyboardWillShow = async (event: any) => {
    if (!this.isAndroid) {
      const height = event.endCoordinates.height;
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      this.setState({ keyboardMargin: height });
    }

    await delay(500);

    const {
      rootStore: { chatStore }
    } = this.props;
    if (chatStore.messageList) chatStore.messageList.scrollToEnd();
  };

  keyboardWillHide = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ keyboardMargin: 0 });
  };

  renderPending = () => (
    <CenterRow>
      <ActivityIndicator />
    </CenterRow>
  );

  renderFulfilled = () => <MessageList rootStore={this.props.rootStore} />;
}
