import { View, Text } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
<HomeScreen />
</GestureHandlerRootView>
   
   

  );
}
