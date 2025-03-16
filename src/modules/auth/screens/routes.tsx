import { useMemo } from "react";
import { Stack } from "../../../core/navigation";
import { WelcomeScreen } from "./WelcomeScreen";

export enum E_AuthStackRoutes {
	WELCOME = "WELCOME",
}

export const useAuthGroupScreens = () => {
	return useMemo(() => {
		const AuthScreens = () => (
			<Stack.Group>
				<Stack.Screen name={E_AuthStackRoutes.WELCOME} component={WelcomeScreen} options={{ headerShown: false }} />
			</Stack.Group>
		);
		AuthScreens.displayName = "AuthGroupAuthScreens";
		return AuthScreens;
	}, []);
};
