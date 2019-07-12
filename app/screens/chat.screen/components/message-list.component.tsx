import React from "react";
import { FlatList, ListRenderItemInfo } from "react-native";
import { MyMessageRow, OtherMessageRow, SystemRow } from ".";
import { FlexibleView } from "../../../components";
import { MessageModel } from "../../../models";
import { AppProps } from "../../../stores";

export class MessageList extends React.Component<AppProps> {
  render() {
    const { chatStore } = this.props.rootStore;
    return (
      <FlatList
        ref={ref => (chatStore.messageList = ref)}
        data={chatStore.messages}
        renderItem={this.renderItem}
      />
    );
  }

  renderItem = ({ item, index }: ListRenderItemInfo<MessageModel>) => {
    const {
        rootStore,
        rootStore: { chatStore }
      } = this.props,
      { type, sender } = item;

    const isMe = rootStore.authUser.id === (sender && sender.id);
    switch (type) {
      case "PHOTO":
      case "TEXT":
        const sameUser = chatStore.isSameUser(item, index);
        return isMe ? (
          <MyMessageRow model={item} sameUser={sameUser} />
        ) : (
          <OtherMessageRow model={item} sameUser={sameUser} />
        );

      case "SYSTEM":
        return <SystemRow model={item} />;
      default:
        return <FlexibleView />;
    }
  };
}
