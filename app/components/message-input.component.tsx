import React from "react";
import { StyleProp, TextInput } from "react-native";
import styled from "styled-components";
import { IconButton, Row } from ".";
import { Colors, Images } from "../themes";
import { isIphoneX } from "../utils";

const innerPadding = 15;

const InputContainer = styled(Row)`
  align-items: center;
  padding: 8px 8px ${isIphoneX ? 30 : 8}px 8px;
  border-top-color: ${Colors.borderColor};
  border-top-width: 1px;
  background-color: white;
`;

const InputHolder = styled(Row)`
  flex: 1;
  align-items: center;
  padding: ${innerPadding}px;
  border-radius: 5px;
  border-color: ${Colors.borderColor};
  border-width: 1px;
  margin-right: ${innerPadding}px;
`;

interface Props extends StyleProp<any> {
  value?: string;
  placeholder?: string;

  onChangeText?(text: string): void;
  onSendPress?(): void;
  onCameraPress?(): void;
}

export class MessageInput extends React.Component<Props> {
  render() {
    const {
      placeholder,
      style,
      onCameraPress,
      onSendPress,
      value,
      onChangeText
    } = this.props;
    return (
      <InputContainer css={style}>
        <InputHolder>
          <IconButton
            onPress={onCameraPress}
            icon={Images.camera}
            iconColor={Colors.secondaryTextColor}
            css={`
              margin-right: ${innerPadding}px;
            `}
          />
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={Colors.secondaryTextColor}
            css={`
              flex: 1;
              font-size: 16px;
              color: ${Colors.textColor};
            `}
          />
        </InputHolder>
        <IconButton
          onPress={onSendPress}
          icon={Images.send}
          iconColor={Colors.textColor}
          css={`
            margin-right: 7px;
          `}
        />
      </InputContainer>
    );
  }
}
