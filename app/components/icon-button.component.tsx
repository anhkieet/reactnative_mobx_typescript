import React from "react";
import { Image, TouchableOpacity, StyleProp } from "react-native";

interface Props extends StyleProp<any> {
  icon: any;
  iconColor?: string;
  onPress?(): void;
}

export class IconButton extends React.Component<Props> {
  render() {
    const { onPress, icon, iconColor, style } = this.props;
    return (
      <TouchableOpacity
        onPress={() => onPress && onPress()}
        activeOpacity={0.5}
        css={style}
      >
        <Image source={icon} style={{ tintColor: iconColor }} />
      </TouchableOpacity>
    );
  }
}
