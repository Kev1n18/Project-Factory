import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/Home/home';
import { Maps } from './screens/Map/Map';
import { Settings } from './screens/settings/settings';
import * as Feather from "react-native-feather";

export default function App() {

  const Tab = createBottomTabNavigator();
  
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.tabBarStyle
        
        
      }}
      
      >
        <Tab.Screen 
        name='Maps' 
        component={Maps} 
        options={{
          tabBarIcon: ({focused, color, size}) => (
            focused ? (
              <View style={styles.focusedStyle}>
                <Feather.Map stroke="white" width={45} height={45}/>
              </View>
            ) : (
              <View style={styles.nonFocused}>
                <Feather.Map stroke="#616161" width={45} height={45}/>
              </View>
              
            )  
          ) 
        }}/>

        <Tab.Screen 
        name='Home' 
        component={Home} 
        options={{
          tabBarIcon: ({focused, color, size}) => (
            focused ? (
              <View style={styles.focusedStyle}>
                <Feather.Home stroke="white" width={45} height={45}/>
              </View>
            ) : (

              <View style={styles.nonFocused}>
                <Feather.Home stroke="#616161" width={45} height={45}/>
              </View>
            )  
          ) 
        }}/>

        <Tab.Screen 
        name='Settings' 
        component={Settings} 
        options={{
          tabBarIcon: ({focused, color, size}) => (
            focused ? (
              <View style={styles.focusedStyle}>
                <Feather.Settings stroke="white" width={45} height={45}/>
              </View>
            ) : (
              <View style={styles.nonFocused}>
                <Feather.Settings stroke="#616161" width={45} height={45}/>
              </View>
            )  
          ) 
        }}/>


      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBarStyle: {
    position: 'absolute',
    bottom: 28,
    left: 70,
    right: 70,
    borderRadius: 48,
    justifyContent: 'space-between',
    backgroundColor:'#013823',
    borderTopWidth: 0,
    paddingVertical: 30,
    shadowColor:"#CFCFCF",
    shadowOffset:{
      width: 1,
      height:2,
    },
    shadowOpacity: 0.6,
  },

  focusedStyle:{
    height: 70,
    width: 70,
    backgroundColor: '#B1FC85',
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
  nonFocused:{
    height: 70,
    width: 70,
    backgroundColor: '#000000',
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
  }
});

