import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-navigation";
import styled from "styled-components";
import { Colors } from "../themes";

export const ScreenView = styled(SafeAreaView)<any>`
  flex: ${props => props.flex || 1};
  background-color: ${Colors.background};
`;

export const FlexibleView = styled(View)<any>`
  flex: ${props => props.flex || 1};
  background-color: ${Colors.background};
`;

export const Row = styled(View)<any>`
  flex-direction: row;
`;

export const Column = styled(View)<any>`
  flex-direction: column;
`;

export const DateText = styled(Text)`
  margin-top: 3px;
  font-size: 13px;
  align-self: flex-end;
`;

export const Photo = styled(Image)`
  width: 200px;
  aspect-ratio: 1;
  border-radius: 5px;
`;
