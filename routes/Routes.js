import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialTab from '../composants/Tabs/MaterialTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const RoutesMenu = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='routeInitial' screenOptions={{headerShown: false}}>
        <Stack.Screen name="routeInitial" component={MaterialTab} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RoutesMenu;