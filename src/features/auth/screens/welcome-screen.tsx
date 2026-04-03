import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '@/navigation/types';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'Welcome'>;

interface Props {
  navigation: WelcomeScreenNavigationProp;
}

export const WelcomeScreen = ({ navigation }: Props) => {
  return (
    <ScreenWrapper style={styles.container}>
      <View style={styles.header}>
        <Text weight="bold" size={32} color={colors.primary}>
          Ready<Text weight="bold" size={32} color={colors.textPrimary}>ai</Text>
        </Text>
      </View>

      <View style={styles.imageContainer}>
        {/* We use a placeholder local path here, but this assumes the user placed the image in assets/images/ */}
        <Image
          source={require('../../../../assets/images/welcome-illustration.png')}
          style={styles.illustration}
          contentFit="contain"
          // If the local file fails to load or doesn't exist yet, we don't want it to crash, but expo-image handles that.
        />
      </View>

      <View style={styles.contentContainer}>
        <Text weight="bold" size={28} align="center" style={styles.title}>
          Practice Top Interview{'\n'}
          Questions <Text weight="bold" size={28} color={colors.primary}>with AI</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Let's go"
            icon="checkmark-circle-outline"
            onPress={() => navigation.navigate('Login')}
          />
        </View>

        <Text size={12} color={colors.textSecondary} align="center" style={styles.footerText}>
          By continuing, you acknowledge agreeing to our{'\n'}
          <Text size={12} color={colors.textSecondary} style={{ textDecorationLine: 'underline' }}>terms of service</Text>
          {' '}and{' '}
          <Text size={12} color={colors.textSecondary} style={{ textDecorationLine: 'underline' }}>privacy policy</Text>
        </Text>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.screenPadding,
  },
  header: {
    alignItems: 'center',
    paddingTop: spacing.xxl,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  illustration: {
    width: 300,
    height: 300,
  },
  contentContainer: {
    paddingBottom: spacing.xxl,
  },
  title: {
    lineHeight: 38,
  },
  buttonContainer: {
    marginTop: spacing.xxl,
    marginBottom: spacing.l,
  },
  footerText: {
    lineHeight: 18,
  },
});
