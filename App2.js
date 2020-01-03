import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

function App() {
  const [ballY, setBallY] = useState(new Animated.Value(0));
  const [ballX, setBallX] = useState(new Animated.Value(0));

  useEffect(() => {
    // Animated.timing(ballY, {
    //   toValue: 500,
    //   duration: 1000,
    // }).start();

    // Animated.spring(ballY, {
    //   toValue: 300,
    //   bounciness: 20,
    // }).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(ballY, {
          toValue: 200,
          duration: 1000,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          toValue: 200,
          duration: 1000,
        }),

        Animated.timing(ballY, {
          toValue: 0,
          duration: 1000,
        }),

        Animated.delay(200),

        Animated.timing(ballX, {
          toValue: 0,
          duration: 1000,
        }),

        Animated.delay(200),
      ]),
      {
        iterations: 2,
      },
    ).start();
  }, [ballX, ballY]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.ball, {top: ballY, left: ballX}]} />
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
