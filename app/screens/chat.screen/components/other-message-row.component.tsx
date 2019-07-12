import React from "react";
import { Image, Text, View } from "react-native";
import styled from "styled-components";
import { Column, DateText, Photo, Row } from "../../../components";
import { MessageModel } from "../../../models";
import { Colors } from "../../../themes";

const avatarWidth = 32;

const OtherContainer = styled(Row)`
  align-items: flex-start;
`;

const AvatarContainer = styled(View)`
  width: ${avatarWidth}px;
  margin: 0 10px;
`;

const Avatar = styled(Image)`
  width: ${avatarWidth}px;
  height: ${avatarWidth}px;
  border-radius: ${avatarWidth / 2}px;
`;

const OtherMessageContainer = styled(Column)`
  background-color: ${Colors.otherBGColor};
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  border-color: ${Colors.borderColor};
  border-width: 1px;
  max-width: 70%;
`;

const NameText = styled(Text)`
  color: ${Colors.secondaryTextColor};
  font-size: 16px;
`;

const OtherContentText = styled(Text)`
  color: ${Colors.textColor};
  font-size: 16px;
`;

const OtherDateText = styled(DateText)`
  color: ${Colors.secondaryTextColor};
`;

interface Props {
  sameUser: boolean;
  model: MessageModel;
}

export class OtherMessageRow extends React.Component<Props> {
  render() {
    const { model, sameUser } = this.props;
    return (
      <OtherContainer>
        <AvatarContainer>
          {sameUser ? null : <Avatar source={{ uri: model.sender!.picture }} />}
        </AvatarContainer>
        <OtherMessageContainer>
          <NameText>{model.sender!.firstName}</NameText>

          {model.type === "TEXT" ? (
            <OtherContentText>{model.content.text}</OtherContentText>
          ) : model.type === "PHOTO" ? (
            <Photo source={{ uri: model.content.url }} />
          ) : null}

          <OtherDateText>{model.displayTime}</OtherDateText>
        </OtherMessageContainer>
      </OtherContainer>
    );
  }
}
