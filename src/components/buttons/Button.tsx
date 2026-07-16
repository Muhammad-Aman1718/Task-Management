import { StyleSheet, Text, Pressable, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Button = () => {
  return (
    <Pressable
      style={({ pressed }) => [styles.wrapper, pressed && { opacity: 0.7 }]}
    >
      {/* OUTER GLOW / BORDER LAYER */}
      <View style={styles.shadowOuter}>
        {/* INNER GRADIENT BUTTON */}
        <LinearGradient
          colors={['#8862F2', '#7544FC', '#5B2ED4']}
          locations={[0, 0.5, 1]}
          style={styles.gradient}
        >
          <Text style={styles.text}>Next</Text>
        </LinearGradient>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
  },

  // 🔥 OUTER SHADOW (glow effect)
  shadowOuter: {
    borderRadius: 100,

    shadowColor: '#6C3BFF',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 1,

    elevation: 10, // Android glow

    backgroundColor: 'transparent',
  },

  // 🎯 INNER GRADIENT BUTTON
  gradient: {
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 1003,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: '#fff',
    // fontWeight: '600',
    fontSize: 18,
  },
});
