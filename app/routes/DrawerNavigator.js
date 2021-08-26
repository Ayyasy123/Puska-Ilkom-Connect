import React from 'react';
import { Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import {
  MaterialCommunityIcons, Ionicons, MaterialIcons,
} from '@expo/vector-icons';
import DrawerContent from '../components/DrawerContent';
import HomeScreen from '../screens/Home';
import ProfileScreen from '../screens/Profile';
import WebinarScreen from '../screens/Webinar';
import MyCourseScreen from '../screens/MyCourse';
import MyCertificateScreen from '../screens/MyCertificate';
import TransactionHistoryScreen from '../screens/TransactionHistory';
import global from '../../assets/styles/global';

const Drawer = createDrawerNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const WebinarStack = createStackNavigator();
const MyCourseStack = createStackNavigator();
const MyCertificateStack = createStackNavigator();
const TransactionHistoryStack = createStackNavigator();

const Home = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ headerShown: false }}
    />
  </HomeStack.Navigator>
);
const Profile = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
    />
  </ProfileStack.Navigator>
);
const Webinar = () => (
  <WebinarStack.Navigator>
    <WebinarStack.Screen
      name="Webinar"
      component={WebinarScreen}
    />
  </WebinarStack.Navigator>
);
const MyCourse = () => (
  <MyCourseStack.Navigator>
    <MyCourseStack.Screen
      name="MyCourse"
      component={MyCourseScreen}
    />
  </MyCourseStack.Navigator>
);
const MyCertificate = () => (
  <MyCertificateStack.Navigator>
    <MyCertificateStack.Screen
      name="MyCertificate"
      component={MyCertificateScreen}
    />
  </MyCertificateStack.Navigator>
);
const TransactionHistory = () => (
  <TransactionHistoryStack.Navigator>
    <TransactionHistoryStack.Screen
      name="TransactionHistory"
      component={TransactionHistoryScreen}
    />
  </TransactionHistoryStack.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{
      headerShown: false,
      drawerPosition: 'right',
      drawerType: 'front',
      drawerActiveTintColor: '#7293D5',
      drawerActiveBackgroundColor: '#F6F7FA',
      drawerInactiveTintColor: '#282828',
    }}
  >
    <Drawer.Screen
      name="dashboard"
      component={Home}
      options={{
        drawerLabel: ({ color }) => <Text style={[global.sb12Text, { color, fontSize: 14 }]}>Dashboard</Text>,
        drawerIcon: ({ focused, color, size }) => (focused ? <MaterialIcons name="home" size={size} color={color} /> : <MaterialCommunityIcons name="home-outline" size={size} color={color} />),
      }}
    />
    <Drawer.Screen
      name="profile"
      component={Profile}
      options={{
        drawerLabel: ({ color }) => <Text style={[global.sb12Text, { color, fontSize: 14 }]}>Profile</Text>,
        drawerIcon: ({ focused, color, size }) => <MaterialIcons name={focused ? 'person' : 'person-outline'} size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="webinar"
      component={Webinar}
      options={{
        drawerLabel: ({ color }) => <Text style={[global.sb12Text, { color, fontSize: 14 }]}>Webinar</Text>,
        drawerIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'md-calendar' : 'md-calendar-sharp'} size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="myCourse"
      component={MyCourse}
      options={{
        drawerLabel: ({ color }) => <Text style={[global.sb12Text, { color, fontSize: 14 }]}>My Course</Text>,
        drawerIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'clipboard' : 'clipboard-outline'} size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="myCertificate"
      component={MyCertificate}
      options={{
        drawerLabel: ({ color }) => <Text style={[global.sb12Text, { color, fontSize: 14 }]}>My Certificate</Text>,
        drawerIcon: ({ focused, color, size }) => <MaterialCommunityIcons name={focused ? 'file-certificate' : 'file-certificate-outline'} size={size} color={color} />,
      }}
    />
    <Drawer.Screen
      name="transactionHistory"
      component={TransactionHistory}
      options={{
        drawerLabel: ({ color }) => <Text style={[global.sb12Text, { color, fontSize: 14 }]}>Transaction History</Text>,
        drawerIcon: ({ focused, color, size }) => <Ionicons name={focused ? 'wallet' : 'wallet-outline'} size={size} color={color} />,
      }}
    />
  </Drawer.Navigator>
);
export default DrawerNavigator;
