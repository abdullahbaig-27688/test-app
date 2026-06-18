import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import Button from '@/components/ui/button';
import { useRouter } from 'expo-router';


export default function HomeScreen() {
  const router = useRouter();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />

      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Button title="Team Performance" onPress={() => router.push('/performance')} variant="primary" />
        <Button title="Team Overview" onPress={() => router.push('/(tabs)/overview')} variant="secondary" />
        <Button title="Driver Profile" onPress={() => router.push('/profile')} variant="outline" />
        <Button title="Reassign Order" onPress={() => router.push('/reassignOrder')} variant="danger" />
        <Button title="Assign Order" onPress={() => router.push('/assignOrder')} variant="warning" />
        <Button title="Active Deliveries" onPress={() => router.push('/activeDeliveries')} variant="success" />
        <Button title="Issue Center" onPress={() => router.push('/(tabs)/revenue')} variant="info" />
        <Button title="Driver Shifts" onPress={() => router.push('/(tabs)/driverShift')} variant="dark" />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
