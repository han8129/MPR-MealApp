import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import ScreenCategories from './screens/ScreenCategories';
import ScreenMealsCategorized from './screens/ScreenMealsCategorized';
import ScreenMeal from './screens/ScreenMeal';
import ScreenMealsFavorite from './screens/ScreenMealsFavorite';
import ContextProvider from './Context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName='Categories'
            screenOptions={{
                headerStyle: { backgroundColor: '#351401' },
                headerTintColor: 'white',
                sceneContainerStyle: { backgroundColor: '#3f2f25' },
                drawerContentStyle: { backgroundColor: '#351401' },
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: '#351401',
                drawerActiveBackgroundColor: '#e4baa1',
            }}
        >
            <Drawer.Screen
                name='Categories'
                component={ScreenCategories}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='list' color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name='Favorites'
                component={ScreenMealsFavorite}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='heart' color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
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
                            headerStyle: { backgroundColor: '#351401' },
                            headerTintColor: 'white',
                            contentStyle: { backgroundColor: '#3f2f25' },
                        }}
                    >
                        <Stack.Screen
                            name='Drawer'
                            component={DrawerNavigator}
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
