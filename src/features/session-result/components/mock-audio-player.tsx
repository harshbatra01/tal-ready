import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { colors, palette } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';

interface MockAudioPlayerProps {
  title: string;
  durationSeconds: number;
}

const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

export const MockAudioPlayer = ({ title, durationSeconds }: MockAudioPlayerProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topRow}>
        <Pressable style={styles.playButton}>
          <Ionicons name="play" size={24} color={colors.textPrimary} />
        </Pressable>

        <View style={styles.infoSection}>
          <Text weight="semibold" size={16} color={colors.textPrimary}>
            {title}
          </Text>

          <View style={styles.progressRow}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
          </View>

          <View style={styles.timeRow}>
            <Text size={12} color={colors.textSecondary}>
              00:00
            </Text>
            <Text size={12} color={colors.textSecondary}>
              {formatTime(durationSeconds)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.l,
    marginTop: spacing.l,
    backgroundColor: palette.gray10,
    borderRadius: spacing.cardRadius,
    padding: spacing.m,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.m,
  },
  playButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: palette.gray20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoSection: {
    flex: 1,
  },
  progressRow: {
    marginTop: spacing.xs,
  },
  progressBar: {
    height: 4,
    backgroundColor: palette.gray30,
    borderRadius: 2,
  },
  progressFill: {
    height: 4,
    width: '0%',
    backgroundColor: colors.primary,
    borderRadius: 2,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
});
