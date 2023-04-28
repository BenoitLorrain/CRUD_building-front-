import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Accueil from './composants/Accueil';
import Register from './composants/Register';
import Connexion from './composants/Connexion';
import ConnexionNavigation from './composants/ConnexionNavigation'
import Profil from './composants/Profil';


const Menu = createBottomTabNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Menu.Navigator screenOptions={{
        tabBarActiveBackgroundColor : "#eee",
        tabBarShowLabel : false, 
        }}>
          <Menu.Screen name="home" component={Accueil} 
            options={{
              tabBarIcon : function(){
                return <MaterialCommunityIcons name="home-city-outline" color="black" size={30} />
              }
            }} 
          />
          <Menu.Screen name="Menu de connexion" component={ConnexionNavigation} 
            options={{
              tabBarIcon : function(){
                return <MaterialCommunityIcons name="account" color="black" size={30} />
              }
            }} 
          />
          



          
          
        </Menu.Navigator>
        
      </NavigationContainer>

      <StatusBar style="auto" />
    </View>


  );
}
{/*<Connexion/>*/}
{/*<Register/>*/}
{/*<ConnexionNavigation/>*/}
{/*<Profil/>*/}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
