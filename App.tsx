import { NavigationContainer } from "@react-navigation/native";
import { useRef } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { navigationRef } from "./src/core/navigation";
import { StackNavigation } from "./src/core/navigation/StackNavigation";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import store, { persistor } from "./src/core/libraries/redux";
import { PersistGate } from "redux-persist/integration/react";

const App = () => {
	const routerNameRef = useRef<string | undefined>(undefined);
	return (
		<GestureHandlerRootView style={styles.container}>
			<NavigationContainer
				ref={navigationRef}
				onReady={() => {
					routerNameRef.current = navigationRef?.getCurrentRoute()?.name;
				}}
			>
				<StackNavigation />
			</NavigationContainer>
		</GestureHandlerRootView>
	);
};

const application = () => (
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<App />
		</PersistGate>
	</Provider>
);

export default application;

const styles = StyleSheet.create({
	container: { flex: 1 },
});
