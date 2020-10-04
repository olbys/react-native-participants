import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BottomTabParamList} from "../../types";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import {CustomIcon} from "../../components/CustomIcon";
import {createStackNavigator} from "@react-navigation/stack";
import Formations from "./FormationScreen/Formations";
import variables from "../../assets/variables";


interface IMain {

}

const BottomTab = createBottomTabNavigator<BottomTabParamList>();
export default function Main({}: IMain) {
    const colorScheme = useColorScheme();
    return (
        <BottomTab.Navigator
            initialRouteName="TabFormations"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint}}>
            <BottomTab.Screen
                name="TabFormations"
                component={TabFormationsNavigator}
                options={{
                    tabBarIcon: ({color}) => <CustomIcon iconName={'book'} size={40} color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
};

const TabFormationsStack = createStackNavigator();

function TabFormationsNavigator() {
    return (
        <TabFormationsStack.Navigator
            headerMode="screen"
            screenOptions={{
                headerShown: true,
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: variables.mainOrange_100,
                    elevation: 0,
                },
                headerRight: () => (
                    <CustomIcon type={"FontAwesome"} iconName={'th'}/>
                ),
                headerRightContainerStyle: {
                    marginRight: 20,
                },

            }}
        >
            <TabFormationsStack.Screen
                name="Mes Formations"
                component={Formations}
            />
        </TabFormationsStack.Navigator>
    );
}