import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { colors, palette } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';

interface SettingsMenuItemProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value?: string;
  rightElement?: 'chevron' | 'download' | 'none';
  onPress?: () => void;
}

export const SettingsMenuItem = ({
  icon,
  label,
  value,
  rightElement = 'chevron',
  onPress,
}: SettingsMenuItemProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={onPress}
      disabled={!onPress}
      accessibilityRole="button"
      accessibilityLabel={value ? `${label}: ${value}` : label}
    >
      <View style={styles.leftSection}>
        <Ionicons name={icon} size={22} color={colors.textSecondary} />
        <Text size={16} color={colors.textPrimary} weight="normal">
          {label}
        </Text>
      </View>

      <View style={styles.rightSection}>
        {value && (
          <Text size={14} color={colors.textSecondary}>
            {value}
          </Text>
        )}
        {rightElement === 'chevron' && (
          <Ionicons name="chevron-forward" size={20} color={colors.textDisabled} />
        )}
        {rightElement === 'download' && (
          <View style={styles.downloadIcon}>
            <Ionicons name="download-outline" size={20} color={colors.success} />
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: spacing.m,
    paddingHorizontal: spacing.l,
    backgroundColor: palette.white,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.s,
    flex: 1,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  downloadIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.downloadBadgeBg,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
