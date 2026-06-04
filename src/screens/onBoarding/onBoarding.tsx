import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';

const onBoarding = () => {
  return (
    <LinearGradient colors={['#FF6B6B', '#FF3']} style={styles.container}>
      <Text>onBoarding</Text>
    </LinearGradient>
  );
};

export default onBoarding;

const styles = StyleSheet.create({});
