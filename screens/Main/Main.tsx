import * as React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BottomTabParamList} from "../../types";
import Colors from "../../constants/Colors";
import useColorScheme from "../../hooks/useColorScheme";
import {CustomIcon} from "../../components/CustomIcon";
import {createStackNavigator} from "@react-navigation/stack";
import Formations from "./FormationScreen/Formations";
import variables from "../../assets/variables";
import {Button, Icon} from "native-base";
import {Text, TouchableHighlight, TouchableOpacity, View} from "react-native";


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

    const onPress = () => {
        alert('message');
    }
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
                headerTitleStyle:{
                    fontSize:17,
                    alignSelf: 'center'
                },
                headerTitleContainerStyle:{
                  alignSelf:"center",
                    justifyCenter:'center'
                },
                headerLeftContainerStyle:{
                    marginLeft:10,
                },
                headerBackImage:props => (
                    <CustomIcon iconName={'ios-arrow-back'} type={"Ionicons"}/>
                ),
                headerRightContainerStyle: {
                    marginRight: 10,
                },
                headerRight: props => (
                    <TouchableOpacity
                        style={{ alignItems: "center", padding: 10}}
                        onPress={onPress}  activeOpacity={2}>
                        <CustomIcon iconName={'list'} type={'Feather'}/>
                    </TouchableOpacity>
                ),
            }}
        >
            <TabFormationsStack.Screen
                name="Mes Formations"
                component={Formations}
            />
        </TabFormationsStack.Navigator>
    );
}