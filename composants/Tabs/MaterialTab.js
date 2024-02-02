import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// imporatation des icons
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// les composants de l'ecran de navigation 
import Home from '../../ecrans/Home/Home';
import Notifications from '../../ecrans/Notifications/Notifications';
import RendezVous from '../../ecrans/RendezVous/RendezVous';
import Profil from '../../ecrans/Profil/Profil';
import { COLORS } from '../../outils/constantes';

const Tab = createMaterialBottomTabNavigator();

const MaterialTab = () => {
    return (
        <Tab.Navigator
          activeColor={COLORS.neige}
          inactiveColor={COLORS.White}
          tabBarColor={COLORS.BleuOcéan}
          barStyle={{ backgroundColor: COLORS.BleuOcéan }}
          shifting={true}
        >
          <Tab.Screen
            name="Acceuil"
            component={Home}
            
            options={{
              tabBarLabel: 'Acceuil',
              tabBarIcon: ({ color }) => (
                <Feather name="home" size={30} color={COLORS.White} />
              )
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarLabel: 'Notification',
              tabBarIcon: ({ color }) => (
                <Ionicons name="notifications-outline" size={30} color={COLORS.White} />
              ),
              // tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="Rendez-vous"
            component={RendezVous}
            options={{
              tabBarLabel: 'Rendez-vous',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="calendar-month-outline" size={30} color={COLORS.White} />
              ),
            }}
          />
          <Tab.Screen
            name="profil"
            component={Profil}
            options={{
              tabBarLabel: 'Profil',
              tabBarIcon: ({ color }) => (
                <Ionicons name="person-circle-sharp" size={30} color={COLORS.White} />  
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default MaterialTab;