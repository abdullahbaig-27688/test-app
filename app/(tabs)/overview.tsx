import { MapPin, MessageSquare, MoreHorizontal, Phone, Search, Wallet } from 'lucide-react-native';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');

type StatusFilter = 'All' | 'Available' | 'Busy' | 'Offline';

interface DriverOverview {
  id: string;
  name: string;
  avatar: string;
  status: 'available' | 'on_delivery';
  statusLabel: string;
  location: string;
  earnings: string;
  rating: string;
  isActiveAction: boolean;
}

const DRIVERS_DATA: DriverOverview[] = [
  {
    id: '1',
    name: 'Ahmed Ali',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    status: 'available',
    statusLabel: 'Available',
    location: 'Sarshaqam',
    earnings: '12,000 IQD',
    rating: '4.9',
    isActiveAction: true,
  },
  {
    id: '2',
    name: 'Aram Hassan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    status: 'on_delivery',
    statusLabel: 'On Delivery',
    location: 'Baxtyari',
    earnings: '12,000 IQD',
    rating: '4.8',
    isActiveAction: false,
  },
  {
    id: '3',
    name: 'Aram Hassan',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    status: 'on_delivery',
    statusLabel: 'On Delivery',
    location: 'Baxtyari',
    earnings: '12,000 IQD',
    rating: '4.8',
    isActiveAction: false,
  },
];

export default function TeamOverviewScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<StatusFilter>('All');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />


      <View style={styles.header}>
        <Text style={styles.headerTitle}>Team Overview</Text>
        <Text style={styles.headerSubtitle}>Manage and monitor your drivers in real-time.</Text>
      </View>


      <View style={styles.searchContainer}>
        <Search size={18} color="#9CA3AF" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search driver"
          placeholderTextColor="#9CA3AF"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>


      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContainer}
        >
          {(['All', 'Available', 'Busy', 'Offline'] as StatusFilter[]).map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <Pressable
                key={filter}
                style={[styles.filterPill, isActive && styles.filterPillActive]}
                onPress={() => setActiveFilter(filter)}
              >
                <Text style={[styles.filterText, isActive && styles.filterTextActive]}>
                  {filter}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>


      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {DRIVERS_DATA.map((driver, index) => {
          const isAvailable = driver.status === 'available';

          return (
            <View key={`${driver.id}-${index}`} style={styles.driverCard}>


              <View style={styles.cardHeader}>
                <View style={styles.profileRow}>
                  <View style={styles.avatarWrapper}>
                    <Image source={{ uri: driver.avatar }} style={styles.avatar} />
                    <View
                      style={[
                        styles.statusIndicatorDot,
                        { backgroundColor: isAvailable ? '#10B981' : '#F59E0B' }
                      ]}
                    />
                  </View>
                  <View style={styles.driverMeta}>
                    <Text style={styles.driverName}>{driver.name}</Text>
                    <Text style={[styles.statusLabelText, { color: isAvailable ? '#10B981' : '#F59E0B' }]}>
                      {isAvailable ? '✓ ' : '🚚 '}
                      {driver.statusLabel}
                    </Text>
                  </View>
                </View>


                <View style={styles.ratingBadge}>
                  <Text style={styles.ratingStar}>★</Text>
                  <Text style={styles.ratingText}>{driver.rating}</Text>
                </View>
              </View>


              <View style={styles.metricsContainerRow}>
                <View style={styles.metricItem}>
                  <MapPin size={16} color="#6B7280" style={styles.metricIcon} />
                  <Text style={styles.metricText}>{driver.location}</Text>
                </View>
                <View style={styles.metricItem}>
                  <Wallet size={16} color="#6B7280" style={styles.metricIcon} />
                  <Text style={styles.metricText}>{driver.earnings}</Text>
                </View>
              </View>


              <View style={styles.actionsContainerRow}>
                <Pressable
                  style={[
                    styles.messageButton,
                    driver.isActiveAction ? styles.messageButtonActive : styles.messageButtonInactive
                  ]}

                >
                  <MessageSquare
                    size={18}
                    color={driver.isActiveAction ? '#FFF' : '#7C3AED'}
                    style={styles.actionIconSpace}
                  />
                  <Text
                    style={[
                      styles.messageButtonText,
                      { color: driver.isActiveAction ? '#FFF' : '#7C3AED' }
                    ]}
                  >
                    Message
                  </Text>
                </Pressable>

                <Pressable style={styles.squareIconButton}>
                  <Phone size={18} color="#111827" />
                </Pressable>

                <Pressable style={styles.squareIconButton}>
                  <MoreHorizontal size={18} color="#111827" />
                </Pressable>
              </View>

            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9FF',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 22,
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginVertical: 12,
    paddingHorizontal: 14,
    height: 48,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#111827',
  },
  filterScrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginBottom: 12,
    gap: 8,
  },
  filterPill: {
    paddingHorizontal: 18,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  filterPillActive: {
    backgroundColor: '#5B00BA',
    borderColor: '#5B00BA',
  },
  filterText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
  },
  filterTextActive: {
    color: '#FFF',
    fontWeight: '600',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  driverCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    elevation: 2,
    shadowColor: '#5B00BA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.02,
    shadowRadius: 10,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  statusIndicatorDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    right: 2,
    zIndex: 10,
  },
  driverMeta: {
    marginLeft: 12,
  },
  driverName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  statusLabelText: {
    fontSize: 12,
    fontWeight: '600',
    marginTop: 3,
  },
  ratingBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3E8FF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
  },
  ratingStar: {
    color: '#F59E0B',
    fontSize: 12,
    marginRight: 3,
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111827',
  },
  metricsContainerRow: {
    flexDirection: 'row',
    marginTop: 16,
    marginBottom: 16,
    gap: 24,
  },
  metricItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metricIcon: {
    marginRight: 6,
  },
  metricText: {
    fontSize: 13,
    color: '#4B5563',
    fontWeight: '500',
  },
  actionsContainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 64) * 0.64,
    height: 42,
    borderRadius: 21,
  },
  messageButtonActive: {
    backgroundColor: '#5B00BA',
  },
  messageButtonInactive: {
    backgroundColor: '#F3E8FF',
  },
  actionIconSpace: {
    marginRight: 6,
  },
  messageButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  squareIconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
});