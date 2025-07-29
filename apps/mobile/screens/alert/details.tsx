import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface AlertItem {
  id: string;
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  subtitle: string;
  location: string;
  date: string;
  time: string;
  iconColor: string;
  iconBg: string;
}

const AlertScreen = () => {
  const alerts: AlertItem[] = [
    {
      id: '1',
      icon: 'car',
      title: 'दमकल सेवा',
      subtitle: '',
      location: 'Tulti M Tulti M, Banepa',
      date: 'Jan 15, 2024',
      time: '2:30 PM',
      iconColor: '#3B82F6',
      iconBg: '#DBEAFE',
    },
    {
      id: '2',
      icon: 'medical',
      title: 'एम्बुलेन्स सेवा',
      subtitle: 'मेडिकल इमर्जेन्सी',
      location: 'Banepa Hospital Area',
      date: 'Jan 12, 2024',
      time: '10:15 AM',
      iconColor: '#3B82F6',
      iconBg: '#DBEAFE',
    },
    {
      id: '3',
      icon: 'time',
      title: '',
      subtitle: 'सडकमा ढल जमेको छ',
      location: 'Main Road, Ward 5',
      date: 'Jan 10, 2024',
      time: '8:45 AM',
      iconColor: '#8B5CF6',
      iconBg: '#EDE9FE',
    },
    {
      id: '4',
      icon: 'car-sport',
      title: 'सवारी साधन',
      subtitle: 'सडकमा गाडी बिग्रिएको',
      location: 'Highway, Banepa',
      date: 'Jan 8, 2024',
      time: '6:20 PM',
      iconColor: '#06B6D4',
      iconBg: '#CFFAFE',
    },
    {
      id: '5',
      icon: 'person',
      title: 'फ्रौड मेला',
      subtitle: 'फ्रौड संकलन नगरेको',
      location: 'Residential Area, Ward 3',
      date: 'Jan 5, 2024',
      time: '4:10 PM',
      iconColor: '#8B5CF6',
      iconBg: '#EDE9FE',
    },
    {
      id: '6',
      icon: 'ban',
      title: 'अनधिकृत पार्किङ',
      subtitle: 'गलत ठाउँमा पार्किङ',
      location: 'Market Area, Banepa',
      date: 'Jan 3, 2024',
      time: '11:30 AM',
      iconColor: '#6B7280',
      iconBg: '#F3F4F6',
    },
  ];

  const AlertItem = ({ item }: { item: AlertItem }) => (
    <TouchableOpacity style={styles.alertItem}>
      <View style={[styles.iconContainer, { backgroundColor: item.iconBg }]}>
        <Ionicons name={item.icon} size={24} color={item.iconColor} />
      </View>
      <View style={styles.alertContent}>
        <Text style={styles.alertTitle}>{item.title}</Text>
        <Text style={styles.alertSubtitle}>{item.subtitle}</Text>
        <View style={styles.locationContainer}>
          <Ionicons name="location-outline" size={14} color="#9CA3AF" />
          <Text style={styles.locationText}>{item.location}</Text>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.dateText}>{item.date}</Text>
        <Text style={styles.timeText}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>मेरो अलर्ट</Text>
        <TouchableOpacity style={styles.languageButton}>
          <Ionicons name="globe-outline" size={20} color="#6B7280" />
          <Text style={styles.languageText}>English</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Section Header */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>हालका अलर्टहरू</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>सबै हेर्नुहोस्</Text>
            <Ionicons name="arrow-forward" size={16} color="#3B82F6" />
          </TouchableOpacity>
        </View>

        {/* Alert List */}
        <View style={styles.alertList}>
          {alerts.map((alert) => (
            <AlertItem key={alert.id} item={alert} />
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Powered by Rumsan</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    marginLeft: 8,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9FAFB',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  languageText: {
    fontSize: 14,
    color: '#6B7280',
    marginLeft: 4,
  },
  content: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewAllText: {
    fontSize: 14,
    color: '#3B82F6',
    marginRight: 4,
  },
  alertList: {
    paddingHorizontal: 16,
  },
  alertItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  alertContent: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  alertSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 8,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginLeft: 4,
  },
  timeContainer: {
    alignItems: 'flex-end',
  },
  dateText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginBottom: 2,
  },
  timeText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  footer: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  footerText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
});

export default AlertScreen;
