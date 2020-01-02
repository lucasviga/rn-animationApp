import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

function App() {
  const [ballY, setBallY] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animated.timing(ballY, {
    //   toValue: 500,
    //   duration: 1000,
    // }).start();

    // Animated.spring(ballY, {
    //   toValue: 300,
    //   bounciness: 20,
    // }).start();

    Animated.decay(ballY, {
      velocity: 1,
    }).start();
  }, [ballY]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, {top: ballY}]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  ball: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#f00',
  },
});

export default App;
