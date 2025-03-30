import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/WelcomeScreen';
import { useTheme } from '../themeToggle/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons'; 

type RootStackParamList = {
  Welcome: undefined;
  JobFinder: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp>();
  const { isDarkMode, toggleTheme } = useTheme(); 

  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        { backgroundColor: isDarkMode ? '#0e1a40' : '#6b86df' }, 
      ]}
    >
      
      <View style={styles.headerContainer}>
        <Text
          style={[
            styles.appName,
            { color: isDarkMode ? '#fff' : 'white' }, 
          ]}
        >
          Jobbit
        </Text>

        {/* icons for toggle */}
        <View style={styles.toggleContainer}>
          <Ionicons
            name={isDarkMode ? 'moon' : 'bulb-outline'}
            size={24}
            color={isDarkMode ? '#FFC107' : '#fff'}
            style={styles.toggleIcon}
          />
          <View style={styles.switchContainer}>
          <Switch
            value={isDarkMode}
            onValueChange={toggleTheme}
            thumbColor={isDarkMode ? '#fff' : '#fff'}
            trackColor={{
              false: 'red',
              true: '#4DA8DA',
            }}
          />
          </View>
        </View>
      </View>

      {/* welcome Image */}
      <Image
        source={require('../../assets/welcomeImg.png')}
        style={styles.welcomeImg}
      />

      {/* app description */}
      <Text
        style={[
          styles.title,
          { color: isDarkMode ? '#6b86df' : '#000' }, 
        ]}
      >
        Find your next job,{' '}
        <Text
          style={[
            styles.highlightedText,
            { color: isDarkMode ? '#fff' : '#f6f7f9' },
          ]}
        >
          fast and easy!
        </Text>
      </Text>

      {/* start finding button */}
      <TouchableOpacity
        style={styles.startBtn}
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'JobFinder' }],
          })
        }
      >
        <Text style={styles.startBtnText}>Start finding!</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
