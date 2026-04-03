import React, { useCallback, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import BottomSheet from '@gorhom/bottom-sheet';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { Text } from '@/components/ui/text';
import { HomeHeader } from '../components/home-header';
import { CourseSwitcher } from '../components/course-switcher';
import { QuestionCard } from '../components/question-card';
import { QuestionBottomSheet } from '../components/question-bottom-sheet';
import { getQuestions, getCompanies, getCompanyById } from '@/data';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import type { Question } from '@/types/data';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '@/navigation/types';

type HomeScreenNavigationProp = NativeStackNavigationProp<HomeStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

export const HomeScreen = ({ navigation }: Props) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(null);

  const questions = getQuestions();

  const handleQuestionPress = useCallback((question: Question) => {
    setSelectedQuestion(question);
    bottomSheetRef.current?.snapToIndex(0);
  }, []);

  const handleDismiss = useCallback(() => {
    setSelectedQuestion(null);
  }, []);

  const handleFeedbackPress = useCallback(() => {
    if (selectedQuestion) {
      bottomSheetRef.current?.close();
      navigation.navigate('SessionResult', { questionId: selectedQuestion.id });
    }
  }, [selectedQuestion, navigation]);

  const selectedCompany = selectedQuestion
    ? getCompanyById(selectedQuestion.companyId)
    : undefined;

  const renderItem = useCallback(
    ({ item, index }: { item: Question; index: number }) => {
      const company = getCompanyById(item.companyId);
      return (
        <QuestionCard
          question={item}
          company={company}
          index={index}
          onPress={handleQuestionPress}
        />
      );
    },
    [handleQuestionPress],
  );

  return (
    <ScreenWrapper>
      <HomeHeader streakCount={8} onMenuPress={() => {}} />

      <CourseSwitcher
        title="Practicing Top 50 Questions for"
        subtitle="Big Tech Companies"
      />

      <View style={styles.listContainer}>
        <FlashList
          data={questions}
          renderItem={renderItem}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={styles.tickerContainer}>
              <Text size={12} color={colors.textSecondary}>
                🚩  2,312 users completed Question 3 today  🚩
              </Text>
            </View>
          }
        />
      </View>

      <QuestionBottomSheet
        ref={bottomSheetRef}
        question={selectedQuestion}
        company={selectedCompany}
        onFeedbackPress={handleFeedbackPress}
        onDismiss={handleDismiss}
      />
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: spacing.l,
    paddingTop: spacing.m,
    paddingBottom: spacing.xxl,
  },
  tickerContainer: {
    alignItems: 'center',
    paddingVertical: spacing.m,
  },
});
