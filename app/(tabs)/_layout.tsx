import { Tabs } from 'expo-router';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          href: null,
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="performance"
        options={{
          href: null,
          title: 'Performance',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="chart.bar.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="overview"
        options={{
          href: null,
          title: 'Overview',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="eye.fill" color={color} />,
        }} />
      <Tabs.Screen
        name="profile"
        options={{
          href: null,
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="assignOrder"
        options={{
          href: null,
          title: 'Assign Order',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="plus.circle.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="activeDeliveries"
        options={{
          href: null,
          title: 'Active Deliveries',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="truck.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="driverShift"
        options={{
          href: null,
          title: 'Driver Shifts',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="clock.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="reassignOrder"
        options={{
          href: null,
          title: 'Reassign Order',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="arrow.2.circlepath" color={color} />,
        }}
      />
      <Tabs.Screen
        name="issueCenter"
        options={{
          href: null,
          title: 'Issue Center',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="exclamationmark.triangle.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
