import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
// import { Slot } from 'expo-router';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-pblack">Barbell5</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: 'blue' }}>Home</Link>
    </View>
  );
}