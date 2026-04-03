import React from 'react';
import { View, StyleSheet, ViewProps, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { colors } from '@/theme/colors';

interface ScreenWrapperProps extends ViewProps {
  children: React.ReactNode;
  edges?: Edge[];
  backgroundColor?: string;
  unsafe?: boolean;
}

export const ScreenWrapper = ({
  children,
  edges = ['top'],
  backgroundColor = colors.background,
  unsafe = false,
  style,
  ...props
}: ScreenWrapperProps) => {
  const Container = unsafe ? View : SafeAreaView;
  
  return (
    <Container
      style={[
        styles.container,
        { backgroundColor },
        style as StyleProp<ViewStyle>,
      ]}
      edges={unsafe ? undefined : edges}
      {...props}
    >
      <StatusBar style="dark" />
      {children}
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
