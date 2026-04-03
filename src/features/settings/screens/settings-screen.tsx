import React from 'react';
import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text } from '@/components/ui/text';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { PremiumCard } from '../components/premium-card';
import { SettingsMenuItem } from '../components/settings-menu-item';
import { getUser } from '@/data';
import { colors, palette } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  navigation: any;
}

export const SettingsScreen = ({ navigation }: Props) => {
  const user = getUser();

  return (
    <ScreenWrapper backgroundColor={colors.backgroundSettings}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} hitSlop={8}>
          <Ionicons name="chevron-back" size={28} color={colors.textPrimary} />
        </Pressable>
        <Text weight="semibold" size={20} color={colors.textPrimary}>
          Your Profile
        </Text>
        <View style={{ width: 28 }} />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <PremiumCard />

        {/* Section 1: Info items */}
        <View style={styles.menuSection}>
          <SettingsMenuItem
            icon="cloud-download-outline"
            label="New update available"
            rightElement="download"
          />
          <View style={styles.separator} />
          <SettingsMenuItem
            icon="call-outline"
            label="Phone number"
            value={user.phone}
            rightElement="none"
          />
          <View style={styles.separator} />
          <SettingsMenuItem
            icon="calendar-outline"
            label="Learning since"
            value={user.memberSince}
            rightElement="none"
          />
        </View>

        {/* Section 2: Action items */}
        <View style={styles.menuSection}>
          <SettingsMenuItem
            icon="chatbubble-ellipses-outline"
            label="Chat with us"
            onPress={() => {}}
          />
          <View style={styles.separator} />
          <SettingsMenuItem
            icon="share-social-outline"
            label="Share the app"
            onPress={() => {}}
          />
          <View style={styles.separator} />
          <SettingsMenuItem
            icon="star-outline"
            label="Rate the app"
            onPress={() => {}}
          />
          <View style={styles.separator} />
          <SettingsMenuItem
            icon="log-out-outline"
            label="Log out"
            onPress={() => {}}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text size={13} color={colors.textDisabled}>
            App version v2.14.2
          </Text>
          <Text size={13} color={colors.textDisabled} style={styles.madeIn}>
            Made with ❤️ in India
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.m,
    paddingVertical: spacing.s,
    backgroundColor: palette.white,
  },
  menuSection: {
    marginTop: spacing.m,
    backgroundColor: palette.white,
    borderRadius: spacing.cardRadius,
    marginHorizontal: spacing.m,
    overflow: 'hidden',
  },
  separator: {
    height: 1,
    backgroundColor: palette.gray20,
    marginLeft: spacing.giga,
  },
  footer: {
    alignItems: 'center',
    paddingVertical: spacing.xxl,
    gap: spacing.xxs,
  },
  madeIn: {
    marginTop: spacing.xxs,
  },
});
