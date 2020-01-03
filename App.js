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

    Animated.timing(ballY, {
      toValue: 500,
      duration: 1000,
    }).start();
  }, [ballX, ballY]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ball,
          {
            top: ballY,
            opacity: ballY.interpolate({
              inputRange: [0, 300],
              outputRange: [1, 0.2],
              extrapolate: 'clamp',
            }),
            left: ballX,
          },
        ]}
      />
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
