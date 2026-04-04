import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { colors, palette } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';

interface HomeHeaderProps {
  streakCount: number;
  onMenuPress: () => void;
}

export const HomeHeader = ({ streakCount, onMenuPress }: HomeHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text weight="bold" size={28} color={colors.primary}>
        Ready!
      </Text>

      <View style={styles.rightSection}>
        <View style={styles.streakBadge}>
          <Ionicons name="flash" size={16} color={palette.white} />
          <Text weight="bold" size={14} color={palette.white}>
            {streakCount}
          </Text>
        </View>

        <Pressable
          onPress={onMenuPress}
          hitSlop={8}
          accessibilityRole="button"
          accessibilityLabel="Open menu"
        >
          <Ionicons name="menu" size={28} color={colors.textPrimary} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    paddingVertical: 10,
    paddingHorizontal: spacing.l,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.m,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.success,
    borderRadius: spacing.l,
    paddingHorizontal: 10,
    paddingVertical: spacing.xxs,
    gap: spacing.xxxs,
  },
});
