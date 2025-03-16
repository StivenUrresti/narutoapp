import React from "react";
import { Stack } from ".";
import { useAuthGroupScreens } from "../../modules/auth/screens/routes";

export const StackNavigation = () => {
	const renderAuthScreens = useAuthGroupScreens();
	return (
		<Stack.Navigator>
			<>{renderAuthScreens()}</>
		</Stack.Navigator>
	);
};
