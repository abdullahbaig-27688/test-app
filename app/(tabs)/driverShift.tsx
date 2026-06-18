import { ArrowLeft } from 'lucide-react-native';
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

type ShiftStatus = 'checked_in' | 'on_break' | 'late';

interface RosterItem {
  id: string;
  name: string;
  avatar: string;
  status: ShiftStatus;
  statusLabel: string;
  timeInfo: string;
}

const ROSTER_DATA: RosterItem[] = [
  {
    id: '1',
    name: 'Karwan Aziz',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    status: 'checked_in',
    statusLabel: 'Checked In',
    timeInfo: '08:30 AM',
  },
  {
    id: '2',
    name: 'Sarah Jenkins',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    status: 'on_break',
    statusLabel: 'On Break',
    timeInfo: '11:15 AM',
  },
  {
    id: '3',
    name: 'Michael Chen',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80',
    status: 'late',
    statusLabel: 'Late',
    timeInfo: '09:00 AM (Expected)',
  },
];

export default function DriverShifts() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          <ArrowLeft size={20} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Driver Shifts</Text>
          <Text style={styles.headerSubtitle}>Manage team availability and status.</Text>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        
        {/* TOP METRICS GRID (2x2 Grid) */}
        <View style={styles.metricsGrid}>
          {/* Checked In */}
          <View style={[styles.metricCard, styles.bgWhite]}>
            <Text style={styles.metricLabel}>Checked In</Text>
            <Text style={[styles.metricValue, { color: '#10B981' }]}>15</Text>
          </View>

          {/* On Break */}
          <View style={[styles.metricCard, styles.bgWhite]}>
            <Text style={styles.metricLabel}>On Break</Text>
            <Text style={[styles.metricValue, { color: '#7C3AED' }]}>2</Text>
          </View>

          {/* Late */}
          <View style={[styles.metricCard, styles.bgLightRed]}>
            <Text style={[styles.metricLabel, { color: '#991B1B' }]}>Late</Text>
            <Text style={[styles.metricValue, { color: '#DC2626' }]}>1</Text>
          </View>

          {/* Offline */}
          <View style={[styles.metricCard, styles.bgLightGray]}>
            <Text style={styles.metricLabel}>Offline</Text>
            <Text style={[styles.metricValue, { color: '#4B5563' }]}>5</Text>
          </View>
        </View>

        {/* ACTIVE ROSTER SECTION */}
        <Text style={styles.sectionTitle}>Active Roster</Text>

        {ROSTER_DATA.map((item) => {
          const isCheckedIn = item.status === 'checked_in';
          const isOnBreak = item.status === 'on_break';
          const isLate = item.status === 'late';

          // Get dynamic status dot color
          const statusDotColor = isCheckedIn 
            ? '#10B981' 
            : isOnBreak 
            ? '#7C3AED' 
            : '#DC2626';

          return (
            <View 
              key={item.id} 
              style={[
                styles.rosterCard,
                isLate && styles.rosterCardLateBorder
              ]}
            >
              {/* DRIVER INFO ROW */}
              <View style={styles.driverRow}>
                <Image source={{ uri: item.avatar }} style={styles.avatar} />
                <View style={styles.driverMeta}>
                  <Text style={styles.driverName}>{item.name}</Text>
                  <View style={styles.statusBadgeRow}>
                    <View style={[styles.statusDot, { backgroundColor: statusDotColor }]} />
                    <Text style={[
                      styles.statusText,
                      isLate && { color: '#DC2626', fontWeight: '600' }
                    ]}>
                      {item.statusLabel} • {item.timeInfo}
                    </Text>
                  </View>
                </View>
              </View>

              {/* DYNAMIC ACTION BUTTONS */}
              {isCheckedIn && (
                <TouchableOpacity style={[styles.actionButton, styles.fullWidthButton, styles.buttonPurpleLight]}>
                  <Text style={[styles.buttonText, styles.textPurple]}>Send Reminder</Text>
                </TouchableOpacity>
              )}

              {isOnBreak && (
                <View style={styles.splitButtonRow}>
                  <TouchableOpacity style={[styles.actionButton, styles.splitButton, styles.buttonPurpleLight]}>
                    <Text style={[styles.buttonText, styles.textPurple]}>End Break</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.actionButton, styles.splitButton, styles.buttonPurpleSolid]}>
                    <Text style={[styles.buttonText, styles.textWhite]}>Approve Break</Text>
                  </TouchableOpacity>
                </View>
              )}

              {isLate && (
                <View style={styles.splitButtonRow}>
                  <TouchableOpacity style={[styles.actionButton, styles.splitButton, styles.buttonPurpleLight]}>
                    <Text style={[styles.buttonText, styles.textDark]}>Mark Offline</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.actionButton, styles.splitButton, styles.buttonRedSolid]}>
                    <Text style={[styles.buttonText, styles.textWhite]}>Send Reminder</Text>
                  </TouchableOpacity>
                </View>
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
    paddingVertical: 24,
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
    paddingTop: 12,
    paddingBottom: 32,
  },
  metricsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  metricCard: {
    width: (width - 44) / 2, // Perfectly balances columns responsive layout across widths
    borderRadius: 20,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    height: 90,
    justifyContent: 'space-between',
  },
  bgWhite: {
    backgroundColor: '#FFF',
  },
  bgLightRed: {
    backgroundColor: '#FEE2E2',
    borderColor: '#FCA5A5',
  },
  bgLightGray: {
    backgroundColor: '#E5E7EB',
    borderColor: '#D1D5DB',
  },
  metricLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#4B5563',
  },
  metricValue: {
    fontSize: 26,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  rosterCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#F3F4F6',
  },
  rosterCardLateBorder: {
    borderColor: '#FEE2E2',
    backgroundColor: '#FFF',
  },
  driverRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 12,
  },
  driverMeta: {
    justifyContent: 'center',
  },
  driverName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  statusBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  statusText: {
    fontSize: 12,
    color: '#4B5563',
    fontWeight: '500',
  },
  actionButton: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthButton: {
    width: '100%',
  },
  splitButtonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  splitButton: {
    width: (width - 76) * 0.48, // Responsive multi-button alignment bounds
  },
  buttonText: {
    fontSize: 13,
    fontWeight: '600',
  },
  buttonPurpleLight: {
    backgroundColor: '#F3E8FF',
  },
  buttonPurpleSolid: {
    backgroundColor: '#5B00BA',
  },
  buttonRedSolid: {
    backgroundColor: '#BA1A1A',
  },
  textPurple: {
    color: '#7C3AED',
  },
  textWhite: {
    color: '#FFF',
  },
  textDark: {
    color: '#111827',
  },
});