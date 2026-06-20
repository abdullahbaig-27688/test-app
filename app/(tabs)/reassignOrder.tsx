// import { router } from '@/.expo/types/router';
import { LinearGradient } from 'expo-linear-gradient';
import { AlertTriangle, ChevronDown, Clock } from 'lucide-react-native';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const { width } = Dimensions.get('window');
const { router } = require('expo-router');

interface Driver {
  id: string;
  name: string;
  eta: string;
  avatar?: string;
  initials?: string;
}

const AVAILABLE_DRIVERS: Driver[] = [
  { id: '1', name: 'Aram kamil', eta: '2 mins away', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80' },
  { id: '2', name: 'Rzgar', eta: '5 mins away', initials: 'M' },
  { id: '3', name: 'didar', eta: '8 mins away', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80' },
];

export default function reassignOrder({ onClose }: { onClose?: () => void }) {
  const [selectedDriverId, setSelectedDriverId] = useState<string>('1');


  return (
    <View style={styles.modalOverlay}>
      <View style={styles.bottomSheetContainer}>

        <View style={styles.dragHandle} />


        <Text style={styles.title}>Reassign Order</Text>
        <Text style={styles.subtitle}>Choose another available driver for this order.</Text>

        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>

          <Text style={styles.sectionLabel}>CURRENT DRIVER</Text>
          <View style={styles.currentDriverCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80' }}
              style={styles.avatar}
            />
            <View style={styles.currentDriverInfo}>
              <Text style={styles.driverName}>Alex Chen</Text>
              <View style={styles.errorRow}>
                <AlertTriangle size={13} color="#DC2626" />
                <Text style={styles.errorText}>Vehicle Issue Reported</Text>
              </View>
            </View>
          </View>


          <Text style={styles.sectionLabel}>REASON FOR REASSIGNMENT</Text>
          <Pressable style={styles.dropdownButton}>
            <Text style={styles.dropdownText}>Vehicle issue</Text>
            <ChevronDown size={18} color="#4B5563" />
          </Pressable>


          <View style={styles.driversHeaderRow}>
            <Text style={styles.sectionLabel}>AVAILABLE DRIVERS</Text>
            <Text style={styles.nearbyCountText}>3 nearby</Text>
          </View>

          {AVAILABLE_DRIVERS.map((driver) => {
            const isSelected = selectedDriverId === driver.id;
            return (
              <Pressable
                key={driver.id}

                style={[styles.selectableDriverCard, isSelected && styles.selectedCardBorder]}
                onPress={() => setSelectedDriverId(driver.id)}
              >
                <View style={styles.driverLeftBlock}>
                  {driver.avatar ? (
                    <Image source={{ uri: driver.avatar }} style={styles.avatar} />
                  ) : (
                    <View style={styles.initialsCircle}>
                      <Text style={styles.initialsText}>{driver.initials}</Text>
                    </View>
                  )}
                  <View style={styles.driverMetaSpace}>
                    <Text style={styles.driverName}>{driver.name}</Text>
                    <View style={styles.etaRow}>
                      <Clock size={12} color="#6B7280" />
                      <Text style={styles.etaText}>{driver.eta}</Text>
                    </View>
                  </View>
                </View>


                <View style={[styles.radioCircle, isSelected && styles.radioCircleActive]}>
                  {isSelected && <View style={styles.radioInnerDot} />}
                </View>
              </Pressable>
            );
          })}
        </ScrollView>

        <View style={styles.actionRowContainer}>
          <Pressable style={styles.cancelButton} onPress={() => router.back()}>
            <Text style={styles.cancelButtonText}>Cancel</Text>
          </Pressable>

          <Pressable style={styles.reassignButtonContainer}>
            <LinearGradient
              colors={['#A78BFA', '#7C3AED']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.reassignGradient}
            >
              <Text style={styles.reassignButtonText}>Reassign</Text>
            </LinearGradient>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'flex-end',
  },
  bottomSheetContainer: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingTop: 12,
    paddingHorizontal: 20,
    maxHeight: '90%',
  },
  dragHandle: {
    width: 38,
    height: 4,
    backgroundColor: '#E5E7EB',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
  },
  subtitle: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
    marginBottom: 20,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#9CA3AF',
    letterSpacing: 0.6,
    marginBottom: 10,
    textTransform: 'uppercase',
  },
  currentDriverCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAF8FF',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F3F0FF',
    marginBottom: 20,
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
    backgroundColor: '#EBF4FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  initialsText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2563EB',
  },
  currentDriverInfo: {
    marginLeft: 12,
  },
  driverName: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },
  errorRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  errorText: {
    fontSize: 12,
    color: '#DC2626',
    fontWeight: '600',
    marginLeft: 4,
  },
  dropdownButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAF8FF',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    marginBottom: 24,
  },
  dropdownText: {
    fontSize: 15,
    color: '#111827',
    fontWeight: '500',
  },
  driversHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  nearbyCountText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#7C3AED',
  },
  selectableDriverCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FAF8FF',
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F3F4F6',
    marginBottom: 10,
  },
  selectedCardBorder: {
    borderColor: '#7C3AED',
    backgroundColor: '#FAF8FF',
  },
  driverLeftBlock: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  driverMetaSpace: {
    marginLeft: 12,
  },
  etaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  etaText: {
    fontSize: 12,
    color: '#6B7280',
    marginLeft: 4,
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1.5,
    borderColor: '#D1D5DB',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  radioCircleActive: {
    borderColor: '#7C3AED',
  },
  radioInnerDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#7C3AED',
  },
  actionRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#F3F4F6',
  },
  cancelButton: {
    width: (width - 56) * 0.38,
    height: 48,
    backgroundColor: '#EDE9FE',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#111827',
    fontWeight: '600',
    fontSize: 15,
  },
  reassignButtonContainer: {
    width: (width - 56) * 0.58,
    height: 48,
    borderRadius: 24,
    overflow: 'hidden',
  },
  reassignGradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reassignButtonText: {
    color: '#FFF',
    fontWeight: '600',
    fontSize: 15,
  },
});