import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { colors, palette } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';

interface CourseSwitcherProps {
  title: string;
  subtitle: string;
  onPress?: () => void;
}

export const CourseSwitcher = ({ title, subtitle, onPress }: CourseSwitcherProps) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Ionicons name="chatbubble" size={24} color={palette.orange50} />
      </View>

      <View style={styles.textContainer}>
        <Text size={13} color={colors.textSecondary} weight="normal">
          {title}
        </Text>
        <Text size={16} color={colors.textPrimary} weight="semibold">
          {subtitle}
        </Text>
      </View>

      <Ionicons name="chevron-down" size={24} color={colors.textSecondary} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: spacing.m,
    paddingBottom: spacing.m,
    paddingRight: spacing.m,
    paddingLeft: spacing.m,
    gap: spacing.s,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: palette.orange10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 1,
  },
});
