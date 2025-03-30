import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { JobProvider } from './src/context/JobContext';
import { ThemeProvider } from './src/themeToggle/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <JobProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </JobProvider>
    </ThemeProvider>
  );
};

export default App;