import { LinearGradient } from 'expo-linear-gradient';
import { ChevronRight } from 'lucide-react-native';
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
import notificationImg from '../../assets/images/notification.png';
import starImg from '../../assets/images/star.png';
import strokeImg from '../../assets/images/stroke.png';
import teamImg from '../../assets/images/team.png';
import truckImg from '../../assets/images/truck.png';
import vectorImg from '../../assets/images/vector.png';
import watchImg from '../../assets/images/watch.png';
const { width } = Dimensions.get('window');


const TOP_DRIVERS = [
    { id: '1', name: 'Ali Ravan', deliveries: '16 Orders', rating: '4.9', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' },
    { id: '2', name: 'Elnaz Z.', deliveries: '14 Orders', rating: '4.8', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
    { id: '3', name: 'Karim M.', deliveries: '12 Orders', rating: '4.7', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
];

type TabType = 'Today' | 'Week' | 'Month';

export default function performance() {
    const [activeTab, setActiveTab] = useState<TabType>('Today');

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" />


            <View style={styles.header}>
                <View>
                    <Text style={styles.headerTitle}>Team Performance</Text>
                    <Text style={styles.headerSubtitle}>monitoring the team performance</Text>
                </View>
                <Pressable style={styles.iconButton}>
                    <Image
                        source={vectorImg}
                    />
                </Pressable>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>


                <View style={styles.tabContainer}>
                    {(['Today', 'Week', 'Month'] as TabType[]).map((tab) => (
                        <Pressable
                            key={tab}
                            style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
                            onPress={() => setActiveTab(tab)}
                        >
                            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
                                {tab}
                            </Text>
                        </Pressable>
                    ))}
                </View>


                <LinearGradient

                    colors={['#000', '#0000001A', '#5B00BA4D']}
                    style={styles.mainCard}
                    start={{ x: 0, y: 0 }} // Starts top-left
                    end={{ x: 1, y: 1 }}   // Ends bottom-right
                >
                    <View style={styles.mainCardHeader}>
                        <View>
                            <Text style={styles.mainCardTitle}>Team Deliveries Completed</Text>
                            <View style={styles.mainCardValueContainer}>
                                <Text style={styles.mainCardValue}>48</Text>
                                <Text style={styles.mainCardTarget}> / 52 target</Text>
                            </View>
                        </View>
                        <View style={styles.mainCardIconContainer}>
                            <Image
                                source={truckImg}
                            />
                        </View>
                    </View>


                    <View style={styles.progressBarBackground}>
                        <View style={[styles.progressBarFill, { width: '${(48 / 52) * 100}%' }]} />
                    </View>

                    <View style={styles.mainCardFooter}>
                        <Text style={styles.statusOnTrack}>• On track</Text>
                        <Text style={styles.statusComparison}>+10% vs yesterday</Text>
                    </View>
                </LinearGradient>


                <View style={styles.gridContainer}>

                    <View style={styles.gridCard}>
                        <View style={styles.gridCardHeader}>
                            <Text style={styles.gridCardLabel}>Avg time</Text>
                            <Image
                                source={watchImg}
                            />
                        </View>
                        <Text style={styles.gridCardValue}>22m</Text>
                        <Text style={styles.gridCardSubGreen}>▲ 3m Target</Text>


                        <View style={styles.miniChartContainer}>
                            {[35, 50, 40, 30, 20, 45].map((height, i) => (
                                <View
                                    key={i}
                                    style={[
                                        styles.miniBar,
                                        { height: height, backgroundColor: i === 5 ? '#7C3AED' : '#E9D5FF' }
                                    ]}
                                />
                            ))}
                        </View>
                    </View>


                    <View style={styles.gridCard}>
                        <View style={styles.gridCardHeader}>
                            <Text style={styles.gridCardLabel}>Team rating</Text>
                            <Image
                                source={starImg}
                            />
                        </View>
                        <Text style={styles.gridCardValue}>4.8</Text>
                        <Text style={styles.gridCardSubGray}>From 204 reviews</Text>


                        <View style={styles.miniChartContainer}>
                            {[0.4, 0.4, 0.4, 0.4, 1].map((opacity, i) => (
                                <View
                                    key={i}
                                    style={[
                                        styles.miniBlock,
                                        { backgroundColor: '#F59E0B', opacity: opacity }
                                    ]}
                                />
                            ))}
                        </View>
                    </View>
                </View>


                <Pressable style={styles.driversRowButton}>
                    <Text style={styles.driversRowLabel}>Shift Status</Text>
                    <View style={styles.driversRowRight}>
                        <Text style={styles.driversRowValue}>12 Drivers</Text>
                        <View style={styles.chevronCircle}>
                            <ChevronRight size={16} color="#111" />
                        </View>
                    </View>
                </Pressable>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Top Drivers</Text>
                    <Pressable>
                        <Text style={styles.viewAllText}>View all</Text>
                    </Pressable>
                </View>


                {TOP_DRIVERS.map((driver, index) => (
                    <View key={driver.id} style={styles.driverCard}>
                        <View style={styles.driverLeftSection}>
                            <View style={styles.rankCircle}>
                                <Text style={styles.rankText}>{index + 1}</Text>
                            </View>
                            <Image source={{ uri: driver.avatar }} style={styles.avatar} />
                            <View>
                                <Text style={styles.driverName}>{driver.name}</Text>
                                <Text style={styles.driverSubText}>{driver.deliveries}</Text>
                            </View>
                        </View>
                        <View style={styles.ratingBadge}>
                            <Text style={styles.ratingBadgeText}>★ {driver.rating}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>

            <View style={styles.bottomNav}>
                <Pressable style={styles.navItem}>
                    <Image

                        source={strokeImg}
                    />
                    <Text style={[styles.navText, styles.inactiveNavText]}>On Map</Text>
                </Pressable>

                <Pressable style={styles.navItem}>
                    <Image
                        source={teamImg}
                    />
                    <Text style={[styles.navText, styles.activeNavText]}>Team</Text>
                </Pressable>

                <Pressable style={styles.navItem}>
                    <View>
                        <Image
                            source={notificationImg}
                        />

                    </View>
                    <Text style={[styles.navText, styles.inactiveNavText]}>Inbox</Text>
                </Pressable>
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
        paddingBottom: 100,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12
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
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F3F4F6',
    },
    tabContainer: {
        flexDirection: 'row',
        backgroundColor: '#F2E9FF',
        borderRadius: 24,
        padding: 4,
        marginVertical: 12,
    },
    tabButton: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center',
        borderRadius: 20,
    },
    activeTabButton: {
        backgroundColor: '#FFF',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    tabText: {
        fontSize: 14,
        fontWeight: '500',
        color: '#6B7280',
    },
    activeTabText: {
        color: '#111827',
        fontWeight: '600',
    },
    mainCard: {
        backgroundColor: '#130924',
        borderRadius: 24,
        padding: 20,
        marginVertical: 12,
    },
    mainCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    mainCardTitle: {
        color: '#9CA3AF',
        fontSize: 13,
        fontWeight: '500',
    },
    mainCardValueContainer: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginTop: 6,
    },
    mainCardValue: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: '700',
    },
    mainCardTarget: {
        color: '#9CA3AF',
        fontSize: 15,
    },
    mainCardIconContainer: {
        backgroundColor: 'rgba(255,255,255,0.15)',
        padding: 10,
        borderRadius: 14,
    },
    progressBarBackground: {
        height: 6,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 3,
        marginVertical: 16,
        overflow: 'hidden',
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#A78BFA',
        borderRadius: 3,
    },
    mainCardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    statusOnTrack: {
        color: '#10B981',
        fontWeight: '600',
        fontSize: 13,
    },
    statusComparison: {
        color: '#9CA3AF',
        fontSize: 12,
    },
    gridContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
    },
    gridCard: {
        width: (width - 44) / 2,
        backgroundColor: '#FFF',
        borderRadius: 20,
        padding: 16,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    gridCardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    gridCardLabel: {
        fontSize: 13,
        color: '#6B7280',
        fontWeight: '500',
    },
    miniIconCircle: {
        width: 8,
        height: 8,
        borderRadius: 4,
    },
    gridCardValue: {
        fontSize: 24,
        fontWeight: '700',
        color: '#111827',
        marginTop: 6,
    },
    gridCardSubGreen: {
        fontSize: 12,
        color: '#10B981',
        fontWeight: '500',
        marginTop: 2,
    },
    gridCardSubGray: {
        fontSize: 12,
        color: '#9CA3AF',
        marginTop: 2,
    },
    miniChartContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        height: 55,
        marginTop: 12,
    },
    miniBar: {
        width: '12%',
        borderRadius: 4,
    },
    miniBlock: {
        width: '16%',
        height: 24,
        borderRadius: 4,
    },
    driversRowButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        paddingVertical: 14,
        paddingHorizontal: 16,
        borderRadius: 24,
        marginVertical: 14,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    driversRowLabel: {
        fontSize: 15,
        color: '#6B7280',
        fontWeight: '500',
    },
    driversRowRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    driversRowValue: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
        marginRight: 8,
    },
    chevronCircle: {
        width: 28,
        height: 28,
        borderRadius: 14,
        backgroundColor: '#F3F4F6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#111827',
    },
    viewAllText: {
        fontSize: 13,
        color: '#6B7280',
    },
    driverCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#FFF',
        padding: 12,
        borderRadius: 16,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#F3F4F6',
    },
    driverLeftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rankCircle: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: '#F3E8FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    rankText: {
        fontSize: 12,
        fontWeight: '600',
        color: '#7C3AED',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
    },
    driverName: {
        fontSize: 15,
        fontWeight: '600',
        color: '#111827',
    },
    driverSubText: {
        fontSize: 12,
        color: '#6B7280',
        marginTop: 2,
    },
    ratingBadge: {
        backgroundColor: '#EFE4FB',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 8,
    },
    ratingBadgeText: {
        fontSize: 14,
        color: '#D97706',
        fontWeight: '700',
    },
    bottomNav: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 70,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#F3F4F6',
        paddingBottom: 10, // Adjust safety spacing for home indicator models
    },
    navItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    navText: {
        fontSize: 11,
        fontWeight: '500',
        marginTop: 4,
    },
    activeNavText: {
        color: '#7C3AED',
    },
    inactiveNavText: {
        color: '#9CA3AF',
    },
    badgeDot: {
        position: 'absolute',
        top: -2,
        right: -2,
        width: 6,
        height: 6,
        borderRadius: 3,
        backgroundColor: '#EF4444',
    },
});