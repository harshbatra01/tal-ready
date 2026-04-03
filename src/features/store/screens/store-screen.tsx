import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '@/components/ui/text';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { colors } from '@/theme/colors';
import { Ionicons } from '@expo/vector-icons';

export const StoreScreen = () => {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <Ionicons name="bag-outline" size={64} color={colors.textDisabled} />
        <Text weight="semibold" size={20} color={colors.textPrimary} style={styles.title}>
          Store
        </Text>
        <Text size={14} color={colors.textSecondary} align="center">
          Coming soon! Premium courses and{'\n'}interview packs will be available here.
        </Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  },
  title: {
    marginTop: 8,
  },
});
