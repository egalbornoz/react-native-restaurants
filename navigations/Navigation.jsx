import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Favorites from '../screens/Favorites';
import Restaurants from '../screens/Restaurants';
import TopRestaurants from '../screens/TopRestaurants';
import Search from '../screens/Search';
import Account from '../screens/Account';
import { Icon } from '@rneui/base';


const Tab = createBottomTabNavigator();

export default function Navigation() {
    const screenOptions = (route,color) =>{
        let iconNeme
        switch (route.name) {
         case "restaurants":
            iconNeme = "compass-outline"
            break;
         case "favorites":
            iconNeme = "heart-outline"
            break;
         case "top-restaurants":
            iconNeme = "star-outline"
            break;
         case "search":
            iconNeme = "magnify"
            break;
         case "account":
            iconNeme = "home-outline"
            break;
        }
        return(
         <Icon
           type='material-community'
           name={iconNeme}
           size={22}
           color={color}
         />
        )
    }


  return (
    <NavigationContainer>
    
       <Tab.Navigator
       initialRouteName="restaurants"
       screenOptions={{
         tabBarActiveTintColor: "#0462b3",
         tabBarInactiveTintColor: "#4cc06c",
         // tabBarActiveBackgroundColor: "#feb72b",
         // tabBarInactiveBackgroundColor: "#527318"
       }}
        
       >
          <Tab.Screen
             name="restaurants"
             component={Restaurants}
             
             options={{title:"Restaurates"}}
          />
          <Tab.Screen
             name="favorites"
             component={Favorites}
             options={{title:"Favoritos"}}
          />
          <Tab.Screen
             name="top-restaurants"
             component={TopRestaurants}
             options={{title:"Los mejores Restaurantes"}}
          />
          <Tab.Screen
             name="search "
             component={Search }
             options={{title:"Buscar"}}
          />
          <Tab.Screen
             name="account"
             component={Account}
             options={{title:"Cuenta"}}
          />
          
       </Tab.Navigator>
    </NavigationContainer>
  )
}