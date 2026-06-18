import { AlertTriangle, ArrowLeft, Clock, User } from 'lucide-react-native';
import {
    Dimensions,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const { width } = Dimensions.get('window');

interface IssueItem {
  id: string;
  type: 'high_priority' | 'restaurant_delay';
  tagLabel: string;
  timestamp: string;
  title: string;
  driverName: string;
  orderNumber: string;
  hasReassignAction: boolean;
}

const ISSUES_DATA: IssueItem[] = [
  {
    id: '1',
    type: 'high_priority',
    tagLabel: 'High Priority',
    timestamp: 'Just now',
    title: 'Vehicle issue',
    driverName: 'Alex Chen',
    orderNumber: '#8829',
    hasReassignAction: true,
  },
  {
    id: '2',
    type: 'restaurant_delay',
    tagLabel: 'Restaurant delay',
    timestamp: '12 min ago',
    title: 'Delayed Pickup',
    driverName: 'Sarah Jenkins',
    orderNumber: '#8814',
    hasReassignAction: false,
  },
];

export default function IssueCenter() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* HEADER ROW */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} activeOpacity={0.7}>
          <ArrowLeft size={20} color="#111827" />
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerTitle}>Issue Center</Text>
          <Text style={styles.headerSubtitle}>Manage active driver and order issues.</Text>
        </View>
      </View>

      {/* ISSUES LIST CARDS CAROUSEL */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
        {ISSUES_DATA.map((issue) => {
          const isHighPriority = issue.type === 'high_priority';

          return (
            <View key={issue.id} style={styles.issueCard}>
              {/* TOP TAG AND TIME STRIP */}
              <View style={styles.cardHeaderStrip}>
                <View 
                  style={[
                    styles.tagBadge, 
                    isHighPriority ? styles.tagHighPriorityBg : styles.tagDelayBg
                  ]}
                >
                  {isHighPriority ? (
                    <AlertTriangle size={12} color="#DC2626" style={styles.tagIcon} />
                  ) : (
                    <Clock size={12} color="#6D28D9" style={styles.tagIcon} />
                  )}
                  <Text 
                    style={[
                      styles.tagText, 
                      isHighPriority ? styles.tagHighPriorityText : styles.tagDelayText
                    ]}
                  >
                    {issue.tagLabel}
                  </Text>
                </View>
                <Text style={styles.timestampText}>{issue.timestamp}</Text>
              </View>

              {/* CARD MAIN INFO BLOCK */}
              <Text style={styles.issueTitle}>{issue.title}</Text>
              
              <View style={styles.metaRow}>
                <User size={14} color="#6B7280" style={styles.metaIcon} />
                <Text style={styles.metaText}>
                  {issue.driverName}  •  Order {issue.orderNumber}
                </Text>
              </View>

              {/* ACTIONS SECTION */}
              {issue.hasReassignAction ? (
                /* Three-Button Layout for Vehicle/High Priority Issues */
                <View style={styles.actionsContainer}>
                  <View style={styles.splitRow}>
                    <TouchableOpacity style={[styles.actionButton, styles.outlinedButton, styles.splitButtonSize]}>
                      <Text style={[styles.actionButtonText, styles.outlinedButtonText]}>Contact Driver</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.actionButton, styles.purpleButton, styles.splitButtonSize]}>
                      <Text style={[styles.actionButtonText, styles.purpleButtonText]}>Reassign</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity style={[styles.actionButton, styles.greenButton, styles.fullWidthButtonMargin]}>
                    <Text style={[styles.actionButtonText, styles.greenButtonText]}>Mark Resolved</Text>
                  </TouchableOpacity>
                </View>
              ) : (
                /* Two-Button Even Layout for Standard/Delay Issues */
                <View style={[styles.actionsContainer, styles.splitRow]}>
                  <TouchableOpacity style={[styles.actionButton, styles.outlinedButton, styles.equalButtonSize]}>
                    <Text style={[styles.actionButtonText, styles.outlinedButtonText]}>Contact Driver</Text>
                  </TouchableOpacity>
                  
                  <TouchableOpacity style={[styles.actionButton, styles.greenButton, styles.equalButtonSize]}>
                    <Text style={[styles.actionButtonText, styles.greenButtonText]}>Mark Resolved</Text>
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
  issueCard: {
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    // Soft shadow wrapper architecture
    elevation: 2,
    shadowColor: '#5B00BA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.03,
    shadowRadius: 10,
  },
  cardHeaderStrip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  tagBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  tagHighPriorityBg: {
    backgroundColor: '#FEE2E2',
  },
  tagDelayBg: {
    backgroundColor: '#F3E8FF',
  },
  tagIcon: {
    marginRight: 4,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '700',
  },
  tagHighPriorityText: {
    color: '#DC2626',
  },
  tagDelayText: {
    color: '#6D28D9',
  },
  timestampText: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  issueTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  metaIcon: {
    marginRight: 6,
  },
  metaText: {
    fontSize: 13,
    color: '#6B7280',
    fontWeight: '500',
  },
  actionsContainer: {
    marginTop: 4,
  },
  splitRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actionButton: {
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  splitButtonSize: {
    width: (width - 76) * 0.48, // Dynamic allocation inside padding boundaries
  },
  equalButtonSize: {
    width: (width - 84) / 2, // Dynamic distribution scaling for balanced dual components
  },
  fullWidthButtonMargin: {
    width: '100%',
    marginTop: 10,
  },
  outlinedButton: {
    backgroundColor: '#FFF',
    borderWidth: 1.5,
    borderColor: '#111827',
  },
  outlinedButtonText: {
    color: '#111827',
  },
  purpleButton: {
    backgroundColor: '#5B00BA',
  },
  purpleButtonText: {
    color: '#FFF',
  },
  greenButton: {
    backgroundColor: '#10B981',
  },
  greenButtonText: {
    color: '#FFF',
  },
});