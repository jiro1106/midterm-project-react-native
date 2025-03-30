import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import uuid from 'react-native-uuid';
import { styles } from '../styles/JobFinderScreen';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useJobContext } from '../context/JobContext';
import ApplicationFormModal from './ApplicationFormModal';
import { useTheme } from '../themeToggle/ThemeContext'; 

// Define props for navigation
type RootStackParamList = {
  ApplicationForm: { jobTitle: string };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'ApplicationForm'>;

interface Job {
  id: string;
  title: string;
  companyName: string;
  salary: string;
  companyLogo: string;
}

const JobFinderTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [savedJobs, setSavedJobs] = useState<string[]>([]);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const navigation = useNavigation<NavigationProp>();
  const { addJobToSaved, savedJobs: contextSavedJobs } = useJobContext();
  const { isDarkMode } = useTheme(); 

  const clearSearch = () => {
    setSearchQuery('');
  };

  useEffect(() => {
    setSavedJobs(contextSavedJobs.map((job) => job.id));
  }, [contextSavedJobs]);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch('https://empllo.com/api/v1');
      const data = await response.json();

      let jobsWithIds: Job[] = [];
      if (Array.isArray(data)) {
        jobsWithIds = data.map((job: any) => ({
          id: uuid.v4().toString(),
          title: job.title || 'Unknown Title',
          companyName: job.companyName || 'Unknown Company',
          salary:
            job.minSalary && job.maxSalary
              ? `$${Number(job.minSalary).toLocaleString()} - $${Number(job.maxSalary).toLocaleString()}`
              : 'Salary not disclosed',
          companyLogo: job.companyLogo || 'https://via.placeholder.com/100',
        }));
      } else if (data?.jobs && Array.isArray(data.jobs)) {
        jobsWithIds = data.jobs.map((job: any) => ({
          id: uuid.v4().toString(),
          title: job.title || 'Unknown Title',
          companyName: job.companyName || 'Unknown Company',
          salary:
            job.minSalary && job.maxSalary
              ? `$${Number(job.minSalary).toLocaleString()} - $${Number(job.maxSalary).toLocaleString()}`
              : 'Salary not disclosed',
          companyLogo: job.companyLogo || 'https://via.placeholder.com/100',
        }));
      } else {
        console.error(' Unexpected API response format:', data);
        Alert.alert('Error', 'Invalid data format from API.');
        return;
      }

      setJobs(jobsWithIds);
      setFilteredJobs(jobsWithIds);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching jobs:', error);
      setLoading(false);
      Alert.alert('Error', 'Failed to load jobs. Please try again later.');
    }
  };

  useEffect(() => {
    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredJobs(filtered);
  }, [searchQuery, jobs]);

  const handleSaveJob = (job: Job) => {
    if (!savedJobs.includes(job.id)) {
      addJobToSaved(job);
      setSavedJobs([...savedJobs, job.id]);
      
    }
  };

  const handleApplyJob = (job: Job) => {
    if (!appliedJobs.includes(job.id)) {
      setSelectedJob(job);
      setModalVisible(true);
    }
  };

  const markAsApplied = (id: string) => {
    setAppliedJobs([...appliedJobs, id]);
    setModalVisible(false);
  };

  const renderJobItem = ({ item }: { item: Job }) => (
    <View style={styles.jobContainer}>
    <View
      style={[
        styles.jobCard,
        { backgroundColor: isDarkMode ? '#2a2a2a' : '#fff', borderColor: isDarkMode ? 'white' : 'black' }, // jobcard
      ]}
    >
      <Image source={{ uri: item.companyLogo }} style={styles.logo} />
      <View style={styles.jobDetails}>
        <Text
          style={[
            styles.jobTitle,
            { color: isDarkMode ? '#fff' : '#000' },
          ]}
        >
          {item.title}
        </Text>
        <Text
          style={[
            styles.company,
            { color: isDarkMode ? '#aaa' : '#555' },
          ]}
        >
          {item.companyName}
        </Text>
        <Text
          style={[
            styles.salary,
            { color: isDarkMode ? '#4caf50' : '#2e7d32' },
          ]}
        >
          {item.salary}
        </Text>
        <View style={styles.buttonContainer}>
        <TouchableOpacity
  style={[
    styles.saveButton,
    savedJobs.includes(item.id) && styles.saveButtonDisabled,
  ]}
  onPress={() => handleSaveJob(item)}
  disabled={savedJobs.includes(item.id)}
>
  <Text
  style={[
    styles.saveButtonText,
    {
      color: savedJobs.includes(item.id)
        ? 'white' //  (same for both dark and light mode)
        : isDarkMode
        ? '#A29BFE' // lighter color in dark mode when not saved
        : '#433199', // default color in light mode when not saved
    },
  ]}
>
  {savedJobs.includes(item.id) ? 'Saved' : 'Save Job'}
</Text>
</TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.applyButton,
              appliedJobs.includes(item.id) && styles.applyButtonDisabled,
            ]}
            onPress={() => handleApplyJob(item)}
            disabled={appliedJobs.includes(item.id)}
          >
            <Text style={styles.applyButtonText}>
              {appliedJobs.includes(item.id) ? 'Applied' : 'Apply'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </View>
  );

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
        <Text 
          style={[
            styles.title,
            { color: isDarkMode ? 'white' : 'white' },
          ]}>Jobbit</Text>
        <View style={styles.searchContainer}>
          <Ionicons
            name="search-outline"
            size={20}
            color={isDarkMode ? '#aaa' : '#888'}
            style={styles.iconLeft}
          />
          <TextInput
            style={[
              styles.searchBar,
              { color: isDarkMode ? '#000' : '#000', borderColor: isDarkMode ? '#444' : '#ccc'},
              
            ]}
            placeholder="Search for jobs..."
            placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
            value={searchQuery}
            onChangeText={(text) => setSearchQuery(text)}
          />
          {searchQuery !== '' && (
            <TouchableOpacity onPress={clearSearch}>
              <Ionicons
                name="close-circle"
                size={20}
                color={isDarkMode ? '#aaa' : '#888'}
                style={styles.iconRight}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color={isDarkMode ? 'white' : 'black'} />
      ) : (
        <FlatList
          data={filteredJobs}
          keyExtractor={(item) => item.id}
          renderItem={renderJobItem}
          contentContainerStyle={{ paddingBottom: 20 }}
          ListEmptyComponent={() => (
            <View style={{ marginTop: 50, alignItems: 'center' }}>
              <Text style={{ color: isDarkMode ? '#fff' : '#000', fontSize: 18 }}>
                No jobs found.
              </Text>
            </View>
  )}
/>
      )}
      {selectedJob && (
        <ApplicationFormModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          jobTitle={selectedJob.title}
          companyName={selectedJob.companyName}
          jobId={selectedJob.id}
          markAsApplied={markAsApplied}
          isSavedJobsScreen={false}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default JobFinderTab;
