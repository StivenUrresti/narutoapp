import React from "react";
import { Tab } from ".";
import { useHubGroupScreens } from "../../modules/hub/routes";

export function TabsNavigation() {
	const renderHubScreens = useHubGroupScreens();
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
			}}
		>
			{renderHubScreens()}
		</Tab.Navigator>
	);
}
