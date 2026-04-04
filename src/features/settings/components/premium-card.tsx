import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Text } from '@/components/ui/text';
import { colors, palette } from '@/theme/colors';
import { spacing } from '@/theme/spacing';

export const PremiumCard = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.textSection}>
          <Text size={14} color={palette.white} weight="normal">
            3 days free trial for
          </Text>
          <Text weight="bold" size={40} color={palette.white} style={styles.price}>
            ₹1
          </Text>
          <Text size={12} color={colors.premiumSubtitle}>
            Then ₹299/month
          </Text>
        </View>

        <View style={styles.imageSection}>
          <Image
            source={require('../../../../../assets/images/premium-card.png')}
            style={styles.illustration}
            contentFit="contain"
            cachePolicy="memory-disk"
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.trialButton}>
          <Text weight="bold" size={14} color={colors.textPrimary} align="center">
            START 3 DAYS TRIAL @ ₹1
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.premiumCardBg,
    borderRadius: spacing.cardRadius,
    marginHorizontal: spacing.l,
    marginTop: spacing.m,
    overflow: 'hidden',
  },
  content: {
    flexDirection: 'row',
    paddingLeft: spacing.l,
    paddingTop: spacing.m,
  },
  textSection: {
    flex: 1,
    justifyContent: 'center',
  },
  price: {
    lineHeight: 48,
    marginVertical: spacing.xxs,
  },
  imageSection: {
    width: 120,
    height: 120,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  illustration: {
    width: 120,
    height: 120,
  },
  buttonContainer: {
    paddingHorizontal: spacing.m,
    paddingBottom: spacing.m,
    paddingTop: spacing.xs,
  },
  trialButton: {
    backgroundColor: colors.premiumButtonBg,
    borderRadius: spacing.buttonRadius,
    paddingVertical: spacing.s,
    paddingHorizontal: spacing.m,
  },
});
