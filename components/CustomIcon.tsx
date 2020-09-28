import {Icon} from "native-base";
import * as React from "react";


interface ICustomIcon{
    iconName :  string;
    size? : number;
    style? : object;
    color? : string;
    type? : "AntDesign" | "Entypo" | "EvilIcons" | "Feather" | "FontAwesome" | "FontAwesome5" | "Foundation" | "Ionicons" | "MaterialCommunityIcons" | "MaterialIcons" | "Octicons" | "SimpleLineIcons" | "Zocial";
}

export function CustomIcon({iconName, size, style, color, type} : ICustomIcon){
    return(
        <Icon color={color} fontSize={size} style={[style]} type={type ? type : "FontAwesome"}  name={iconName} />
    );
}