import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from 'react-native';
import { styles } from '../styles/SavedJobsScreen';
import { useJobContext } from '../context/JobContext';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import ApplicationFormModal from './ApplicationFormModal'; 
import { useTheme } from '../themeToggle/ThemeContext'; 
import Ionicons from 'react-native-vector-icons/Ionicons';

type RootStackParamList = {
  ApplicationForm: { jobTitle: string };
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'ApplicationForm'
>;

const SavedJobsScreen: React.FC = () => {
  const { savedJobs, removeJobFromSaved } = useJobContext();
  const [removeModalVisible, setRemoveModalVisible] = useState(false);
  const [applyModalVisible, setApplyModalVisible] = useState(false);
  const [jobToRemove, setJobToRemove] = useState<string | null>(null);
  const [selectedJob, setSelectedJob] = useState<any | null>(null);
  const [localSavedJobs, setLocalSavedJobs] = useState<string[]>([]);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const navigation = useNavigation<NavigationProp>();
  const { isDarkMode } = useTheme(); 

  useEffect(() => {
    setLocalSavedJobs(savedJobs.map((job) => job.id));
  }, [savedJobs]);

  const confirmRemoveJob = (jobId: string) => {
    setJobToRemove(jobId);
    setRemoveModalVisible(true);
  };

  const handleRemoveJob = () => {
    if (jobToRemove) {
      removeJobFromSaved(jobToRemove);
      setLocalSavedJobs(localSavedJobs.filter((id) => id !== jobToRemove));
      Alert.alert('Job Removed', 'The job has been removed successfully.');
    }
    setRemoveModalVisible(false);
  };

  const handleApplyJob = (job: any) => {
    setSelectedJob(job);
    setApplyModalVisible(true);
  };

  const markJobAsApplied = (jobId: string) => {
    setAppliedJobs([...appliedJobs, jobId]);
    setApplyModalVisible(false);
  };

  const renderJobItem = ({ item }: any) => {
    const isApplied = appliedJobs.includes(item.id);

    return (
      <View style={styles.jobContainer}>
        <View
          style={[
            styles.jobCard,
            { backgroundColor: isDarkMode ? '#1c1c1c' : '#fff' }, 
          ]}
        >
          <Image source={{ uri: item.companyLogo }} style={styles.logo} />
          <View style={styles.jobDetails}>
            <Text
              style={[
                styles.jobTitle,
                { color: isDarkMode ? '#fff' : '#333' }, 
              ]}
            >
              {item.title}
            </Text>
            <Text
              style={[
                styles.company,
                { color: isDarkMode ? '#aaa' : '#666' },
              ]}
            >
              {item.companyName}
            </Text>
            <Text
              style={[
                styles.salary,
                { color: isDarkMode ? '#4CAF50' : '#3CB371' },
              ]}
            >
              {item.salary}
            </Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => confirmRemoveJob(item.id)}
              >
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.applyButton,
                  isApplied && styles.applyButtonDisabled,
                ]}
                onPress={() => {
                  if (!isApplied) {
                    handleApplyJob(item);
                  }
                }}
                disabled={isApplied}
              >
                <Text style={styles.buttonText}>
                  {isApplied ? 'Applied' : 'Apply'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.mainContainer,
        { backgroundColor: isDarkMode ? '#121212' : '#fffaf4' }, 
      ]}
    > 
    <View
          style={[
            styles.headerContainer,
            { backgroundColor: isDarkMode ? '#433199' : '#6b86df' },
          ]}
      >   
          <View style={styles.textWithIcon}>
            <Ionicons name="bookmark-outline" size={30} color="white" />
            <Text 
              style={[
                styles.title,
                { color: isDarkMode ? 'white' : 'white' },
              ]}>
                Your Saved Jobs</Text>
            </View>
      </View>
      {savedJobs.length === 0 ? (
        <Text
          style={[
            styles.noJobsText,
            { color: isDarkMode ? '#fff' : '#333' },
          ]}
        >
          No saved jobs found.
        </Text>
      ) : (
        <FlatList
          data={savedJobs}
          keyExtractor={(item) => item.id}
          renderItem={renderJobItem}
        />
      )}

      {/* remove Job confirmation modal */}
      <Modal
        visible={removeModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setRemoveModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View
            style={[
              styles.modalContent,
              { backgroundColor: isDarkMode ? '#1c1c1c' : '#fff' },
            ]}
          >
            <Text
              style={[
                styles.modalText,
                { color: isDarkMode ? '#fff' : '#333' },
              ]}
            >
              Are you sure you want to remove this job?
            </Text>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.cancelButton}
                onPress={() => setRemoveModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.confirmButton}
                onPress={handleRemoveJob}
              >
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* application form modal */}
      {selectedJob && (
        <ApplicationFormModal
          visible={applyModalVisible}
          onClose={() => setApplyModalVisible(false)}
          jobTitle={selectedJob.title}
          companyName={selectedJob.companyName}
          jobId={selectedJob.id}
          markAsApplied={markJobAsApplied}
          isSavedJobsScreen={true}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default SavedJobsScreen;
