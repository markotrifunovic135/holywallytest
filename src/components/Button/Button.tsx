import { ViewStyle, StyleProp, TouchableOpacity, TextStyle, Text } from 'react-native';
import React from 'react';

interface PropsT {
  containerStyle?: StyleProp<ViewStyle>;
  onPress: () => void;
  text?: string;
  textStyle?: StyleProp<TextStyle>;
  children?: JSX.Element | JSX.Element[];
  disabled?: boolean;
}

const Button = ({ containerStyle, onPress, text, textStyle, children, disabled = false }: PropsT) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress} disabled={disabled}>
      {children}
      {text && <Text style={textStyle}>{text}</Text>}
    </TouchableOpacity>
  );
};

export default Button;
