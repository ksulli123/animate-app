import { Button, FlatList, Text, useWindowDimensions, View } from "react-native";
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import { Circle, G, Svg } from 'react-native-svg';
import LoadingSpinner from "../../components/LoadingSpinner";

const animations = [
  { title: 'Animations', route: 'Animations' },
]

export default function Animations() {
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
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <LoadingSpinner />
    </View>
  );
}
