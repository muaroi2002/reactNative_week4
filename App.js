
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Page1 from './views/Page1';
import Wellcome from './views/WellCome';
import GeneratePassword from './views/GeneratePass';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: true,
  tabBarLabelStyle: { fontSize: 14, fontWeight: 'bold' },
  headerShown: false,
  tabBarStyle: {
    backgroundColor: '#fff',
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}
      initialRouteName='Page1'>
        <Tab.Screen name="Page1" component={Page1} />
        <Tab.Screen name="Wellcome" component={Wellcome} />
        <Tab.Screen name="GeneratePass" component={GeneratePassword} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}