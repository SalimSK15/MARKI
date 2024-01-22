import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
                <MaterialCommunityIcons name="home-circle-outline" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="Notifications"
            component={Notifications}
            options={{
              tabBarLabel: 'Notification',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell-circle-outline" color={color} size={26} />
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
                <MaterialCommunityIcons name="calendar-month" color={color} size={26} />
              ),
            }}
          />
          <Tab.Screen
            name="profil"
            component={Profil}
            options={{
              tabBarLabel: 'Profil',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account-convert-outline" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      );
}

export default MaterialTab