// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNavigationContainerRef} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { RootStackParamList } from '../types/stackRoutes';

export const Stack = createStackNavigator<RootStackParamList>();
// export const Tab = createBottomTabNavigator<TabParamList>();
export const navigationRef = createNavigationContainerRef<RootStackParamList>();
