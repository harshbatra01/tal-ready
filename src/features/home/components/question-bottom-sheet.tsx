import React, { forwardRef, useCallback, useMemo } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { Image } from 'expo-image';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { colors, palette } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';
import type { Question, Company } from '@/types/data';

interface QuestionBottomSheetProps {
  question: Question | null;
  company: Company | undefined;
  onFeedbackPress: () => void;
  onDismiss: () => void;
}

export const QuestionBottomSheet = forwardRef<BottomSheet, QuestionBottomSheetProps>(
  ({ question, company, onFeedbackPress, onDismiss }, ref) => {
    const snapPoints = useMemo(() => ['45%'], []);

    const handleSheetChanges = useCallback(
      (index: number) => {
        if (index === -1) {
          onDismiss();
        }
      },
      [onDismiss],
    );

    if (!question) return null;

    return (
      <BottomSheet
        ref={ref}
        snapPoints={snapPoints}
        index={-1}
        enablePanDownToClose
        onChange={handleSheetChanges}
        backgroundStyle={styles.sheetBackground}
        handleIndicatorStyle={styles.handleIndicator}
      >
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.questionCard}>
            <Text weight="semibold" size={18} color={colors.textPrimary}>
              {question.questionText}
            </Text>

            <View style={styles.metaRow}>
              <View style={styles.companyTag}>
                <Text size={13} color={colors.textSecondary}>
                  Asked by {company?.name ?? ''}
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

              <View style={styles.durationTag}>
                <Ionicons name="time-outline" size={16} color={colors.textSecondary} />
                <Text size={13} color={colors.textSecondary}>
                  {question.durationMins} mins
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.buttonsContainer}>
            <Button
              title="FEEDBACK"
              variant="outline"
              onPress={onFeedbackPress}
              accessibilityLabel="View feedback for this question"
            />

            <Pressable
              style={styles.aiButton}
              disabled
              accessibilityRole="button"
              accessibilityLabel="AI vs AI listen mode, coming soon"
              accessibilityState={{ disabled: true }}
            >
              <Ionicons name="headset" size={20} color={palette.white} />
              <Text weight="semibold" size={16} color={palette.white}>
                AI VS AI (LISTEN)
              </Text>
            </Pressable>
          </View>

          <View style={styles.tickerContainer}>
            <Text size={11} color={colors.textSecondary}>
              🚩  {question.completedUsers.toLocaleString()} users completed Question{' '}
              {question.id.replace('q', '')} today  🚩
            </Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    );
  },
);

const styles = StyleSheet.create({
  sheetBackground: {
    backgroundColor: colors.bottomSheetBg,
    borderTopLeftRadius: spacing.xl,
    borderTopRightRadius: spacing.xl,
  },
  handleIndicator: {
    backgroundColor: colors.textDisabled,
    width: 40,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: spacing.l,
    paddingTop: spacing.s,
  },
  questionCard: {
    marginBottom: spacing.l,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.s,
  },
  companyTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  companyLogo: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  durationTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xxs,
  },
  buttonsContainer: {
    gap: spacing.s,
  },
  aiButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    backgroundColor: colors.aiButtonBg,
    height: 52,
    borderRadius: spacing.buttonRadius,
    opacity: 0.7,
  },
  tickerContainer: {
    marginTop: spacing.l,
    alignItems: 'center',
  },
});
