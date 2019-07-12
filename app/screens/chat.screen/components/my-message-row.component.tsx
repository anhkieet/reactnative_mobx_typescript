import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { Column, DateText, Photo, Row } from "../../../components";
import { MessageModel } from "../../../models";
import { Colors } from "../../../themes";

const MyContainer = styled(Row)`
  justify-content: flex-end;
`;

const MyMessageContainer = styled(Column)`
  background-color: ${Colors.meBGColor};
  padding: 10px;
  max-width: 80%;
  border-radius: 5px;
  margin-bottom: 10px;
  margin-right: 15px;
  align-items: flex-end;
`;

const MyContentText = styled(Text)`
  color: white;
  font-size: 16px;
`;

const MyDateText = styled(DateText)`
  color: #8fd7d8;
`;

interface Props {
  sameUser: boolean;
  model: MessageModel;
}

export class MyMessageRow extends React.Component<Props> {
  render() {
    const { model } = this.props;
    return (
      <MyContainer>
        <MyMessageContainer>
          {model.type === "TEXT" ? (
            <MyContentText>{model.content.text}</MyContentText>
          ) : model.type === "PHOTO" ? (
            <Photo source={{ uri: model.content.url }} />
          ) : null}
          <MyDateText>{model.displayTime}</MyDateText>
        </MyMessageContainer>
      </MyContainer>
    );
  }
}
