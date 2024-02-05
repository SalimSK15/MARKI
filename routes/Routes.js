import { NavigationContainer } from '@react-navigation/native';
import MaterialTab from '../composants/Tabs/MaterialTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Connexion from '../composants/Ecran_Connexion/Connexion';
import Home from '../ecrans/Home/Home';

const Stack = createNativeStackNavigator();

const RoutesMenu = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='routeInitial' screenOptions={{headerShown: false}}>
        <Stack.Screen name="routeInitial" component={MaterialTab} />
        <Stack.Screen name="Connexion" component={Connexion} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RoutesMenu;