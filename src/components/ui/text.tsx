import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from 'react-native';
import { colors } from '@/theme/colors';

type FontWeight = 'normal' | 'medium' | 'semibold' | 'bold';

interface TextProps extends RNTextProps {
  weight?: FontWeight;
  color?: string;
  size?: number;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
}

export const Text = ({
  weight = 'normal',
  color = colors.textPrimary,
  size = 16,
  align = 'auto',
  style,
  ...props
}: TextProps) => {
  const getFontFamily = () => {
    switch (weight) {
      case 'medium':
        return 'Inter_500Medium';
      case 'semibold':
        return 'Inter_600SemiBold';
      case 'bold':
        return 'Inter_700Bold';
      case 'normal':
      default:
        return 'Inter_400Regular';
    }
  };

  return (
    <RNText
      style={[
        {
          fontFamily: getFontFamily(),
          color,
          fontSize: size,
          textAlign: align,
        },
        style,
      ]}
      {...props}
    />
  );
};
