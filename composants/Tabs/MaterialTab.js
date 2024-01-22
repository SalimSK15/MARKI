import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// imporatation des icons
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

// les composants de l'ecran de navigation 
import Home from '../../ecrans/Home/Home';
import Notifications from '../../ecrans/Notifications/Notifications';
import RendezVous from '../../ecrans/RendezVous/RendezVous';
import Profil from '../../ecrans/Profil/Profil';

const Tab = createMaterialBottomTabNavigator();

const MaterialTab = () => {
    return (
        <Tab.Navigator
          activeColor={"red"}
          inactiveColor={"yellow"}
          barStyle={{ backgroundColor: "white" }}
        >
          <Tab.Screen
            name="Acceuil"
            component={Home}
            options={{
              tabBarLabel: 'Acceuil',
              tabBarIcon: ({ color }) => (
                <Feather name="home" size={30} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarLabel: 'Notification',
              tabBarIcon: ({ color }) => (
                <Ionicons name="notifications-outline" size={30} color="black" />
              ),
            //   tabBarBadge: 3,
            }}
          />
          <Tab.Screen
            name="Rendez-vous"
            component={RendezVous}
            options={{
              tabBarLabel: 'Rendez-vous',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="calendar-month-outline" size={30} color="black" />
              ),
            }}
          />
          <Tab.Screen
            name="profil"
            component={Profil}
            options={{
              tabBarLabel: 'Profil',
              tabBarIcon: ({ color }) => (
                <Ionicons name="person-circle-sharp" size={30} color="black" />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default MaterialTab