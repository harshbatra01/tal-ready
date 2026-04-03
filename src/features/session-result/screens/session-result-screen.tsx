import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { SessionHeader } from '../components/session-header';
import { SmartSummaryTab } from '../components/smart-summary-tab';
import { KeyMomentsTab } from '../components/key-moments-tab';
import { getSessionResult } from '@/data';
import { colors, palette } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '@/navigation/types';

type SessionResultScreenNavigationProp = NativeStackNavigationProp<
  HomeStackParamList,
  'SessionResult'
>;

interface Props {
  navigation: SessionResultScreenNavigationProp;
}

type TabType = 'summary' | 'moments';

export const SessionResultScreen = ({ navigation }: Props) => {
  const [activeTab, setActiveTab] = useState<TabType>('summary');
  const sessionResult = getSessionResult();

  return (
    <ScreenWrapper>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        bounces={false}
      >
        <SessionHeader
          questionText={sessionResult.questionText}
          companyName={sessionResult.companyName}
          companyLogoUrl={sessionResult.companyLogoUrl}
          onClose={() => navigation.goBack()}
        />

        {/* Tab switcher */}
        <View style={styles.tabContainer}>
          <Pressable
            style={[styles.tab, activeTab === 'summary' && styles.activeTab]}
            onPress={() => setActiveTab('summary')}
          >
            <Text
              weight={activeTab === 'summary' ? 'semibold' : 'normal'}
              size={16}
              color={activeTab === 'summary' ? colors.textPrimary : colors.textSecondary}
            >
              Smart summary
            </Text>
          </Pressable>

          <Pressable
            style={[styles.tab, activeTab === 'moments' && styles.activeTab]}
            onPress={() => setActiveTab('moments')}
          >
            <Text
              weight={activeTab === 'moments' ? 'semibold' : 'normal'}
              size={16}
              color={activeTab === 'moments' ? colors.textPrimary : colors.textSecondary}
            >
              Key moments
            </Text>
          </Pressable>
        </View>

        {/* Tab content */}
        {activeTab === 'summary' ? (
          <SmartSummaryTab summary={sessionResult.smartSummary} />
        ) : (
          <KeyMomentsTab
            moments={sessionResult.keyMoments}
            audioDurationSeconds={sessionResult.audioDurationSeconds}
          />
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    marginHorizontal: spacing.l,
    marginTop: spacing.l,
    borderBottomWidth: 1,
    borderBottomColor: palette.gray20,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: spacing.s,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: colors.textPrimary,
  },
});
