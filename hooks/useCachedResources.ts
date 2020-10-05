import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import {FontAwesome, FontAwesome5, Ionicons} from "@expo/vector-icons";
import * as Font from "expo-font";

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHideAsync();

                // Load fonts
                await Font.loadAsync({
                    Roboto: require('native-base/Fonts/Roboto.ttf'),
                    Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
                    ...FontAwesome.font,
                });

            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hideAsync();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    return isLoadingComplete;
}
