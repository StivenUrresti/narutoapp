import { useMemo } from "react";
import { Tab } from "../../core/navigation";
import { HomeScreen } from "./screens";

export enum E_HubStackRoutes {
	HOME = "HOME",
}

export const useHubGroupScreens = () => {
	return useMemo(() => {
		const hubScreens = () => (
			<Tab.Group>
				<Tab.Screen name={E_HubStackRoutes.HOME} component={HomeScreen} />
			</Tab.Group>
		);
		hubScreens.displayName = "HubGroupScreens";
		return hubScreens;
	}, []);
};
