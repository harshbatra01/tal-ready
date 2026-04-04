import React, { useState, useRef } from 'react';
import { View, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform, Keyboard, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { Text } from '@/components/ui/text';
import { Button } from '@/components/ui/button';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { colors } from '@/theme/colors';
import { spacing } from '@/theme/spacing';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/types';
import { Ionicons } from '@expo/vector-icons';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Auth'>;

interface Props {
  navigation: LoginScreenNavigationProp;
}

export const LoginScreen = ({ navigation }: Props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [loading, setLoading] = useState(false);
  
  const otpRefs = useRef<Array<TextInput | null>>([]);
  
  const isPhoneValid = phoneNumber.length === 10;
  const isOtpValid = otp.every(digit => digit.length === 1);
  const isValid = isPhoneValid && isOtpValid;

  const handleOtpChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-advance
    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleLogin = () => {
    if (!isValid) return;
    Keyboard.dismiss();
    setLoading(true);
    
    // Simulate login
    setTimeout(() => {
      setLoading(false);
      // Navigate to Main Tab Navigator
      navigation.replace('Main', { screen: 'HomeTab' });
    }, 1000);
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView 
        style={styles.container} 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View style={styles.header}>
          <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
             <Ionicons name="arrow-back" size={24} color={colors.textPrimary} />
          </Pressable>
        </View>

        <View style={styles.content}>
          <Text weight="bold" size={32} color={colors.primary}>
            Kickstart <Text weight="bold" size={32} color={colors.textPrimary}>your journey</Text>
          </Text>
          
          <Text size={16} color={colors.textSecondary} style={styles.subtitle}>
            We will send you an OTP to verify your number.
          </Text>

          <View style={styles.inputGroup}>
            <Text size={14} color={colors.textSecondary} weight="medium" style={styles.label}>
              Phone number
            </Text>
            
            <View style={[styles.phoneInputContainer, isPhoneValid && { borderColor: colors.success }]}>
              <View style={styles.countryCode}>
                <Text size={16}>🇮🇳 +91</Text>
                <Ionicons name="chevron-down" size={16} color={colors.textSecondary} />
              </View>
              <TextInput
                style={styles.phoneInput}
                placeholder="8812014288"
                placeholderTextColor={colors.textDisabled}
                keyboardType="number-pad"
                maxLength={10}
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            </View>
            <Text size={12} color={colors.textDisabled} style={styles.helperText}>
              Please enter a valid 10-digit mobile number.
            </Text>
          </View>

          <View style={styles.inputGroup}>
            <Text size={14} color={colors.textSecondary} weight="medium" style={styles.label}>
              Enter the OTP
            </Text>
            
            <View style={styles.otpContainer}>
              {otp.map((digit, index) => (
                <View 
                  key={index} 
                  style={[
                    styles.otpBox, 
                    digit ? styles.otpBoxFilled : undefined
                  ]}
                >
                  <TextInput
                    ref={(ref) => { otpRefs.current[index] = ref; }}
                    style={styles.otpInput}
                    keyboardType="number-pad"
                    maxLength={1}
                    value={digit}
                    onChangeText={(val) => handleOtpChange(val, index)}
                    onKeyPress={(e) => handleKeyPress(e, index)}
                    placeholder="-"
                    placeholderTextColor={colors.textDisabled}
                  />
                </View>
              ))}
            </View>
            <Text size={12} color={colors.textDisabled} style={{ marginTop: spacing.xs }}>
              Any number and otp works
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Button
            title="Continue"
            onPress={handleLogin}
            disabled={!isValid}
            isLoading={loading}
          />
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: spacing.screenPadding,
  },
  header: {
    height: 56,
    justifyContent: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingTop: spacing.xxl,
  },
  subtitle: {
    marginTop: spacing.s,
    marginBottom: spacing.xxxl,
  },
  inputGroup: {
    marginBottom: spacing.xxl,
  },
  label: {
    marginBottom: spacing.s,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    height: 56,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: spacing.inputRadius,
    overflow: 'hidden',
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.m,
    gap: 4,
    borderRightWidth: 1,
    borderRightColor: colors.border,
    backgroundColor: colors.backgroundSecondary,
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: spacing.m,
    fontSize: 16,
    fontFamily: 'Inter_500Medium',
    color: colors.textPrimary,
  },
  helperText: {
    marginTop: spacing.xxs,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  otpBox: {
    width: 48,
    height: 56,
    borderRadius: spacing.inputRadius,
    backgroundColor: colors.backgroundSecondary,
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpBoxFilled: {
    backgroundColor: colors.background,
    borderColor: colors.border, // Highlight border when filled, as per Figma visual
  },
  otpInput: {
    fontSize: 24,
    fontFamily: 'Inter_600SemiBold',
    color: colors.textPrimary,
    textAlign: 'center',
    width: '100%',
    height: '100%',
  },
  footer: {
    paddingBottom: spacing.xxl,
  },
});
