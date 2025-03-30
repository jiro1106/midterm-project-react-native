// npm install @react-navigation/native
// npm install @react-navigation/stack
// npm install @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import JobFinderScreen from '../screens/JobFinderScreen';
import SavedJobsScreen from '../screens/SavedJobsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
            <Stack.Navigator screenOptions={{
                headerShown: false, 
              }}>
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
                <Stack.Screen name="JobFinder" component={JobFinderScreen} />
                <Stack.Screen name="SavedJobs" component={SavedJobsScreen} />
            </Stack.Navigator>
    );
};

export default AppNavigator;