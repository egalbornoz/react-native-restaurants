import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import RestaurantsStack from "./RestaurantsStack";
import AccountStack from "./AccountStack";
import FavoritesStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack.jsx";
import SearchStack from "./SearchStack";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator
    Personalización menu bar
      initialRouteName="Restaurants"
      screenOptions={{
        activeTintColor: "#000",
        inactiveTintColor: "#FFF",
        // activeBackgroundColor: "#feb72b",
        // inactiveBackgroundColor: "#527318"
      
    }}
    
    >
      <Tab.Screen 
      name="restaurants"
      component={RestaurantsStack}
      options={{
        title: "Restaurantes",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="compass-outline" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen 
      name="favorites" 
      component={FavoritesStack} 
      options={{
        title: "Favoritos",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="heart-outline" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen 
      name="top-restaurants" 
      component={TopRestaurantsStack} 
      options={{
        title: "Mejores",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="star-outline" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen 
      name="search" 
      component={SearchStack} 
      options={{
        title: "Buscar",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="search-outline" size={size} color={color} />
        )
      }}
      />
      <Tab.Screen 
      name="account" 
      component={AccountStack}
      options={{
        title: "Cuenta",
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home-outline" size={size} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  );
};

export default Navigator;