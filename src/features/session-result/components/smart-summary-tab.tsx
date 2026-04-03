import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/components/ui/text';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import type { SmartSummary } from '@/types/data';

interface SmartSummaryTabProps {
  summary: SmartSummary;
}

export const SmartSummaryTab = ({ summary }: SmartSummaryTabProps) => {
  return (
    <View style={styles.container}>
      <Text weight="semibold" size={18} color={colors.textPrimary} style={styles.sectionTitle}>
        What worked well
      </Text>
      {summary.whatWorkedWell.map((item, index) => (
        <View key={`well-${index}`} style={styles.bulletItem}>
          <Text size={14} color={colors.primary} style={styles.bulletDot}>
            ✦
          </Text>
          <Text size={14} color={colors.textSecondary} style={styles.bulletText}>
            {item}
          </Text>
        </View>
      ))}

      <Text weight="semibold" size={18} color={colors.textPrimary} style={styles.sectionTitle}>
        Overall takeaways
      </Text>
      {summary.overallTakeaways.map((item, index) => (
        <View key={`takeaway-${index}`} style={styles.bulletItem}>
          <Text size={14} color={colors.primary} style={styles.bulletDot}>
            ✦
          </Text>
          <Text size={14} color={colors.textSecondary} style={styles.bulletText}>
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.l,
  },
  sectionTitle: {
    marginBottom: spacing.m,
    marginTop: spacing.l,
  },
  bulletItem: {
    flexDirection: 'row',
    marginBottom: spacing.s,
    alignItems: 'flex-start',
  },
  bulletDot: {
    marginRight: spacing.xs,
    lineHeight: 20,
  },
  bulletText: {
    flex: 1,
    lineHeight: 20,
  },
});
