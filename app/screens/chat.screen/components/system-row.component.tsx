import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import { Column } from "../../../components";
import { MessageModel } from "../../../models";
import { Colors } from "../../../themes";

const Container = styled(Column)`
  align-items: center;
  padding: 10px;
`;

const DateText = styled(Text)`
  font-weight: bold;
  font-size: 20px;
  color: ${Colors.secondaryTextColor};
  margin-bottom: 20px;
`;

const ContentText = styled(Text)`
  font-size: 15px;
  color: ${Colors.secondaryTextColor};
`;

interface Props {
  model: MessageModel;
}

export class SystemRow extends React.Component<Props> {
  render() {
    const { model } = this.props;
    return (
      <Container>
        <DateText>{model.displaySystemDate}</DateText>
        <ContentText>{model.content.text}</ContentText>
      </Container>
    );
  }
}
