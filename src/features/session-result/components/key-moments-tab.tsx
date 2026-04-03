import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/components/ui/text';
import { MockAudioPlayer } from './mock-audio-player';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import type { KeyMoment } from '@/types/data';

interface KeyMomentsTabProps {
  moments: KeyMoment[];
  audioDurationSeconds: number;
}

export const KeyMomentsTab = ({ moments, audioDurationSeconds }: KeyMomentsTabProps) => {
  return (
    <View style={styles.container}>
      <MockAudioPlayer title="Mock Interview" durationSeconds={audioDurationSeconds} />

      <View style={styles.momentsList}>
        {moments.map((moment, index) => (
          <View key={index} style={styles.momentItem}>
            <Text
              weight="semibold"
              size={14}
              color={moment.type === 'positive' ? '#22C55E' : colors.primary}
            >
              {moment.timestamp}
            </Text>
            <Text size={14} color={colors.textSecondary} style={styles.momentText}>
              {moment.description}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  momentsList: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.l,
  },
  momentItem: {
    marginBottom: spacing.l,
    borderLeftWidth: 2,
    borderLeftColor: colors.border,
    paddingLeft: spacing.m,
  },
  momentText: {
    marginTop: spacing.xxs,
    lineHeight: 20,
  },
});
