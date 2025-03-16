import { StackScreenProps } from "@react-navigation/stack";
import { E_AuthStackRoutes } from "../../modules/auth/screens/routes";

export enum E_RootStackRoutes {
	TABS_HOME = "TABS_HOME",
}

export type RootStackParamList = {
	[E_AuthStackRoutes.WELCOME]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
