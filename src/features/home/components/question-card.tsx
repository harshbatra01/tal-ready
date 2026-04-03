import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Text } from '@/components/ui/text';
import { colors, palette } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import type { Question, Company } from '@/types/data';

// Card colors based on Figma screenshots
const CARD_COLORS = {
  // Card 1: green gradient with dark green bottom border
  green: {
    background: '#C6F0B9',
    bottomBorder: '#2E8B57',
    numberBg: '#8DD97A',
  },
  // Cards 2-3: gold/yellow with dark gold bottom border
  gold: {
    background: '#FAE39D',
    bottomBorder: '#C49A1A',
    numberBg: '#FFD033', // Yellow/40 as confirmed by user
  },
  // Cards 4-5: gray (locked)
  gray: {
    background: '#E8E8EC',
    bottomBorder: '#B0B0B8',
    numberBg: '#D1D1D8',
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

export const QuestionCard = ({ question, company, index, onPress }: QuestionCardProps) => {
  const cardColors = getCardColors(index, question.status);
  const isLocked = question.status === 'locked';

  return (
    <Pressable
      style={[styles.outerContainer, { alignSelf: index % 2 === 0 ? 'flex-start' : 'flex-end' }]}
      onPress={() => !isLocked && onPress(question)}
      disabled={isLocked}
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
            <Text weight="bold" size={32} color={isLocked ? '#A0A0A8' : '#6B6B47'}>
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
          <Text weight="bold" size={14} color="#22C55E">
            START
          </Text>
        </View>
      )}
    </Pressable>
  );
};

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
    // Simulating the diagonal gloss visible in Figma; transform isn't easily
    // achievable in RN for this effect, so we use a subtle transparency.
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
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderColor: palette.gray30,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
