import { createStackNavigator } from '@react-navigation/stack'
import TopRestaurants from '../screens/TopRestaurants';


 const Stack = createStackNavigator();

export default function TopRestaurantsStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen
        name="toprestaurant"
        component={TopRestaurants}
        options={{title:"Mejores"}}
     />
    </Stack.Navigator> 
  )
}