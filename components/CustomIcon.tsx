import {Icon} from "native-base";
import * as React from "react";
import {ViewStyle} from "react-native";


interface ICustomIcon{
    iconName :  string;
    size? : number;
    style? : ViewStyle;
    color? : string;
    onPress? : any
    type? : "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial";
}

export function CustomIcon({iconName, size, style, color, type, onPress} : ICustomIcon){
    return(
        <Icon onPress={onPress} color={color} fontSize={size} style={[style]}
              type={type ? type : "FontAwesome"}  name={iconName} />
    );
}