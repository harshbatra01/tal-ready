import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image } from 'expo-image';
import { LogoFallback } from './logo-fallback';
import { colors, palette } from '@/theme/colors';

interface AvatarProps {
  url: string;
  name?: string;
  size?: number;
  shape?: 'circle' | 'rounded';
}

export const Avatar = ({ url, name = '', size = 56, shape = 'rounded' }: AvatarProps) => {
  const [error, setError] = useState(false);

  if (error || !url) {
    if (shape === 'rounded' && name) {
      return <LogoFallback name={name} size={size} />;
    }
    // Simple fallback for circular avatars without names
    return (
      <View
        style={[
          styles.fallbackContainer,
          {
            width: size,
            height: size,
            borderRadius: shape === 'circle' ? size / 2 : size / 4,
          },
        ]}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: url }}
        style={[
          styles.image,
          {
            width: size,
            height: size,
            borderRadius: shape === 'circle' ? size / 2 : size / 4,
          },
        ]}
        contentFit="cover"
        transition={200}
        cachePolicy="memory-disk"
        onError={() => setError(true)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroundSecondary,
  },
  image: {
    backgroundColor: colors.backgroundSecondary,
  },
  fallbackContainer: {
    backgroundColor: palette.gray20,
    borderWidth: 1,
    borderColor: colors.border,
  },
});
