import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const AlertNewsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Alert News</Text>
        <TouchableOpacity style={styles.languageButton}>
          <Ionicons name="globe-outline" size={20} color="#666" />
          <Text style={styles.languageText}>Nepali</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Main Blue Card */}
        <View style={styles.blueCard}>
          <View style={styles.bellIconContainer}>
            <Ionicons name="notifications-outline" size={32} color="#fff" />
          </View>

          <Text style={styles.comingSoonTitle}>Coming soon</Text>
          <Text style={styles.comingSoonSubtitle}>
            We are working on this feature
          </Text>

          <View style={styles.timeInfo}>
            <Ionicons name="time-outline" size={16} color="#fff" />
            <Text style={styles.timeText}>Expected Start: 02 2025</Text>
          </View>
        </View>

        {/* Notification Section */}
        <View style={styles.notificationSection}>
          <View style={styles.emailIconContainer}>
            <Ionicons name="mail-outline" size={40} color="#4CAF50" />
          </View>

          <Text style={styles.notifyTitle}>Notify Me</Text>

          <TouchableOpacity style={styles.emailTextContainer}>
            <Text style={styles.emailText}>Your email address</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.subscribeButton}>
            <Ionicons name="mail-outline" size={20} color="#fff" />
            <Text style={styles.subscribeButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Powered by Rumsan</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    flex: 1,
    textAlign: 'center',
    marginRight: 40,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  languageText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  blueCard: {
    backgroundColor: '#4A6CF7',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    marginBottom: 24,
    elevation: 4,
    shadowColor: '#4A6CF7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  bellIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  comingSoonTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    textAlign: 'center',
  },
  comingSoonSubtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 24,
    opacity: 0.9,
  },
  timeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeText: {
    fontSize: 14,
    color: '#fff',
    marginLeft: 8,
    opacity: 0.9,
  },
  notificationSection: {
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    backgroundColor: '#E8F5E8',
  },
  notifyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 14,
  },
  emailIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
  },
  emailTextContainer: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  emailText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  subscribeButton: {
    height: 45,
    width: '100%',
    backgroundColor: '#4CAF50',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#4CAF50',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  subscribeButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    marginLeft: 8,
  },
  footer: {
    height: 20,
    // width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7e7eaff',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 12,
    margin: 'auto',
    marginBottom: 20,
  },
  footerText: {
    fontSize: 12,
    color: 'rgba(124, 128, 135, 1)',
    fontWeight: '500',
  },
});

export default AlertNewsScreen;
