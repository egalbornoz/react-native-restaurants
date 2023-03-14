// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Restaurants from "../screens/Restaurants";
// import Favorites from "../screens/Favorites";
// import Account from "../screens/Account";
// import { Ionicons } from "@expo/vector-icons";
// import TopRestaurants from "../screens/TopRestaurants";
// import Search from "../screens/Search";

// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//     Personalización menu bar
//       initialRouteName="Restaurants"
//       tabBarOptions={{
//       activeTintColor: "#000",
//       activeBackgroundColor: "#feb72b",
//       inactiveTintColor: "#FFF",
//       inactiveBackgroundColor: "#527318"
//     }}
    
//     >
//       <Tab.Screen 
//       name="restaurants"
//       component={Restaurants}
//       options={{
//         title: "Restaurantes",
//         tabBarIcon: ({ color, size }) => (
//           <Ionicons name="compass-outline" size={size} color={color} />
//         )
//       }}
//       />
//       <Tab.Screen 
//       name="favorites" 
//       component={Favorites} 
//       options={{
//         title: "Favoritos",
//         tabBarIcon: ({ color, size }) => (
//           <Ionicons name="heart-outline" size={size} color={color} />
//         )
//       }}
//       />
//       <Tab.Screen 
//       name="top-restaurants" 
//       component={TopRestaurants} 
//       options={{
//         title: "Mejores",
//         tabBarIcon: ({ color, size }) => (
//           <Ionicons name="star-outline" size={size} color={color} />
//         )
//       }}
//       />
//       <Tab.Screen 
//       name="search" 
//       component={Search} 
//       options={{
//         title: "Buscar",
//         tabBarIcon: ({ color, size }) => (
//           <Ionicons name="search-outline" size={size} color={color} />
//         )
//       }}
//       />
//       <Tab.Screen 
//       name="Cuenta" 
//       component={Account}
//       options={{
//         title: "Cuenta",
//         tabBarIcon: ({ color, size }) => (
//           <Ionicons name="home-outline" size={size} color={color} />
//         )
//       }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default TabNavigator;