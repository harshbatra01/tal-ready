import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator, View, TouchableOpacityProps } from 'react-native';
import { Text } from './text';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: keyof typeof Ionicons.glyphMap;
  isLoading?: boolean;
}

export const Button = ({
  title,
  variant = 'primary',
  icon,
  isLoading = false,
  style,
  disabled,
  ...props
}: ButtonProps) => {
  const isPrimary = variant === 'primary';
  const isOutline = variant === 'outline';
  
  const getBackgroundColor = () => {
    if (disabled) return colors.buttonDisabled;
    if (isOutline) return 'transparent';
    if (variant === 'secondary') return colors.cardBackground;
    return colors.buttonPrimary;
  };

  const getTextColor = () => {
    if (disabled) return colors.buttonDisabledText;
    if (isOutline || variant === 'secondary') return colors.primary;
    return colors.buttonPrimaryText;
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: getBackgroundColor() },
        isOutline && { borderWidth: 1, borderColor: colors.primary },
        style,
      ]}
      disabled={disabled || isLoading}
      activeOpacity={0.8}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <View style={styles.content}>
          {icon && (
            <Ionicons
              name={icon}
              size={24}
              color={getTextColor()}
              style={styles.icon}
            />
          )}
          <Text weight="semibold" size={18} color={getTextColor()}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 58,
    borderRadius: spacing.buttonRadius, // 16px from layout
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.l, // 20px
    paddingHorizontal: spacing.m, // 16px
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8, // Spacing/XXXS roughly or small gap for icon
  },
  icon: {
    marginRight: 4,
  },
});
