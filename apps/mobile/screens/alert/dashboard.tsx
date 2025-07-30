import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const AlertDashboard = () => {
  const serviceItems = [
    {
      id: 1,
      title: 'Fire Brigade Service',
      icon: 'flame-outline',
      color: '#FFF3E0',
      iconColor: '#FF9800',
    },
    {
      id: 2,
      title: 'Ambulance Service',
      icon: 'medical-outline',
      color: '#FFEBEE',
      iconColor: '#F44336',
    },
    {
      id: 3,
      title: 'Water Supply',
      icon: 'water-outline',
      color: '#E3F2FD',
      iconColor: '#2196F3',
    },
    {
      id: 4,
      title: 'Vehicle Service',
      icon: 'car-outline',
      color: '#E8F5E8',
      iconColor: '#4CAF50',
    },
    {
      id: 5,
      title: 'Waste Management',
      icon: 'trash-outline',
      color: '#F3E5F5',
      iconColor: '#9C27B0',
    },
    {
      id: 6,
      title: 'Unauthorized Parking',
      icon: 'ban-outline',
      color: '#FFEBEE',
      iconColor: '#F44336',
    },
    {
      id: 7,
      title: 'Without Authorization Institution',
      icon: 'document-text-outline',
      color: '#FAFAFA',
      iconColor: '#757575',
    },
    {
      id: 8,
      title: 'Traffic Violation',
      icon: 'time-outline',
      color: '#FFFDE7',
      iconColor: '#FFC107',
    },
    {
      id: 9,
      title: 'Educational Institution Issues',
      icon: 'laptop-outline',
      color: '#E3F2FD',
      iconColor: '#2196F3',
    },
    {
      id: 10,
      title: 'Building Construction',
      icon: 'business-outline',
      color: '#E8F5E8',
      iconColor: '#4CAF50',
    },
    {
      id: 11,
      title: 'Construction Work',
      icon: 'construct-outline',
      color: '#FAFAFA',
      iconColor: '#757575',
    },
    {
      id: 12,
      title: 'Other',
      icon: 'star-outline',
      color: '#FCE4EC',
      iconColor: '#E91E63',
    },
  ];

  const handleCreateReceipt = () => {
    router.push('/alert/sendAlert');
  };

  const ServiceCard = ({
    item,
    onPress,
  }: {
    item: any;
    onPress?: () => void;
  }) => (
    <TouchableOpacity
      style={[styles.serviceCard, { backgroundColor: item.color }]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Ionicons name={item.icon} size={32} color={item.iconColor} />
      </View>
      <Text style={styles.serviceText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <View style={styles.logo}>
            <View style={styles.logoInner} />
          </View>
          <View>
            <Text style={styles.headerTitle}>Rahat Citizen News</Text>
            <Text style={styles.headerSubtitle}>Alert</Text>
          </View>
        </View>
        <View style={styles.menuButton}>
          <Ionicons name="menu" size={24} color="#757575" />
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Alert Card */}
        <View style={styles.alertCard}>
          <Text style={styles.alertText}>
            For any queries, please contact the hotline number XXXXX, City
            Police
          </Text>
          <TouchableOpacity style={styles.hotlineButton}>
            <Ionicons
              name="call"
              size={20}
              color="#FFFFFF"
              style={styles.phoneIcon}
            />
            <Text style={styles.hotlineButtonText}>
              For fast hotline sevice
            </Text>
          </TouchableOpacity>
        </View>

        {/* Alert Message Section */}
        <View style={styles.alertMessageSection}>
          <Text style={styles.sectionTitle}>Send alert message</Text>
          <TouchableOpacity style={styles.languageToggle}>
            <Ionicons name="language" size={20} color="#757575" />
            <Text style={styles.languageText}>English</Text>
          </TouchableOpacity>
        </View>

        {/* Services Grid */}
        <View style={styles.servicesGrid}>
          {serviceItems.map((item) => (
            <ServiceCard
              key={item.id}
              item={item}
              onPress={handleCreateReceipt}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 50, // Add top padding for status bar
    paddingBottom: 90, // Add bottom padding for tab bar
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  logoInner: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1976D2',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#F44336',
    fontWeight: '600',
  },
  menuButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  alertCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    marginBottom: 24,
  },
  alertText: {
    fontSize: 16,
    color: '#1976D2',
    marginBottom: 16,
    lineHeight: 24,
  },
  hotlineButton: {
    backgroundColor: '#D32F2F',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneIcon: {
    marginRight: 8,
  },
  hotlineButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  alertMessageSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
  },
  languageToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  languageText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#757575',
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  serviceCard: {
    width: '30%',
    aspectRatio: 1,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconContainer: {
    marginBottom: 8,
  },
  serviceText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#333333',
    fontWeight: '500',
    lineHeight: 16,
  },
});

export default AlertDashboard;
