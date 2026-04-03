import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from './text';
import { colors } from '@/theme/colors';

interface LogoFallbackProps {
  name: string;
  size?: number;
}

export const LogoFallback = ({ name, size = 48 }: LogoFallbackProps) => {
  const initial = name ? name.charAt(0).toUpperCase() : '?';
  
  return (
    <View
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: size / 4, // Slightly rounded rectangle for company logos
        },
      ]}
    >
      <Text weight="bold" size={size * 0.4} color={colors.primary}>
        {initial}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primaryLight,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
