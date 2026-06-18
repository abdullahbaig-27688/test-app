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

export default function profile() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />

            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <TouchableOpacity style={styles.iconButton}>
                        <ArrowLeft size={20} color="#111827" />
                    </TouchableOpacity>
                    <View style={styles.profileContainer}>
                        <Image
                            source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' }}
                            style={styles.avatar}
                        />
                        <View style={styles.onlineIndicator} />
                        <View>
                            <Text style={styles.driverName}>Ahmed Ali</Text>
                            <Text style={styles.driverStatusText}>● Available</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.headerRight}>
                    <TouchableOpacity style={[styles.iconButton, styles.headerActionSpace]}>
                        <MessageSquare size={18} color="#111827" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.iconButton}>
                        <Phone size={18} color="#111827" />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>

                {/* CURRENT STATUS GRADIENT CARD */}
                <LinearGradient
                    // Applying your updated softer blend mix directly to the component
                    colors={['#5B00BA33', '#0000001A', '#121212']}
                    style={styles.statusCard}
                    start={{ x: 0, y: 0 }}   // Top-left glow origin
                    end={{ x: 1, y: 1 }}     // Blends down to deep dark matte finish
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

                    {/* Thin horizontal separator line visible in design */}
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

                {/* 3-Column Performance Grid */}
                <View style={styles.perfGrid}>
                    <View style={styles.perfCard}>
                        <View style={styles.perfCardHeader}>
                            <ShoppingBag size={16} color="#7C3AED" />
                            <Text style={[styles.perfCardLabel, { color: '#7C3AED' }]}>Orders</Text>
                        </View>
                        <Text style={styles.perfCardValue}>15</Text>
                    </View>

                    <View style={styles.perfCard}>
                        <View style={styles.perfCardHeader}>
                            <Wallet size={16} color="#10B981" />
                            <Text style={[styles.perfCardLabel, { color: '#10B981' }]}>Earning</Text>
                        </View>
                        <Text style={styles.perfCardValue}>23,000</Text>
                    </View>

                    <View style={styles.perfCard}>
                        <View style={styles.perfCardHeader}>
                            <Star size={16} color="#F59E0B" />
                            <Text style={[styles.perfCardLabel, { color: '#F59E0B' }]}>Ratings</Text>
                        </View>
                        <Text style={styles.perfCardValue}>4.9</Text>
                    </View>
                </View>

                {/* Avg Delivery Time Row */}
                <View style={styles.avgTimeRow}>
                    <View style={styles.avgTimeLeft}>
                        <Clock size={16} color="#7C3AED" />
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

                    {/* Timeline Tracking */}
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
                            <View style={styles.timelineStep}>
                                <Text style={styles.timelineStepLabel}>Drop-off</Text>
                                <Text style={styles.timelineStepValue}>Ashty Street</Text>
                            </View>
                        </View>
                    </View>

                    {/* View Map Action Button */}
                    <TouchableOpacity style={styles.viewMapButton}>
                        <MapPin size={16} color="#111827" style={styles.viewMapIcon} />
                        <Text style={styles.viewMapButtonText}>View Map</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

            {/* STICKY BOTTOM ACTIONS */}
            <View style={styles.bottomActionBar}>
                <TouchableOpacity style={styles.reassignButton}>
                    <Shuffle size={16} color="#DC2626" style={styles.actionButtonIcon} />
                    <Text style={styles.reassignButtonText}>Reassign</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.breakButton}>
                    <Coffee size={16} color="#FFF" style={styles.actionButtonIcon} />
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
        paddingVertical: 12,
    },
    headerLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    separatorLine: {
        height: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        marginVertical: 16,
    },
    headerActionSpace: {
        marginRight: 8,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 12,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        position: 'relative',
    },
    onlineIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#10B981',
        borderWidth: 1.5,
        borderColor: '#FFF',
        position: 'absolute',
        left: 30,
        bottom: 0,
        zIndex: 10,
    },
    driverName: {
        fontSize: 16,
        fontWeight: '700',
        color: '#111827',
        marginLeft: 10,
    },
    driverStatusText: {
        fontSize: 12,
        color: '#10B981',
        fontWeight: '500',
        marginLeft: 10,
        marginTop: 1,
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
        fontWeight: '600',
        color: '#EF4444',
        marginTop: 6,
    },
    orderBadge: {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
    },
    orderBadgeText: {
        color: '#9CA3AF',
        fontSize: 12,
        fontWeight: '600',
    },
    statusMetricsContainer: {
        flexDirection: 'row',
        marginTop: 28,
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
        padding: 14,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    perfCardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    perfCardLabel: {
        fontSize: 12,
        fontWeight: '500',
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
    avgTimeLabel: {
        fontSize: 13,
        fontWeight: '500',
        color: '#4B5563',
        marginLeft: 8,
    },
    avgTimeValue: {
        fontSize: 15,
        fontWeight: '600',
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
        marginVertical: 16,
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
        height: 36,
        backgroundColor: '#E5E7EB',
        borderStyle: 'dashed',
        marginVertical: 4,
    },
    timelineContentContainer: {
        justifyContent: 'space-between',
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