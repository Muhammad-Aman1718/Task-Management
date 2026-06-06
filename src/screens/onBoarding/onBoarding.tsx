import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { LinearGradient } from 'react-native-linear-gradient';
import Button from '../../components/buttons/Button';

const onBoarding = () => {
  return (
    <LinearGradient
      colors={['#7A5AF8', '#FFFFFF']}
      locations={[0.1, 0.5]}
      style={styles.container}
    >
      <View>
        <Text>Welcome to Workmate!</Text>
        <Text>
          Make Smart Decisions! Set clear timelines for projects and celebrate
          your achievements!
        </Text>

        <Button />
      </View>
      <Text>onBoarding</Text>
    </LinearGradient>
  );
};

export default onBoarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
