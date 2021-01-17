import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import { useDispatch, useSelector } from "react-redux";
import React, {useEffect} from 'react';
import {
  Platform,AsyncStorage,
} from 'react-native';
import { NewsList } from "../Screens/NewsList";
import { Profile } from "../Screens/Profile";
import { Login } from "../Screens/Login";
import { Home } from "../Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { setIsAuth } from "../redux/reducers/authReducer";

const ProfileStack = createStackNavigator();
const ProfileNavigator = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <ProfileStack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
  </ProfileStack.Navigator>
);

const Tab =
  Platform.OS === 'ios'
    ? createBottomTabNavigator()
    : createMaterialBottomTabNavigator();
const AllNavigation =  () => {
  return (
    <Tab.Navigator
      activeColor="#fa6f44"
      shifting={true}
      barStyle={{
        backgroundColor: '#000',
        fontSize:26,
      }}
      tabBarOptions={{
        activeTintColor: '#fa6f44',
        fontSize:26,
        labelStyle:{fontSize:24,},
        showLabel: true,
      }}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="news"
        component={NewsList}
        options={{
          tabBarLabel: 'News',
        }}
      />
        <Tab.Screen
          name="Profile"
          component={ProfileNavigator}
          options={{
            headerShown: false,
          }}
        />
    </Tab.Navigator>
  );
};

const AppStack = createStackNavigator();
const AppNavigator = () => (
  <AppStack.Navigator screenOptions={{headerBackTitleVisible: false}}>
    <AppStack.Screen
      name="Home"
      options={{
        headerShown: false,
      }}
      component={AllNavigation}
    />
  </AppStack.Navigator>)


export const AppNavigation = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.authAPI.isAuth);

  useEffect(()=>{checkIsAuth()},[]);

  const checkIsAuth= async ()=>{
    const saveProfile = await AsyncStorage.getItem('@saveProfile');
    if (saveProfile) {
      dispatch(setIsAuth(true));
    }}

  return (
    <NavigationContainer>
    <AllNavigation isAuth={isAuth} />
    </NavigationContainer>
  );
};
