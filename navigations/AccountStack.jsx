import { createStackNavigator } from '@react-navigation/stack'
import Account from '../screens/Account';


 const Stack = createStackNavigator();


export default function AccountStack() {
  return (
    <Stack.Navigator>
     <Stack.Screen
        name="cuenta"
        component={Account}
        options={{title:"Cuenta"}}
     />
    </Stack.Navigator>      
  )
}