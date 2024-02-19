import { NavigationContainer } from '@react-navigation/native';
import MaterialTab from '../composants/Tabs/MaterialTab';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Connexion from '../composants/Ecran_Connexion/Connexion';
import Interface_Inscription from '../composants/Ecran_inscription/Interface_Inscription';
import Interface_Confirmation from '../composants/Ecran_Confirmation/Interface_Confirmation';
import Interface_Recherche from '../composants/recherche_Medecins/Interface_Recherche';
import Interface_detailsMedecin from '../composants/Ecran_detailsMedecin/Interface_detailsMedecin';

const Stack = createNativeStackNavigator();

const RoutesMenu = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='routeInitial' screenOptions={{headerShown: false}}>
        <Stack.Screen name="routeInitial"     component={MaterialTab} />
        <Stack.Screen name="Connexion"        component={Connexion} />
        <Stack.Screen name="Inscription"      component={Interface_Inscription} />
        <Stack.Screen name="Confirmation"     component={Interface_Confirmation} />
        <Stack.Screen name="Recherche"        component={Interface_Recherche} />
        <Stack.Screen name="detailsMedecin"   component={Interface_detailsMedecin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default RoutesMenu;