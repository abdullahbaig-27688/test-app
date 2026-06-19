import { AlertTriangle, ArrowLeft } from 'lucide-react-native';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');
const { router } = require('expo-router');

type FilterType = 'Pickup' | 'On Way' | 'Delivered' | 'Delayed';

interface OrderItem {
  id: string;
  orderNumber: string;
  restaurant: string;
  driverName: string;
  driverAvatar: string;
  customerArea: string;
  etaTime?: string;
  etaClock?: string;
  statusType: 'normal' | 'delayed';
  delayAmount?: string;
  currentStepLabel: string;
  steps: string[];
  progressPercent: number; // e.g., 0.66 for 2/3 of the bar filled
  delayedProgressPercent?: number; // extra accent space for split delay states
  actionLabel: string;
}

const ORDERS_DATA: OrderItem[] = [
  {
    id: '1',
    orderNumber: '#8920',
    restaurant: 'Sushi Zen',
    driverName: 'Aram',
    driverAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    customerArea: 'Chwarbax',
    etaTime: '12 MINS',
    etaClock: 'ETA 19:45',
    statusType: 'normal',
    currentStepLabel: 'On Route',
    steps: ['Picked Up', 'On Route', 'Delivering'],
    progressPercent: 0.66,
    actionLabel: 'Track Route',
  },
  {
    id: '2',
    orderNumber: '#8915',
    restaurant: 'Burger Joint',
    driverName: 'Aram',
    driverAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    customerArea: 'Rzgari',
    statusType: 'delayed',
    delayAmount: '+15m Delay',
    currentStepLabel: 'Waiting',
    steps: ['At Restaurant', 'Waiting', 'Delivering'],
    progressPercent: 0.33,
    delayedProgressPercent: 0.12,
    actionLabel: 'Contact Driver',
  },
];

export default function ActiveDeliveries() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('Pickup');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER ROW */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={20} color="#111827" />
        </Pressable>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Active Deliveries</Text>
          <Text style={styles.headerSubtitle}>Monitoring 3 ongoing routes</Text>
        </View>
      </View>

      {/* HORIZONTAL FILTERS SCROLL VIEW */}
      <View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.filterScrollContainer}
        >
          {(['Pickup', 'On Way', 'Delivered', 'Delayed'] as FilterType[]).map((filter) => {
            const isActive = activeFilter === filter;
            const isDelayedTab = filter === 'Delayed';

            return (
              <Pressable
                key={filter}

                style={[
                  styles.filterPill,
                  isActive && styles.filterPillActive,
                  !isActive && isDelayedTab && styles.filterPillDelayedInactive
                ]}
                onPress={() => setActiveFilter(filter)}
              >
                <Text style={[
                  styles.filterText,
                  isActive && styles.filterTextActive,
                  isDelayedTab && !isActive && { color: '#DC2626' }
                ]}>
                  {filter}
                  {isDelayedTab && ' 📍'}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>

      {/* MAIN CARDS FEED LIST */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.cardsScrollContainer}>
        {ORDERS_DATA.map((order) => {
          const isDelayed = order.statusType === 'delayed';

          return (
            <View
              key={order.id}
              style={[
                styles.orderCard,
                isDelayed && styles.orderCardDelayedBorder
              ]}
            >
              {/* Optional absolute top-right delay indicator badge */}
              {isDelayed && (
                <View style={styles.delayedTopBadge}>
                  <AlertTriangle size={12} color="#DC2626" style={{ marginRight: 3 }} />
                  <Text style={styles.delayedTopBadgeText}>Delayed</Text>
                </View>
              )}

              {/* CARD TOP INFO */}
              <View style={styles.cardHeaderRow}>
                <View>
                  <Text style={styles.orderNumberLabel}>ORDER {order.orderNumber}</Text>
                  <Text style={styles.restaurantName}>{order.restaurant}</Text>
                </View>

                {!isDelayed ? (
                  <View style={styles.etaContainer}>
                    <Text style={styles.etaTimeText}>{order.etaTime}</Text>
                    <Text style={styles.etaClockText}>{order.etaClock}</Text>
                  </View>
                ) : (
                  <View style={styles.delayedMetaContainer}>
                    <Text style={styles.customerAreaLabel}>{order.customerArea}</Text>
                    <Text style={styles.delayAmountText}>{order.delayAmount}</Text>
                  </View>
                )}
              </View>

              {/* DRIVER METADATA BLOCK */}
              <View style={styles.driverSectionRow}>
                <View style={styles.driverProfileLeft}>
                  <Image source={{ uri: order.driverAvatar }} style={styles.driverAvatar} />
                  <View>
                    <Text style={styles.driverName}>{order.driverName}</Text>
                    <Text style={styles.driverLabelSub}>Driver</Text>
                  </View>
                </View>
                {!isDelayed && (
                  <View style={styles.areaRightContainer}>
                    <Text style={styles.areaValue}>{order.customerArea}</Text>
                    <Text style={styles.areaLabelSub}>Customer Area</Text>
                  </View>
                )}
              </View>

              {/* ROUTE TIMELINE TRACK & LABELS */}
              <View style={styles.timelineWrapper}>
                <View style={styles.timelineLabelsRow}>
                  {order.steps.map((step, idx) => {
                    const isCurrentStep = step === order.currentStepLabel;
                    return (
                      <Text
                        key={idx}
                        style={[
                          styles.stepLabelText,
                          isCurrentStep && !isDelayed && styles.stepLabelActive,
                          isCurrentStep && isDelayed && styles.stepLabelDelayedActive,
                          idx === 1 && { textAlign: 'center' },
                          idx === 2 && { textAlign: 'right' }
                        ]}
                      >
                        {step}
                      </Text>
                    );
                  })}
                </View>

                {/* Progress Bar Track */}
                <View style={styles.progressBarBackground}>
                  <View
                    style={[
                      styles.progressBarFillNormal,
                      { width: `${order.progressPercent * 100}%` },
                      isDelayed && { backgroundColor: '#7C3AED' }
                    ]}
                  />
                  {isDelayed && order.delayedProgressPercent && (
                    <View
                      style={[
                        styles.progressBarFillWarning,
                        { width: `${order.delayedProgressPercent * 100}%` }
                      ]}
                    />
                  )}
                </View>
              </View>

              {/* CARD ACTION CONTEXT BUTTON */}
              <Pressable
                style={[
                  styles.cardActionButton,
                  isDelayed && styles.cardActionButtonDelayed
                ]}

              >
                <Text style={[
                  styles.cardActionText,
                  isDelayed && styles.cardActionTextDelayed
                ]}>
                  {order.actionLabel}
                </Text>
              </Pressable>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  headerTitleContainer: {
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  headerSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 2,
  },
  filterScrollContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 8,
  },
  filterPill: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  filterPillActive: {
    backgroundColor: '#6D28D9',
    borderColor: '#6D28D9',
  },
  filterPillDelayedInactive: {
    borderColor: '#FEE2E2',
    backgroundColor: '#FFF',
  },
  filterText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5563',
  },
  filterTextActive: {
    color: '#FFF',
    fontWeight: '600',
  },
  cardsScrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 40,
  },
  orderCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    position: 'relative',
    overflow: 'hidden',
  },
  orderCardDelayedBorder: {
    borderColor: '#FEE2E2',
    backgroundColor: '#FFF5F5',
  },
  delayedTopBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#FEE2E2',
    borderBottomLeftRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  delayedTopBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#DC2626',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  orderNumberLabel: {
    fontSize: 11,
    fontWeight: '600',
    color: '#9CA3AF',
    letterSpacing: 0.5,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginTop: 2,
  },
  etaContainer: {
    alignItems: 'flex-end',
  },
  etaTimeText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#7C3AED',
  },
  etaClockText: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  delayedMetaContainer: {
    alignItems: 'flex-end',
    marginRight: 80, // Safe padding bound to prevent dynamic overlapping with the absolute warning badge
  },
  customerAreaLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  delayAmountText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#DC2626',
    marginTop: 2,
  },
  driverSectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  driverProfileLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverAvatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  driverName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  driverLabelSub: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 1,
  },
  areaRightContainer: {
    alignItems: 'flex-end',
  },
  areaValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },
  areaLabelSub: {
    fontSize: 12,
    color: '#9CA3AF',
    marginTop: 1,
  },
  timelineWrapper: {
    marginBottom: 20,
  },
  timelineLabelsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  stepLabelText: {
    flex: 1,
    fontSize: 12,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  stepLabelActive: {
    color: '#7C3AED',
    fontWeight: '700',
  },
  stepLabelDelayedActive: {
    color: '#DC2626',
    fontWeight: '700',
  },
  progressBarBackground: {
    height: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 3,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  progressBarFillNormal: {
    height: '100%',
    backgroundColor: '#7C3AED',
    borderRadius: 3,
  },
  progressBarFillWarning: {
    height: '100%',
    backgroundColor: '#FCA5A5',
    marginLeft: 1,
  },
  cardActionButton: {
    backgroundColor: '#F3E8FF',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardActionText: {
    color: '#7C3AED',
    fontWeight: '600',
    fontSize: 14,
  },
  cardActionButtonDelayed: {
    backgroundColor: '#FEE2E2',
  },
  cardActionTextDelayed: {
    color: '#DC2626',
  },
});