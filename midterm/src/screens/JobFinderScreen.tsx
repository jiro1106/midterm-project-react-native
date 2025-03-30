import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JobFinderTabScreen from './JobFinderTabScreen';
import SavedJobsScreen from './SavedJobsScreen';
import SettingsScreen from './SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../themeToggle/ThemeContext'; 
import { View, Text, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const JobFinderScreen: React.FC = () => {
  const { isDarkMode } = useTheme(); // apply theme context

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: string = '';

          if (route.name === 'Job Finder') {
            iconName = 'briefcase-outline';
          } else if (route.name === 'Saved Jobs') {
            iconName = 'bookmark-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }

          return (
            <View
              style={[
                styles.tabContainer,
                focused ? styles.activeTab : styles.inactiveTab, // active / inactive tabs
              ]}
            >
              <Ionicons
                name={iconName}
                size={20} 
                color={focused ? '#433199' : color} 
              />
              <Text
                style={[
                  styles.tabText,
                  focused ? styles.activeText : styles.inactiveText, 
                ]}
              >
                {route.name === 'Job Finder'
                  ? 'Home'
                  : route.name === 'Saved Jobs'
                  ? 'Saved'
                  : 'Settings'}
              </Text>
            </View>
          );
        },
        headerShown: false, // hide header on all tabs
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#2b2b2b' : '#ffffff', 
          borderTopColor: isDarkMode ? '#333' : '#ccc',
          paddingTop: 12,
        },
        tabBarActiveTintColor: '#433199', // 
        tabBarInactiveTintColor: isDarkMode ? '#a6a6a6' : '#a6a6a6',
        tabBarLabelStyle: { display: 'none' }, 
      })}
    >
      <Tab.Screen name="Job Finder" component={JobFinderTabScreen} />
      <Tab.Screen name="Saved Jobs" component={SavedJobsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20, 
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  activeTab: {
    backgroundColor: '#D6DBF5', 
    borderRadius: 25,
    width: '300%',
    height: 35,
    paddingHorizontal: 0,
    paddingVertical: 5,
  },
  inactiveTab: {
    borderRadius: 25,
    width: '300%', 
    height: 35,
    paddingHorizontal: 0,
    paddingVertical: 5,
  },
  tabText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '600',
  },
  activeText: {
    color: '#433199', 
  },
  inactiveText: {
    color: '#a6a6a6', 
    marginLeft: 4,
  },
});

export default JobFinderScreen;
