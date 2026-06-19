import { LinearGradient } from 'expo-linear-gradient';
import {
    ArrowLeft,
    Clock,
    Coffee,
    MapPin,
    MessageSquare,
    Phone,
    ShoppingBag,
    Shuffle,
    Star,
    Wallet
} from 'lucide-react-native';
import React from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function DriverDetailScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER SECTION */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <ArrowLeft size={20} color="#111827" />
          </TouchableOpacity>
          <View style={styles.profileContainer}>
            <View style={styles.avatarWrapper}>
              <Image 
                source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' }} 
                style={styles.avatar} 
              />
              <View style={styles.onlineIndicator} />
            </View>
            <View style={styles.driverMetaTextSpace}>
              <Text style={styles.driverName}>Ahmed Ali</Text>
              <Text style={styles.driverStatusText}>● Available</Text>
            </View>
          </View>
        </View>
        
        <View style={styles.headerRight}>
          <TouchableOpacity style={[styles.iconButton, styles.headerActionSpace]} activeOpacity={0.7}>
            <MessageSquare size={18} color="#111827" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
            <Phone size={18} color="#111827" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        
        {/* CURRENT STATUS GRADIENT CARD WITH MATCHING SS GLOW DIRECTION */}
        <LinearGradient
          colors={['#121212', '#121212', '#5B00BA33']}
          locations={[0, 0.6, 1]}
          style={styles.statusCard}
          start={{ x: 0.6, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <View style={styles.statusCardHeader}>
            <View>
              <Text style={styles.statusCardLabel}>Current Status</Text>
              <Text style={styles.statusBusyText}>● Busy</Text>
            </View>
            <View style={styles.orderBadge}>
              <Text style={styles.orderBadgeText}>#ORD-2048</Text>
            </View>
          </View>

          {/* Thin horizontal design separator */}
          <View style={styles.separatorLine} />

          <View style={styles.statusMetricsContainer}>
            <View style={styles.metricColumn}>
              <Text style={styles.metricLabel}>Distance</Text>
              <View style={styles.metricValueRow}>
                <Text style={styles.metricValue}>1.8</Text>
                <Text style={styles.metricUnit}> km</Text>
              </View>
            </View>

            <View style={styles.metricColumn}>
              <Text style={styles.metricLabel}>ETA</Text>
              <View style={styles.metricValueRow}>
                <Text style={styles.metricValue}>12</Text>
                <Text style={styles.metricUnit}> min</Text>
              </View>
            </View>
          </View>
        </LinearGradient>

        {/* TODAY'S PERFORMANCE SECTION */}
        <Text style={styles.sectionLabel}>TODAY'S PERFORMANCE</Text>
        
        {/* 3-Column Grid */}
        <View style={styles.perfGrid}>
          <View style={styles.perfCard}>
            <View style={styles.perfCardHeader}>
              <ShoppingBag size={14} color="#7C3AED" />
              <Text style={[styles.perfCardLabel, { color: '#7C3AED' }]}>Orders</Text>
            </View>
            <Text style={styles.perfCardValue}>15</Text>
          </View>

          <View style={styles.perfCard}>
            <View style={styles.perfCardHeader}>
              <Wallet size={14} color="#10B981" />
              <Text style={[styles.perfCardLabel, { color: '#10B981' }]}>Earning</Text>
            </View>
            <Text style={styles.perfCardValue}>23,000</Text>
          </View>

          <View style={styles.perfCard}>
            <View style={styles.perfCardHeader}>
              <Star size={14} color="#F59E0B" />
              <Text style={[styles.perfCardLabel, { color: '#F59E0B' }]}>Ratings</Text>
            </View>
            <Text style={styles.perfCardValue}>4.9</Text>
          </View>
        </View>

        {/* Avg Delivery Time Row Component */}
        <View style={styles.avgTimeRow}>
          <View style={styles.avgTimeLeft}>
            <Clock size={16} color="#7C3AED" style={styles.avgTimeIcon} />
            <Text style={styles.avgTimeLabel}>Avg Delivery Time</Text>
          </View>
          <Text style={styles.avgTimeValue}>22m</Text>
        </View>

        {/* ACTIVE ASSIGNMENT SECTION */}
        <Text style={styles.sectionLabel}>ACTIVE ASSIGNMENT</Text>

        <View style={styles.assignmentCard}>
          <View style={styles.assignmentHeader}>
            <View style={styles.restaurantRow}>
              <View style={styles.restaurantLogoContainer}>
                <Image 
                  source={{ uri: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=100&q=80' }} 
                  style={styles.restaurantLogo} 
                />
              </View>
              <View>
                <Text style={styles.restaurantName}>The Grill</Text>
                <Text style={styles.customerName}>Customer: Ahmed J.</Text>
              </View>
            </View>
            <View style={styles.valueContainer}>
              <Text style={styles.assignmentValueText}>4,000 IQD</Text>
              <Text style={styles.assignmentValueLabel}>Value</Text>
            </View>
          </View>

          {/* Timeline Destination Tracking Block */}
          <View style={styles.timelineContainer}>
            <View style={styles.timelineLineContainer}>
              <View style={[styles.timelineDot, { backgroundColor: '#C4B5FD' }]} />
              <View style={styles.timelineLine} />
              <View style={[styles.timelineDot, { backgroundColor: '#7C3AED' }]} />
            </View>

            <View style={styles.timelineContentContainer}>
              <View style={styles.timelineStep}>
                <Text style={styles.timelineStepLabel}>Pickup</Text>
                <Text style={styles.timelineStepValue}>Bakhtyari</Text>
              </View>
              <View style={[styles.timelineStep, { marginTop: 14 }]}>
                <Text style={styles.timelineStepLabel}>Drop-off</Text>
                <Text style={styles.timelineStepValue}>Ashty Street</Text>
              </View>
            </View>
          </View>

          {/* View Map Action Button */}
          <TouchableOpacity style={styles.viewMapButton} activeOpacity={0.7}>
            <MapPin size={15} color="#111827" style={styles.viewMapIcon} />
            <Text style={styles.viewMapButtonText}>View Map</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* FOOTER ACTIONS ROW */}
      <View style={styles.bottomActionBar}>
        <TouchableOpacity style={styles.reassignButton} activeOpacity={0.8}>
          <Shuffle size={14} color="#DC2626" style={styles.actionButtonIcon} />
          <Text style={styles.reassignButtonText}>Reassign</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.breakButton} activeOpacity={0.8}>
          <Coffee size={14} color="#FFF" style={styles.actionButtonIcon} />
          <Text style={styles.breakButtonText}>Mark Break</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF9FF',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 110,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 26,
    paddingBottom:10
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerActionSpace: {
    marginRight: 8,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 12,
  },
  avatarWrapper: {
    position: 'relative',
    width: 42,
    height: 42,
  },
  avatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  onlineIndicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#10B981',
    borderWidth: 2,
    borderColor: '#FFF',
    position: 'absolute',
    right: 0,
    bottom: 0,
    zIndex: 10,
  },
  driverMetaTextSpace: {
    marginLeft: 10,
  },
  driverName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },
  driverStatusText: {
    fontSize: 12,
    color: '#10B981',
    fontWeight: '600',
    marginTop: 2,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusCard: {
    borderRadius: 24,
    padding: 20,
    marginTop: 16,
    marginBottom: 20,
  },
  statusCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  statusCardLabel: {
    fontSize: 14,
    color: '#9CA3AF',
    fontWeight: '500',
  },
  statusBusyText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#DC2626',
    marginTop: 6,
  },
  orderBadge: {
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop:20
  },
  orderBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  separatorLine: {
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    marginVertical: 16,
  },
  statusMetricsContainer: {
    flexDirection: 'row',
  },
  metricColumn: {
    flex: 1,
  },
  metricLabel: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  metricValueRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 4,
  },
  metricValue: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFF',
  },
  metricUnit: {
    fontSize: 13,
    color: '#9CA3AF',
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#6B7280',
    letterSpacing: 0.5,
    marginBottom: 12,
  },
  perfGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  perfCard: {
    width: (width - 48) / 3,
    backgroundColor: '#FFF',
    borderRadius: 16,
    padding: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  perfCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  perfCardLabel: {
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 4,
  },
  perfCardValue: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginTop: 10,
  },
  avgTimeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    marginBottom: 24,
  },
  avgTimeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avgTimeIcon: {
    marginRight: 6,
  },
  avgTimeLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
  },
  avgTimeValue: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  assignmentCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#EEEBFF',
  },
  assignmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    paddingBottom: 14,
  },
  restaurantRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  restaurantLogoContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: 'hidden',
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  restaurantLogo: {
    width: '100%',
    height: '100%',
  },
  restaurantName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  customerName: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 2,
  },
  valueContainer: {
    alignItems: 'flex-end',
  },
  assignmentValueText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#111827',
  },
  assignmentValueLabel: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 2,
  },
  timelineContainer: {
    flexDirection: 'row',
    marginTop: 16,
    paddingHorizontal: 4,
  },
  timelineLineContainer: {
    alignItems: 'center',
    marginRight: 12,
    paddingVertical: 4,
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  timelineLine: {
    width: 1,
    height: 32,
    backgroundColor: '#E5E7EB',
    borderStyle: 'dashed',
    marginVertical: 4,
  },
  timelineContentContainer: {
    flex: 1,
  },
  timelineStep: {
    justifyContent: 'center',
  },
  timelineStepLabel: {
    fontSize: 11,
    color: '#9CA3AF',
  },
  timelineStepValue: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
    marginTop: 2,
  },
  viewMapButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginTop: 4,
  },
  viewMapIcon: {
    marginRight: 4,
  },
  viewMapButtonText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#111827',
  },
  bottomActionBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  reassignButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 44) / 2,
    height: 48,
    backgroundColor: '#FEE2E2',
    borderRadius: 24,
  },
  reassignButtonText: {
    color: '#DC2626',
    fontWeight: '600',
    fontSize: 14,
  },
  breakButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: (width - 44) / 2,
    height: 48,
    backgroundColor: '#000000',
    borderRadius: 24,
  },
  breakButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 14,
  },
  actionButtonIcon: {
    marginRight: 6,
  },
});