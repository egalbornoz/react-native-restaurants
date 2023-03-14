import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './navigations/Navigation';
import TabNavigator from './navigations/TabNavigator';





 function App() {
  return (
  //  <Navigation/>
  
<NavigationContainer>
  <TabNavigator />
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;