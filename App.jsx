import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ScreenCategories from './screens/ScreenCategories';
import ScreenMealsCategorized from './screens/ScreenMealsCategorized';
import ScreenMeal from './screens/ScreenMeal';
import ScreenMealsFavorite from './screens/ScreenMealsFavorite';
import ContextProvider from './Context';
import Colors from './constants/Colors';
import Sizes from './constants/Sizes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            initialRouteName='Categories'
            screenOptions={{
                headerStyle: { backgroundColor: Colors.primary3 },
                headerTintColor: Colors.primary,
                tabBarInactiveBackgroundColor: Colors.primary3,
                tabBarActiveTintColor: Colors.secondary,
                tabBarActiveBackgroundColor: Colors.primary3,
                tabBarInactiveTintColor: Colors.primary2,
            }}
        >
            <Tab.Screen
                name='Categories'
                component={ScreenCategories}
                options={{
                    title: 'All Categories',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='list' color={color} size={Sizes.xl} />
                    ),
                }}
            />
            <Tab.Screen
                name='Favorites'
                component={ScreenMealsFavorite}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name='heart' color={color} size={Sizes.xl} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style='light' />
            <ContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: { backgroundColor: Colors.primary3 },
                            headerTintColor: Colors.primary,
                            contentStyle: { backgroundColor: Colors.dark },
                        }}
                    >
                        <Stack.Screen
                            name='Tabs'
                            component={Tabs}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name='CategorizedMeals'
                            component={ScreenMealsCategorized}
                        />
                        <Stack.Screen
                            name='Meal'
                            component={ScreenMeal}
                            options={{
                                title: 'About the Meal',
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ContextProvider>
        </>
    );
}
