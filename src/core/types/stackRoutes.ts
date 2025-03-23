import { StackScreenProps } from "@react-navigation/stack";
import { E_AuthStackRoutes } from "../../modules/auth/screens/routes";
import { E_HubStackRoutes } from "../../modules/hub/routes";
import { CompositeScreenProps, NavigatorScreenParams } from "@react-navigation/native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export enum E_RootStackRoutes {
	TABS_HOME = "TABS_HOME",
}

export type RootStackParamList = {
	[E_AuthStackRoutes.WELCOME]: undefined;
	[E_RootStackRoutes.TABS_HOME]: NavigatorScreenParams<TabParamList>;
};

export type TabParamList = {
	[E_HubStackRoutes.HOME]: undefined;
};

export type TabsHomeScreenProps<T extends keyof TabParamList> = CompositeScreenProps<BottomTabScreenProps<TabParamList, T>, RootStackScreenProps<keyof RootStackParamList>>;

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootStackParamList {}
	}
}
