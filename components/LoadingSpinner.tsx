import React, { useEffect } from 'react';
import { View } from 'react-native';
import Animated, { Easing, useAnimatedProps, useAnimatedStyle, useSharedValue, withRepeat, withSequence, withTiming } from 'react-native-reanimated';
import { Circle, G, Svg } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const LoadingSpinner = () => {
  const CIRCUMFERENCE = 500;
  const R = CIRCUMFERENCE / (2 * Math.PI);
  const strokeWidth = 3;
  const HALF_CIRCLE = R + strokeWidth;
  const DIAMETER = 2 * HALF_CIRCLE;
  
  const progress = useSharedValue(0.3);

  const rotation = useSharedValue(0);

  const animatedCircleProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: CIRCUMFERENCE * (1 - progress.value),
    }
  }, []);

  const animatedViewStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: `${rotation.value}deg` }],
    }
  }, []);

  useEffect(() => {
    startAnimation();

    return () => {
      progress.value = withTiming(0, { duration: 0 });
      rotation.value = withTiming(0, { duration: 0 });
    }
  }, []);

  const startAnimation = () => {
    progress.value = withTiming(0.6, { duration: 1000 });
  
    progress.value = withRepeat(
      withSequence(
        withTiming(0.7, { duration: 800 }),
        withTiming(0.1, { duration: 2000 }),
      ), -1, true
    );

    rotation.value = withRepeat(
      withTiming(360, { duration: 900, easing: Easing.linear }), -1, false
    );
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Animated.View style={animatedViewStyle}>
        <Svg width={DIAMETER} height={DIAMETER} viewBox={`0 0 ${DIAMETER} ${DIAMETER}`}>
          <G rotation={-90} origin={`${HALF_CIRCLE}, ${HALF_CIRCLE}`}>
            <AnimatedCircle 
              animatedProps={animatedCircleProps}
              cx={'50%'} 
              cy={'50%'} 
              r={R} 
              stroke='green' 
              fill='transparent' 
              strokeWidth={strokeWidth} 
              strokeDasharray={CIRCUMFERENCE}
            />
          </G>
        </Svg>
      </Animated.View>
    </View>
  )
}

export default LoadingSpinner