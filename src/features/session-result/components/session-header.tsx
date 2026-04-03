import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { Text } from '@/components/ui/text';
import { colors, palette } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { Ionicons } from '@expo/vector-icons';

interface SessionHeaderProps {
  questionText: string;
  companyName: string;
  companyLogoUrl: string;
  onClose: () => void;
}

export const SessionHeader = ({
  questionText,
  companyName,
  companyLogoUrl,
  onClose,
}: SessionHeaderProps) => {
  return (
    <View style={styles.container}>
      {/* Close button */}
      <Pressable style={styles.closeButton} onPress={onClose} hitSlop={12}>
        <Ionicons name="close" size={28} color={colors.textPrimary} />
      </Pressable>

      {/* Avatars */}
      <View style={styles.avatarsRow}>
        <View style={styles.avatarContainer}>
          <Image
            source={require('../../../../../assets/images/avatar-female.png')}
            style={styles.avatar}
            contentFit="cover"
            cachePolicy="memory-disk"
          />
        </View>
        <View style={[styles.avatarContainer, { marginLeft: -16 }]}>
          <Image
            source={require('../../../../../assets/images/avatar-male.png')}
            style={styles.avatar}
            contentFit="cover"
            cachePolicy="memory-disk"
          />
        </View>
      </View>

      {/* Green banner */}
      <View style={styles.greenBanner}>
        <Text
          weight="semibold"
          size={16}
          color={colors.textPrimary}
          align="center"
          style={styles.questionText}
        >
          {questionText}
        </Text>

        <View style={styles.companyTag}>
          <Image
            source={{ uri: companyLogoUrl }}
            style={styles.companyLogo}
            contentFit="contain"
            cachePolicy="memory-disk"
          />
          <Text size={13} color={colors.textSecondary}>
            Asked by {companyName}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: spacing.xs,
  },
  closeButton: {
    position: 'absolute',
    top: spacing.xs,
    right: spacing.m,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: palette.gray20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: spacing.m,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: palette.white,
    backgroundColor: palette.gray10,
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  greenBanner: {
    backgroundColor: palette.green10,
    borderRadius: spacing.cardRadius,
    paddingHorizontal: spacing.l,
    paddingVertical: spacing.m,
    marginHorizontal: spacing.m,
    width: '100%',
    alignItems: 'center',
  },
  questionText: {
    marginBottom: spacing.xs,
    lineHeight: 22,
  },
  companyTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: spacing.xxs,
  },
  companyLogo: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
});
