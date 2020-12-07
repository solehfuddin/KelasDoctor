import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GetStarted, Register, Splash, SignIn, UploadPhoto, Doctor, Messages, Hospitals, ChatDoctor } from '../pages';
import { BottomNav } from '../components';
import Chatting from '../pages/Chatting';
import UserProfile from '../pages/UserProfile';
import UpdateProfile from '../pages/UpdateProfile';
import DoctorProfile from '../pages/DoctorProfile';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNav {...props} />}>
            <Tab.Screen
                name="Doctor"
                component={Doctor}
            />
            <Tab.Screen
                name="Messages"
                component={Messages}
            />
            <Tab.Screen
                name="Hospitals"
                component={Hospitals}
            />
        </Tab.Navigator>
    )
}

const Router = () => {
    return (
        <Stack.Navigator initialRouteName="Splash">
            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GetStarted"
                component={GetStarted}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UploadPhoto"
                component={UploadPhoto}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MainApp"
                component={MainApp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChatDoctor"
                component={ChatDoctor}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Chatting"
                component={Chatting}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UserProfile"
                component={UserProfile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="UpdateProfile"
                component={UpdateProfile}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DoctorProfile"
                component={DoctorProfile}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default Router;