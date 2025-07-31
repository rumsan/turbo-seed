import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BottomText from './bottomText';
// import MapView, { Marker } from 'react-native-maps';

// const { width, height } = Dimensions.get('window');

interface LocationState {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const EmergencyAlertScreen = () => {
  const [location, setLocation] = useState<LocationState | null>(null);
  const [accuracy, setAccuracy] = useState<number | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [problemDescription, setProblemDescription] = useState('');
  const [isDetectingLocation, setIsDetectingLocation] = useState(true);

  //   useEffect(() => {
  //     getCurrentLocation();
  //   }, []);

  //   const getCurrentLocation = async () => {
  //     try {
  //       const { status } = await Location.requestForegroundPermissionsAsync();
  //       if (status !== 'granted') {
  //         Alert.alert('Permission denied', 'Location permission is required');
  //         return;
  //       }

  //       const currentLocation = await Location.getCurrentPositionAsync({
  //         accuracy: Location.Accuracy.High,
  //       });

  //       setLocation({
  //         latitude: currentLocation.coords.latitude,
  //         longitude: currentLocation.coords.longitude,
  //         latitudeDelta: 0.01,
  //         longitudeDelta: 0.01,
  //       });
  //       setAccuracy(
  //         currentLocation.coords.accuracy
  //           ? Math.round(currentLocation.coords.accuracy)
  //           : null,
  //       );
  //       setIsDetectingLocation(false);
  //     } catch (error) {
  //       console.error('Error getting location:', error);
  //       setIsDetectingLocation(false);
  //     }
  //   };

  const handlePhotoUpload = () => {
    Alert.alert(
      'Photo Upload',
      'Photo upload functionality would be implemented here',
    );
  };

  const handleVideoUpload = () => {
    Alert.alert(
      'Video Upload',
      'Video upload functionality would be implemented here',
    );
  };

  const handleSubmitAlert = () => {
    if (!phoneNumber.trim()) {
      Alert.alert('Error', 'Please enter your phone number');
      return;
    }
    if (!problemDescription.trim()) {
      Alert.alert('Error', 'Please describe the problem');
      return;
    }
    Alert.alert('Success', 'Alert submitted successfully!');
  };

  const handleBackPress = () => {
    router.back();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Send Alert</Text>
        <TouchableOpacity style={styles.languageButton}>
          <Ionicons name="globe-outline" size={20} color="#666" />
          <Text style={styles.languageText}>English</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Alert Title */}
        <Text style={styles.alertTitle}>Alert for Fire Brigade</Text>

        {/* Location Section */}
        <View style={styles.locationSection}>
          <View style={styles.locationHeader}>
            <View style={styles.locationTitleContainer}>
              <Ionicons name="location-outline" size={20} color="#666" />
              <Text style={styles.locationTitle}>Current Location:</Text>
            </View>
            <TouchableOpacity style={styles.updateButton}>
              <Ionicons name="refresh-outline" size={16} color="#666" />
              <Text style={styles.updateText}>Update</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.detectingText}>
            {isDetectingLocation
              ? 'Detecting location...'
              : 'Location detected'}
          </Text>

          {/* Map */}
          <View style={styles.mapContainer}>
            {/* {location ? (
              <MapView style={styles.map} region={location}>
                <Marker coordinate={location} />
              </MapView>
            ) : (
              <View style={styles.mapPlaceholder}>
                <Ionicons name="location-outline" size={40} color="#ccc" />
              </View>
            )} */}
            <TouchableOpacity style={styles.centerButton}>
              <Ionicons name="locate-outline" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          {accuracy && (
            <Text style={styles.accuracyText}>Accuracy: ~{accuracy}m</Text>
          )}
        </View>

        {/* Contact Number Section */}
        <View style={styles.contactSection}>
          <Text style={styles.sectionTitle}>Contact Number</Text>
          <View style={styles.phoneInputContainer}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>+977</Text>
            </View>
            <TextInput
              style={styles.phoneInput}
              placeholder="Phone Number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
              maxLength={10}
            />
          </View>
        </View>

        {/* Problem Description */}
        <View style={styles.descriptionSection}>
          <Text style={styles.sectionTitle}>Problem Description</Text>
          <TextInput
            style={styles.descriptionInput}
            placeholder="Please provide a detailed description of the emergency or issue..."
            value={problemDescription}
            onChangeText={setProblemDescription}
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />
        </View>

        {/* Media Upload Section */}
        <View style={styles.mediaSection}>
          <Text style={styles.sectionTitle}>Photo/Video Upload (Optional)</Text>
          <View style={styles.uploadButtons}>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handlePhotoUpload}
            >
              <Ionicons name="camera-outline" size={32} color="#4285F4" />
              <Text style={styles.uploadButtonText}>Upload Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.uploadButton}
              onPress={handleVideoUpload}
            >
              <Ionicons name="videocam-outline" size={32} color="#34A853" />
              <Text style={styles.uploadButtonText}>Upload Video</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Important Information */}
        <View style={styles.importantSection}>
          <View style={styles.importantHeader}>
            <Ionicons name="warning" size={20} color="#FF6B6B" />
            <Text style={styles.importantTitle}>Important Information</Text>
          </View>
          <View style={styles.importantContent}>
            <Text style={styles.bulletPoint}>
              • Sending false or misleading alerts is a legal offense
            </Text>
            <Text style={styles.bulletPoint}>
              • Those who send false information can be fined up to Rs. 50,000
            </Text>
            <Text style={styles.bulletPoint}>
              • Do not misuse emergency services
            </Text>
            <Text style={styles.bulletPoint}>
              • Provide only truthful and accurate information
            </Text>
          </View>
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmitAlert}
        >
          <Ionicons name="send" size={20} color="#fff" />
          <Text style={styles.submitButtonText}>Send Alert</Text>
        </TouchableOpacity>

        {/* Footer */}
        <BottomText />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  languageText: {
    fontSize: 14,
    color: '#666',
  },
  scrollView: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 18,
    color: '#FF4444',
    fontWeight: '500',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  locationSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  locationTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  updateButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
  },
  updateText: {
    fontSize: 12,
    color: '#666',
  },
  detectingText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  mapContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    position: 'relative',
  },
  map: {
    flex: 1,
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  accuracyText: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
  },
  contactSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 12,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden',
  },
  countryCode: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  countryCodeText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  phoneInput: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  descriptionSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    minHeight: 100,
  },
  mediaSection: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  uploadButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  uploadButton: {
    flex: 1,
    borderWidth: 2,
    borderColor: '#e0e0e0',
    borderStyle: 'dashed',
    borderRadius: 12,
    paddingVertical: 24,
    alignItems: 'center',
    gap: 8,
  },
  uploadButtonText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  importantSection: {
    marginHorizontal: 16,
    backgroundColor: '#FFF5F5',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  importantHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  importantTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FF6B6B',
  },
  importantContent: {
    gap: 8,
  },
  bulletPoint: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4285F4',
    marginHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    gap: 8,
    marginBottom: 24,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    color: '#999',
    paddingBottom: 24,
  },
});

export default EmergencyAlertScreen;
