import { LinearGradient } from 'expo-linear-gradient';
import { ArrowLeft, CheckCircle2, Clock, MapPin, Utensils } from 'lucide-react-native';
import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width } = Dimensions.get('window');

interface RecommendedDriver {
  id: string;
  name: string;
  avatar?: string;
  initials?: string;
  distance: string;
  eta: string;
  isTopMatch: boolean;
  activeOrdersCount: number; // 0, 1, or 2 to determine active workload bars
  statusText: string; // e.g. "2 Orders", "1 Order", "Idle"
}

const DRIVERS_RECOMMENDED: RecommendedDriver[] = [
  {
    id: '1',
    name: 'Amed K.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    distance: '1.2 km away',
    eta: '3 min',
    isTopMatch: true,
    activeOrdersCount: 2,
    statusText: '2 Orders',
  },
  {
    id: '2',
    name: 'Dara M.',
    initials: 'D',
    distance: '2.5 km away',
    eta: '6 min',
    isTopMatch: false,
    activeOrdersCount: 1,
    statusText: '1 Order',
  },
  {
    id: '3',
    name: 'Hasan J.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    distance: '3.1 km away',
    eta: '8 min',
    isTopMatch: false,
    activeOrdersCount: 0,
    statusText: 'Idle',
  },
];

export default function AssignOrderScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER SECTION */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          <ArrowLeft size={20} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Assign Order</Text>
          <Text style={styles.headerSubtitle}>assign order to drivers</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        
        {/* MAIN ORDER BRIEF CARD (AMBER YELLOW) */}
        <View style={styles.orderBriefCard}>
          <View style={styles.orderBriefHeader}>
            <View style={styles.restaurantInfoBlock}>
              <View style={styles.restaurantIconCircle}>
                <Utensils size={18} color="#FFF" />
              </View>
              <View>
                <Text style={styles.restaurantNameText}>The Grill</Text>
                <Text style={styles.orderNumberText}>Order #8492</Text>
              </View>
            </View>
            <View style={styles.priceTagBadge}>
              <Text style={styles.priceTagText}>4,000 IQD</Text>
            </View>
          </View>

          {/* Timeline Destination Map Trace */}
          <View style={styles.timelineContainer}>
            <View style={styles.timelineVisualBlock}>
              <View style={styles.pickupOuterCircle}>
                <View style={styles.pickupInnerDot} />
              </View>
              <View style={styles.dashedLine} />
              <View style={styles.dropoffCircle} />
            </View>
            
            <View style={styles.timelineLabelsBlock}>
              <View style={styles.timelineStep}>
                <Text style={styles.stepLabel}>PICKUP</Text>
                <Text style={styles.stepLocationName}>Bakhtyari</Text>
              </View>
              <View style={[styles.timelineStep, { marginTop: 14 }]}>
                <Text style={styles.stepLabel}>DROP-OFF</Text>
                <Text style={styles.stepLocationName}>Ashty Street</Text>
              </View>
            </View>
          </View>

          {/* Footnotes Bottom Horizontal Stats Grid */}
          <View style={styles.orderBriefFooter}>
            <View style={styles.footerStatItem}>
              <Clock size={14} color="#111827" style={styles.footerIconSpace} />
              <Text style={styles.footerStatText}>Prep: 15 min</Text>
            </View>
            <View style={styles.footerStatItem}>
              <Clock size={14} color="#111827" style={styles.footerIconSpace} />
              <Text style={styles.footerStatText}>Ready in 5m</Text>
            </View>
          </View>
        </View>

        {/* SECTION HEADER ROW */}
        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Recommended Drivers</Text>
          <Text style={styles.sortedLabelText}>Sorted by Match</Text>
        </View>

        {/* DRIVERS SELECTION MAP FEED */}
        {DRIVERS_RECOMMENDED.map((driver) => {
          return (
            <View 
              key={driver.id} 
              style={[
                styles.driverCard,
                driver.isTopMatch ? styles.driverCardTopMatchBorder : styles.driverCardDefaultBorder
              ]}
            >
              {/* DRIVER INFO UPPER ROW */}
              <View style={styles.driverCardHeader}>
                <View style={styles.driverProfileGroup}>
                  <View style={styles.avatarWrapper}>
                    {driver.avatar ? (
                      <Image source={{ uri: driver.avatar }} style={styles.avatar} />
                    ) : (
                      <View style={styles.initialsCircle}>
                        <Text style={styles.initialsText}>{driver.initials}</Text>
                      </View>
                    )}
                    <View style={styles.statusIndicatorGreenDot} />
                  </View>
                  
                  <View style={styles.driverMetaBlock}>
                    <Text style={styles.driverNameText}>{driver.name}</Text>
                    <View style={styles.distanceBlock}>
                      <MapPin size={12} color="#6B7280" style={styles.pinIconSpace} />
                      <Text style={styles.distanceText}>{driver.distance}</Text>
                    </View>
                  </View>
                </View>

                <View style={styles.etaBadgeGroup}>
                  {driver.isTopMatch && (
                    <View style={styles.topMatchBadge}>
                      <Text style={styles.topMatchBadgeText}>Top Match</Text>
                    </View>
                  )}
                  <Text style={styles.etaText}>ETA: {driver.eta}</Text>
                </View>
              </View>

              {/* THREE-STAGE LOADS PROGRESS TRACK BAR */}
              <View style={styles.loadIndicatorRow}>
                <View style={styles.loadIndicatorBarContainer}>
                  {[0, 1, 2].map((barIdx) => {
                    const isActive = driver.activeOrdersCount > barIdx;
                    return (
                      <View 
                        key={barIdx} 
                        style={[
                          styles.loadSegmentBar,
                          isActive ? styles.loadSegmentBarActive : styles.loadSegmentBarInactive
                        ]} 
                      />
                    );
                  })}
                </View>
                <Text style={styles.loadStatusText}>{driver.statusText}</Text>
              </View>

              {/* ACTION SUBMIT CONTAINER */}
              {driver.isTopMatch ? (
                <TouchableOpacity activeOpacity={0.8}>
                  <LinearGradient
                    colors={['#A78BFA', '#7C3AED']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={styles.primaryGradientButton}
                  >
                    <CheckCircle2 size={16} color="#FFF" style={styles.assignButtonIconSpace} />
                    <Text style={styles.primaryGradientButtonText}>Assign</Text>
                  </LinearGradient>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity style={styles.secondaryTextActionButton} activeOpacity={0.7}>
                  <Text style={styles.secondaryTextActionButtonLabel}>Assign</Text>
                </TouchableOpacity>
              )}
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
    paddingVertical: 14,
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
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 32,
  },
  orderBriefCard: {
    backgroundColor: '#FFC700', // Accurate golden amber color profile match
    borderRadius: 28,
    padding: 20,
    marginBottom: 24,
  },
  orderBriefHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  restaurantInfoBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantIconCircle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  restaurantNameText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  orderNumberText: {
    fontSize: 12,
    color: '#4B5563',
    fontWeight: '500',
    marginTop: 1,
  },
  priceTagBadge: {
    backgroundColor: '#FFFFFF4D',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  priceTagText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#111827',
  },
  timelineContainer: {
    flexDirection: 'row',
    marginVertical: 20,
    paddingHorizontal: 4,
  },
  timelineVisualBlock: {
    alignItems: 'center',
    marginRight: 14,
    paddingVertical: 4,
  },
  pickupOuterCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2,
    borderColor: '#111827',
    backgroundColor: '#FFC700',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickupInnerDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#111827',
  },
  dashedLine: {
    width: 1,
    height: 34,
    borderWidth: 1,
    borderColor: '#111827',
    borderStyle: 'dashed',
    marginVertical: 2,
  },
  dropoffCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#111827',
  },
  timelineLabelsBlock: {
    justifyContent: 'space-between',
  },
  timelineStep: {
    justifyContent: 'center',
  },
  stepLabel: {
    fontSize: 10,
    color: '#4B5563',
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  stepLocationName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
    marginTop: 2,
  },
  orderBriefFooter: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'rgba(17, 24, 39, 0.08)',
    paddingTop: 14,
    gap: 32,
  },
  footerStatItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerIconSpace: {
    marginRight: 6,
  },
  footerStatText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  sortedLabelText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#7C3AED',
  },
  driverCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
  },
  driverCardDefaultBorder: {
    borderColor: '#F3F4F6',
  },
  driverCardTopMatchBorder: {
    borderColor: '#C4B5FD',
  },
  driverCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  driverProfileGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarWrapper: {
    position: 'relative',
    width: 44,
    height: 44,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  initialsCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#F3E8FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#7C3AED',
  },
  statusIndicatorGreenDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#10B981',
    borderWidth: 1.5,
    borderColor: '#FFF',
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 10,
  },
  driverMetaBlock: {
    marginLeft: 12,
  },
  driverNameText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  distanceBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  pinIconSpace: {
    marginRight: 4,
  },
  distanceText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  etaBadgeGroup: {
    alignItems: 'flex-end',
  },
  topMatchBadge: {
    backgroundColor: '#EBE5FF',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
    marginBottom: 6,
  },
  topMatchBadgeText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#7C3AED',
  },
  etaText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#111827',
  },
  loadIndicatorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 16,
  },
  loadIndicatorBarContainer: {
    flexDirection: 'row',
    width: (width - 64) * 0.72,
    justifyContent: 'space-between',
  },
  loadSegmentBar: {
    height: 4,
    width: '31%',
    borderRadius: 2,
  },
  loadSegmentBarActive: {
    backgroundColor: '#047857', // Forest green loading active level indicator
  },
  loadSegmentBarInactive: {
    backgroundColor: '#E5E7EB',
  },
  loadStatusText: {
    fontSize: 11,
    color: '#4B5563',
    fontWeight: '500',
    width: '24%',
    textAlign: 'right',
  },
  primaryGradientButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 42,
    borderRadius: 21,
  },
  assignButtonIconSpace: {
    marginRight: 6,
  },
  primaryGradientButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
  secondaryTextActionButton: {
    width: '100%',
    height: 42,
    borderRadius: 21,
    backgroundColor: '#EBE5FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryTextActionButtonLabel: {
    color: '#7C3AED',
    fontWeight: '600',
    fontSize: 14,
  },
});