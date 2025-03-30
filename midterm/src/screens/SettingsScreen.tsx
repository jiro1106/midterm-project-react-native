import React from 'react';
import { View, Text, Switch } from 'react-native';
import { styles } from '../styles/SettingsScreen';
import { useTheme } from '../themeToggle/ThemeContext';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SettingsScreen: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

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
                 <Ionicons name="settings-outline" size={30} color="white" />
                 <Text 
                   style={[
                     styles.title,
                     { color: isDarkMode ? 'white' : 'white' },
                   ]}>
                     Settings</Text>
                 </View>
           </View>
      <View style={styles.settingsContainer}>
        <View 
        style={[
          styles.settingRow,
          { backgroundColor: isDarkMode ? '#2a2a2a' : '#fff'},
        ]}
      >
          <Ionicons
            name={isDarkMode ? 'moon-outline' : 'sunny-outline'}
            size={24}
            color={isDarkMode ? 'white' : 'black'}
          />
          <Text
            style={[
              styles.settingText,
              { color: isDarkMode ? '#fff' : '#333' },
            ]}
          >
            Dark Mode
          </Text>
          <Switch value={isDarkMode} onValueChange={toggleTheme} />
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
