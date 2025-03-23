import React from "react";
import { Stack } from ".";
import { useAuthGroupScreens } from "../../modules/auth/screens/routes";
import { E_RootStackRoutes } from "../types/stackRoutes";
import { TabsNavigation } from "./TabsNavigation";

export const StackNavigation = () => {
	const isAuth = true;
	const renderAuthScreens = useAuthGroupScreens();
	return <Stack.Navigator>{isAuth ? <Stack.Screen name={E_RootStackRoutes.TABS_HOME} component={TabsNavigation} options={{ headerShown: false }} /> : renderAuthScreens()}</Stack.Navigator>;
};
