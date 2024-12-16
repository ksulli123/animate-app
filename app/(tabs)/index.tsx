import { Button, FlatList, Text, TouchableOpacity, TouchableWithoutFeedback, useWindowDimensions, View } from "react-native";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';

export default function Index() {
  const width = useSharedValue(100);
  const { width: windowWidth } = useWindowDimensions();

  const handlePress = () => {
    if (width.value + 50 > windowWidth) {
      width.value = withSpring(100);
    } else {
      width.value = withSpring(width.value + 50);
    }
  };

  return (
    <View
       style={{
        flex: 1, alignItems: 'center', justifyContent: 'center'
      }}
    >
      

      <TouchableWithoutFeedback onPress={handlePress}>
        <Animated.View
          style={{
            width: width,
            height: width,
            borderRadius: width,
            backgroundColor: 'violet',
          }}
        />
      </TouchableWithoutFeedback>

      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}
