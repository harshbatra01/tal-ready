import React, { memo } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Text } from '@/components/ui/text';
import { colors, palette } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import type { Question, Company } from '@/types/data';

// Card color map using centralized theme tokens
const CARD_COLORS = {
  green: {
    background: colors.cardGreenBg,
    bottomBorder: colors.cardGreenBorder,
    numberBg: colors.cardGreenBadge,
  },
  gold: {
    background: colors.cardGoldBg,
    bottomBorder: colors.cardGoldBorder,
    numberBg: colors.cardGoldBadge,
  },
  gray: {
    background: colors.cardGrayBg,
    bottomBorder: colors.cardGrayBorder,
    numberBg: colors.cardGrayBadge,
  },
};

interface QuestionCardProps {
  question: Question;
  company: Company | undefined;
  index: number;
  onPress: (question: Question) => void;
}

const getCardColors = (index: number, status: string) => {
  if (status === 'locked') return CARD_COLORS.gray;
  if (index === 0) return CARD_COLORS.green;
  return CARD_COLORS.gold;
};

const QuestionCardComponent = ({ question, company, index, onPress }: QuestionCardProps) => {
  const cardColors = getCardColors(index, question.status);
  const isLocked = question.status === 'locked';

  return (
    <Pressable
      style={[styles.outerContainer, { alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }]}
      onPress={() => !isLocked && onPress(question)}
      disabled={isLocked}
      accessibilityRole="button"
      accessibilityLabel={`Question ${index + 1} by ${company?.name ?? 'Unknown'}${isLocked ? ', locked' : ''}`}
    >
      <View style={[styles.container, { backgroundColor: cardColors.background }]}>
        {/* Glossy overlay effect */}
        <View style={styles.glossOverlay} />

        <View style={styles.contentRow}>
          <View style={styles.companyInfo}>
            <Text weight="medium" size={16} color={colors.textPrimary}>
              {company?.name ?? ''}
            </Text>
            {company?.logoUrl ? (
              <Image
                source={{ uri: company.logoUrl }}
                style={styles.companyLogo}
                contentFit="contain"
                cachePolicy="memory-disk"
              />
            ) : null}
          </View>

          <View style={[styles.numberBadge, { backgroundColor: cardColors.numberBg }]}>
            <Text weight="bold" size={32} color={isLocked ? colors.cardNumberLockedText : colors.cardNumberText}>
              {index + 1}
            </Text>
          </View>
        </View>

        {/* 3D bottom border effect */}
        <View style={[styles.bottomBorder, { backgroundColor: cardColors.bottomBorder }]} />
      </View>

      {/* START tooltip for first unlocked card */}
      {index === 0 && !isLocked && (
        <View style={styles.startTooltip}>
          <Text weight="bold" size={14} color={colors.success}>
            START
          </Text>
        </View>
      )}
    </Pressable>
  );
};

export const QuestionCard = memo(QuestionCardComponent);

const styles = StyleSheet.create({
  outerContainer: {
    marginBottom: spacing.m,
    width: '75%',
    position: 'relative',
  },
  container: {
    borderRadius: 28,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 72,
  },
  glossOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255,255,255,0.15)',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: spacing.l,
    paddingRight: spacing.xs,
    paddingVertical: spacing.s,
  },
  companyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    flex: 1,
  },
  companyLogo: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: palette.white,
  },
  numberBadge: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBorder: {
    height: 6,
    width: '100%',
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
  },
  startTooltip: {
    position: 'absolute',
    right: -8,
    top: -12,
    backgroundColor: palette.white,
    borderRadius: spacing.xs,
    paddingHorizontal: spacing.s,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: palette.gray30,
    elevation: 2,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
