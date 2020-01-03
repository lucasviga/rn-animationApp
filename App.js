import React, {useEffect, useState, useMemo} from 'react';
import {StyleSheet, View, Animated, PanResponder} from 'react-native';

function App() {
  const [ball, setBall] = useState(
    new Animated.ValueXY({
      x: 0,
      y: 0,
    }),
  );

  const panResponder = useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: (e, gestureState) => true,

        onPanResponderGrant: (e, gestureState) => {
          ball.setOffset({
            x: ball.x._value,
            y: ball.y._value,
          });

          ball.setValue({x: 0, y: 0});
        },

        onPanResponderMove: Animated.event([
          null,
          {
            dx: ball.x,
            dy: ball.y,
          },
        ]),

        onPanResponderRelease: () => {
          ball.flattenOffset();
        },
      }),
    [ball],
  );

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.ball,
          {transform: [{translateX: ball.x}, {translateY: ball.y}]},
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
