import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { styles } from '../styles/ApplicationFormModal';
import { useTheme } from '../themeToggle/ThemeContext'; 

interface ApplicationFormModalProps {
  visible: boolean;
  onClose: () => void;
  jobTitle: string;
  companyName: string;
  jobId: string;
  markAsApplied: (id: string) => void;
  isSavedJobsScreen: boolean;
  navigation: any;
}

const ApplicationFormModal: React.FC<ApplicationFormModalProps> = ({
  visible,
  onClose,
  jobTitle,
  companyName,
  jobId,
  markAsApplied,
  isSavedJobsScreen,
  navigation,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    reason: '',
  });

  const { isDarkMode } = useTheme(); // Get dark mode status

  const handleApply = () => {
    if (!formData.name || !formData.email || !formData.contactNumber || !formData.reason) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      Alert.alert('Error', 'Enter a valid email.');
      return;
    }
    if (formData.contactNumber.length !== 11 || !/^\d+$/.test(formData.contactNumber)) {
      Alert.alert('Error', 'Contact number must be 11 digits.');
      return;
    }

    // Mark job as applied by passing jobId to markAsApplied
    markAsApplied(jobId);
    setFormData({ name: '', email: '', contactNumber: '', reason: '' });

    Alert.alert(
      'Application Submitted',
      `You applied for ${jobTitle} at ${companyName}.`
    );

    if (isSavedJobsScreen) {
      navigation.navigate('Job Finder');
    } else {
      onClose();
    }
  };

  return (
    <Modal visible={visible} transparent={true} animationType="slide">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView
          contentContainerStyle={[
            styles.modalContainer,
            { backgroundColor: isDarkMode ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.5)' },
          ]}
        >
          <View
            style={[
              styles.modalContent,
              {
                backgroundColor: isDarkMode ? '#1E1E1E' : '#fff',
                borderColor: isDarkMode ? '#333' : '#ccc',
              },
            ]}
          >
            <Text
              style={[
                styles.modalTitle,
                { color: isDarkMode ? '#fff' : '#333' },
              ]}
            >
              Apply for {jobTitle}
            </Text>
            <Text
              style={[
                styles.label,
                { color: isDarkMode ? '#bbb' : '#333' },
              ]}
            >
              Name:
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: isDarkMode ? '#333' : '#fff',
                  color: isDarkMode ? '#fff' : '#000',
                  borderColor: isDarkMode ? '#555' : '#ccc',
                },
              ]}
              placeholder="John Doe"
              placeholderTextColor={isDarkMode ? '#bbb' : '#888'}
              value={formData.name}
              onChangeText={(text) => setFormData({ ...formData, name: text })}
            />
            <Text
              style={[
                styles.label,
                { color: isDarkMode ? '#bbb' : '#333' },
              ]}
            >
              Email:
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: isDarkMode ? '#333' : '#fff',
                  color: isDarkMode ? '#fff' : '#000',
                  borderColor: isDarkMode ? '#555' : '#ccc',
                },
              ]}
              placeholder="johndoe@example.com"
              placeholderTextColor={isDarkMode ? '#bbb' : '#888'}
              keyboardType="email-address"
              value={formData.email}
              onChangeText={(text) => setFormData({ ...formData, email: text })}
            />
            <Text
              style={[
                styles.label,
                { color: isDarkMode ? '#bbb' : '#333' },
              ]}
            >
              Contact Number:
            </Text>
            <TextInput
              style={[
                styles.input,
                {
                  backgroundColor: isDarkMode ? '#333' : '#fff',
                  color: isDarkMode ? '#fff' : '#000',
                  borderColor: isDarkMode ? '#555' : '#ccc',
                },
              ]}
              placeholder="09XXXXXXXXX"
              placeholderTextColor={isDarkMode ? '#bbb' : '#888'}
              keyboardType="phone-pad"
              value={formData.contactNumber}
              onChangeText={(text) =>
                setFormData({ ...formData, contactNumber: text })
              }
            />
            <Text
              style={[
                styles.label,
                { color: isDarkMode ? '#bbb' : '#333' },
              ]}
            >
              Why should we hire you?:
            </Text>
            <TextInput
              style={[
                styles.input,
                styles.textArea,
                {
                  backgroundColor: isDarkMode ? '#333' : '#fff',
                  color: isDarkMode ? '#fff' : '#000',
                  borderColor: isDarkMode ? '#555' : '#ccc',
                },
              ]}
              placeholder="I am highly motivated, have excellent problem-solving skills, and am eager to contribute to the success of the company."
              placeholderTextColor={isDarkMode ? '#bbb' : '#888'}
              multiline
              numberOfLines={4}
              value={formData.reason}
              onChangeText={(text) => setFormData({ ...formData, reason: text })}
            />
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[
                  styles.cancelButton,
                  {
                    backgroundColor: isDarkMode ? '#555' : '#777',
                  },
                ]}
                onPress={onClose}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.applyButton,
                  {
                    backgroundColor: isDarkMode ? '#4CAF50' : '#4CAF50',
                  },
                ]}
                onPress={handleApply}
              >
                <Text style={styles.buttonText}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ApplicationFormModal;
